import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {

  baseUrl: string = 'http://prod-environment-client-api.eba-ncwv9f6p.us-east-1.elasticbeanstalk.com/client';
  
  constructor(private httpClient: HttpClient) { }

  upload(files: Set<File>, request: string) {
   const formData = new FormData();
   formData.append('request', request)
   files.forEach(file => formData.append('attachDocument', file));
   return this.httpClient.post(this.baseUrl, formData, {
    observe: 'events',
    reportProgress: true
    });
  }

  findById(numberDocument: string) {
    return this.httpClient.get(`${this.baseUrl}/${numberDocument}`)
  }

  onUpdate(request: string, numberDocument: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.put(`${this.baseUrl}/${numberDocument}`, request,  {headers}).subscribe(
      val => {
          console.log("PUT call successful value returned in body", 
                      val);
      },
      response => {
          console.log("PUT call in error", response);
      },
      () => {
          console.log("The PUT observable is now completed.");
      }
  );
  }

  findByOperation(numberDocument:string){
    const pathOperation : string = "/operation/"
    return this.httpClient.get(`${this.baseUrl}${pathOperation}${numberDocument}`)
  }

  findBySituation(numberDocument:string) {
    const path : string = "/situation/";
   return  this.httpClient.get(`${this.baseUrl}${path}${numberDocument}`)
  }
}