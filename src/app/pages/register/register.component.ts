import{ RequestApiService } from 'src/app/services/request-api.service'
import { Component, OnInit  } from '@angular/core';
import { HttpEventType, HttpEvent , HttpResponse} from '@angular/common/http';
import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  files: Set<File> = new Set();
  progress = 0;

  constructor(private requestApiService: RequestApiService) { }
  ngOnInit() { }

  request = {
    address: {
      street: "",
      number: null,
      zipCode: "",
      district: "",
      city: "",
      state: ""
    },
    numberDocument: "",
    observationClient: "",
    name: ""
  }

  onChange(event: any) {
    console.log(event);
    const selectedFiles = <FileList>event.srcElement.files;
    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    
    document.getElementById('customFileLabel')!.innerHTML = fileNames.join(', ');
    
    this.progress = 0;
  }


  onUpload() {
    if (this.files && this.files.size > 0) {
      this.requestApiService.upload(this.files, JSON.stringify(this.request))
        .pipe(
          this.uploadProgress(progress => {
            console.log(progress);
            this.progress = progress;
          }),
          this.filterResponse()
        )
        .subscribe(response => console.log('Upload Concluído'));
    }
  }


  filterResponse<T>() {
  return pipe(
    filter((event: any) => event.type === HttpEventType.Response),
    map((res: HttpResponse<T>) => res.body)
  );
}

  uploadProgress<T>(cb: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress) {
      cb(Math.round((event.loaded * 100) / Number(event.total)));
    }
  });
}
}