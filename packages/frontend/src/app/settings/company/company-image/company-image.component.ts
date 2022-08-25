import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-company-image',
  templateUrl: './company-image.component.html',
  styleUrls: ['./company-image.component.css']
})
export class CompanyImageComponent implements OnInit, OnDestroy {

  isHovering: boolean = false;
  dropFiles: File[] = [];
  resultsFile: any;
  uploadProgress: any;
  uploaded: boolean = false;
  @Input() data: any;
  @Output() done = new EventEmitter();

  private _ref?: AngularFireStorageReference;
  private _task?: AngularFireUploadTask;
  private _taskSubscription?: Subscription;


  constructor(private _storage: AngularFireStorage, private _dataService: DataService, public colorService: ColorsService) {

  }

  ngOnInit(): void {
    if (!this.data.files)
      this.data.files = [];
  }

  ngOnDestroy(): void {
    if (this._taskSubscription)
      this._taskSubscription.unsubscribe();
  }

  onSubmit(): void {
    if (this.data._id)
      this.onUpdate();
    else
      this.onAdd();

  }

  onUpdate(): void {
    try {
      this._dataService.update(environment.SETTINGS, this.data._id, this.data);
      this.complete();
    } catch (error) {
      console.error(error);
    }
  }

  onAdd(): void {
    try {
      this._dataService.add(environment.SETTINGS, this.data).then((result) => {
        this.data._id = result.id;
        this.complete();
      })
    } catch (error) {
      console.error(error);
    }
  }

  complete(): void {
    this.done.emit();
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    try {
      for (let i = 0; i < files.length; i++) {
        let f = files.item(i);
        if (f)
          this.dropFiles.push(f);
      }
      this.uploaded = true;
    } catch (error) {
      console.error("ON DROP");
      this.uploaded = false;
    }
  }

  onDeleteFile(file: any, at: number): void {
    if (file && file.url) {
      this._storage.refFromURL(file.url).delete();
      this.data.files.splice(at, 1);
      this.onUpdate();
    }
  }


  upload(event: any) {
    try {
      const path = environment.FILE_PATH + `/${Date.now()}_${event.target.files[0].name}`;

      this.processUpload(event, path);
    } catch (error) {
      console.error("UPLOAD", error);
    }
  }


  processUpload(event: any, path: string): void {
    try {
      this._ref = this._storage.ref(path);
      this._task = this._storage.upload(path, event.target.files[0])
      this.uploadProgress = this._task.percentageChanges();
      this._taskSubscription = this._task.snapshotChanges().pipe(
        finalize(async () => {
          const downloadURL = await this._storage.ref(path).getDownloadURL().toPromise();
          this.uploaded = true;
          this.data.files.push({
            'name': event.target.files[0].name,
            'url': downloadURL,
            'uploadedAt': new Date().getTime()
          });
        })
      ).subscribe();
    } catch (error) {
      console.error("PROCESS UPLOAD", error);
    }
  }

}
