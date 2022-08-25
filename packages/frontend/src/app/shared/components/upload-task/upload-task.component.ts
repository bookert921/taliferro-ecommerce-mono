import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css']
})
export class UploadTaskComponent implements OnInit, OnDestroy {

  @Input() file?: File;
  @Input() data: any;

  public uploadProgress: any;
  private _ref?: AngularFireStorageReference;
  private _task?: AngularFireUploadTask;
  public downloadURL?: any;
  private _taskSubscription?: Subscription
  

  constructor(private _storage: AngularFireStorage, private _db: AngularFirestore) {
    

  }

  ngOnInit(): void {
    this.startUpload();
  }

  ngOnDestroy(): void {
    if (this._taskSubscription)
      this._taskSubscription.unsubscribe();
  }

  startUpload() {
    try {
      const path = environment.LOGO_PATH + `/${Date.now()}_${this.file?.name}`;

      this._ref = this._storage.ref(path);
      this.processUpload(path);
    } catch (error) {
      console.error("START UPLOAD", error);
    }
  }

  processUpload(path: string): void {
    try {
      this._task = this._storage.upload(path, this.file)
      this.uploadProgress = this._task.percentageChanges();
      this._taskSubscription = this._task.snapshotChanges().pipe(
        finalize(async () => {
          this.downloadURL = await this._storage.ref(path).getDownloadURL().toPromise();
          this.data.logos.push({
            'name': this.file?.name,
            'url': this.downloadURL,
            'uploadedAt': new Date().getTime()
          });
        })
      ).subscribe();
    } catch (error) {
      console.error("PROCESS UPLOAD");
    }
  }



}
