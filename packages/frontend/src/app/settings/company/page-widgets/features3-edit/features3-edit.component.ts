import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { ColorsService } from 'src/app/shared/services/colors.service';

@Component({
  selector: 'app-features3-edit',
  templateUrl: './features3-edit.component.html',
  styleUrls: ['./features3-edit.component.css']
})
export class Features3EditComponent extends DataHandlerComponent implements OnInit {

  isHovering: boolean = false;
  dropFiles: File[] = [];
  resultsFile: any;
  uploadProgress: any;
  uploaded: boolean = false;
  private _ref?: AngularFireStorageReference;
  private _task?: AngularFireUploadTask;
  private _taskSubscription?: Subscription;

  constructor(private _storage: AngularFireStorage, protected _dataService: DataService, public colorService: ColorsService) {
    super(_dataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (!this.data.features3) {
      this.data.features3 = {
        headerText: '',
        descriptionText: '',
        imageURL: [],

        featureHeading1: '',
        featureDescription1: '',
        featureIcon1: '',

        featureHeading2: '',
        featureDescription2: '',
        featureIcon2: '',

        featureHeading3: '',
        featureDescription3: '',
        featureIcon3: '',

        featureHeading4: '',
        featureDescription4: '',
        featureIcon4: '',

        featureHeading5: '',
        featureDescription5: '',
        featureIcon5: '',

        featureHeading6: '',
        featureDescription6: '',
        featureIcon6: '',
      }
    }
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
      if (!environment.production)
        console.error("ON DROP");
      this.uploaded = false;
    }
  }
  onDeleteImageFile(file: any, at: number): void {
    if (file && file.url) {
      this._storage.refFromURL(file.url).delete();
      this.data.features3.imageURL.splice(at, 1);
    }
  }



  uploadImage(event: any) {
    try {
      const path = environment.FILE_PATH + `/${Date.now()}_${event.target.files[0].name}`;

      this.processImageUpload(event, path);
    } catch (error) {
      if (!environment.production)
        console.error("UPLOAD", error);
    }
  }


  processImageUpload(event: any, path: string): void {
    try {
      this._ref = this._storage.ref(path);
      this._task = this._storage.upload(path, event.target.files[0])
      this.uploadProgress = this._task.percentageChanges();
      this._taskSubscription = this._task.snapshotChanges().pipe(
        finalize(async () => {
          const downloadURL = await this._storage.ref(path).getDownloadURL().toPromise();
          this.uploaded = true;
          this.data.features3.imageURL.push({
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
