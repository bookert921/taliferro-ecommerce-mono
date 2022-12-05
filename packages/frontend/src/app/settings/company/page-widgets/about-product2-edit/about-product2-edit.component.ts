import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-about-product2-edit',
  templateUrl: './about-product2-edit.component.html',
  styleUrls: ['./about-product2-edit.component.css']
})
export class AboutProduct2EditComponent extends DataHandlerComponent implements OnInit {

  isHovering: boolean = false;
  isHovering2: boolean = false;
  dropFiles: File[] = [];
  dropFiles2: File[] = [];
  resultsFile: any;
  resultsFile2: any;
  uploadProgress: any;
  uploadProgress2: any;
  uploaded: boolean = false;
  private _ref?: AngularFireStorageReference;
  private _task?: AngularFireUploadTask;
  private _taskSubscription?: Subscription;

  constructor(private _storage: AngularFireStorage, protected _dataService: DataService, public colorService: ColorsService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (!this.data.aboutProduct2) {
      this.data.aboutProduct2 = {
        imageURL1: [],
        imageURL2: [],
        headerText: '',
        descriptionText: '',
        bulletText1: '',
        bulletText2: '',
        bulletText3: '',
        buttonText: '',
        buttonLink: '',
      }
    }
  }

  onSubmit(): void {
    super.onSubmit(environment.SETTINGS);
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  toggleHover2(event: boolean) {
    this.isHovering2 = event;
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
      if (!environment.production)
        console.error("ON DROP");
      this.uploaded = false;
    }
  }
  onDrop2(files: FileList) {
    try {
      for (let i = 0; i < files.length; i++) {
        let f = files.item(i);
        if (f)
          this.dropFiles2.push(f);
      }
      this.uploaded = true;
    } catch (error) {
      if (!environment.production)
        console.error("ON DROP");
      this.uploaded = false;
    }
  }

  onDeleteImage1File(file: any, at: number): void {
    if (file && file.url) {
      this._storage.refFromURL(file.url).delete();
      this.data.aboutProduct2.imageURL1.splice(at, 1);
    }
  }

  onDeleteImage2File(file: any, at: number): void {
    if (file && file.url) {
      this._storage.refFromURL(file.url).delete();
      this.data.aboutProduct2.imageURL2.splice(at, 1);
    }
  }


  uploadImage1(event: any) {
    try {
      const path = environment.FILE_PATH + `/${Date.now()}_${event.target.files[0].name}`;

      this.processImage1Upload(event, path);
    } catch (error) {
      if (!environment.production)
        console.error("UPLOAD", error);
    }
  }

  uploadImage2(event: any) {
    try {
      const path = environment.FILE_PATH + `/${Date.now()}_${event.target.files[0].name}`;

      this.processImage2Upload(event, path);
    } catch (error) {
      if (!environment.production)
        console.error("UPLOAD", error);
    }
  }

  processImage1Upload(event: any, path: string): void {
    try {
      this._ref = this._storage.ref(path);
      this._task = this._storage.upload(path, event.target.files[0])
      this.uploadProgress = this._task.percentageChanges();
      this._taskSubscription = this._task.snapshotChanges().pipe(
        finalize(async () => {
          const downloadURL = await this._storage.ref(path).getDownloadURL().toPromise();
          this.uploaded = true;
          this.data.aboutProduct2.imageURL1.push({
            'name': event.target.files[0].name,
            'url': downloadURL,
            'uploadedAt': new Date().getTime()
          });
        })
      ).subscribe();
    } catch (error) {
      if (!environment.production)
        console.error("PROCESS UPLOAD", error);
    }
  }
  processImage2Upload(event: any, path: string): void {
    try {
      this._ref = this._storage.ref(path);
      this._task = this._storage.upload(path, event.target.files[0])
      this.uploadProgress2 = this._task.percentageChanges();
      this._taskSubscription = this._task.snapshotChanges().pipe(
        finalize(async () => {
          const downloadURL = await this._storage.ref(path).getDownloadURL().toPromise();
          this.uploaded = true;
          this.data.aboutProduct2.imageURL2.push({
            'name': event.target.files[0].name,
            'url': downloadURL,
            'uploadedAt': new Date().getTime()
          });
        })
      ).subscribe();
    } catch (error) {
      if (!environment.production)
        console.error("PROCESS UPLOAD", error);
    }
  }

}
