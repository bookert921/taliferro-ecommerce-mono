import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-video2-edit',
  templateUrl: './video2-edit.component.html',
  styleUrls: ['./video2-edit.component.css']
})
export class Video2EditComponent extends DataHandlerComponent implements OnInit, OnDestroy {

  isHovering: boolean = false;
  dropFiles: File[] = [];
  uploadProgress: any;
  uploaded: boolean = false;
  resultsFile: any;

  private _ref?: AngularFireStorageReference;
  private _task?: AngularFireUploadTask;
  private _taskSubscription?: Subscription;


  constructor(protected _dataService: DataService, private _storage: AngularFireStorage, public colorService: ColorsService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (!this.data.video2) {
      this.data.video2 = {
        headerText: '',
        descriptionText: '',
        videoURL: '',
        videoID: null,
        imageURL: []
      }
    }

    if (!this.data.video2.imageURL) {
      this.data.video2.imageURL = []
    }
  }

  ngOnDestroy(): void {
    if (this._taskSubscription)
      this._taskSubscription.unsubscribe();
  }


  onSubmit(): void {
    super.onSubmit(environment.SETTINGS);
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
      this.data.logos.splice(at, 1);
    }
  }

  upload(event: any) {
    try {
      const path = environment.FILE_PATH + `/${Date.now()}_${event.target.files[0].name}`;
      if (!environment.production)
        console.log("PATH", path);

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
          if (!environment.production)
            console.log("Download URL", downloadURL);

          this.uploaded = true;
          this.data.video2.imageURL.push({
            'name': event.target.files[0].name,
            'url': downloadURL,
            'uploadedAt': new Date().getTime()
          });
          
          if (!environment.production)
            console.log(this.data.video2);
        })
      ).subscribe();
    } catch (error) {
      console.error("PROCESS UPLOAD", error);
    }
  }

}
