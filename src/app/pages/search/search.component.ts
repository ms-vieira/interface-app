import { Component, OnInit } from '@angular/core';
import{ RequestApiService } from 'src/app/services/request-api.service'
import { firstValueFrom } from 'rxjs';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  documentNumber = ""

  response = {
    address:{
       street:null,
       number:null,
       zipCode:null,
       district:null,
       city:null,
       state:null
    },
    numberDocument:null,
    observationClient:null,
    attachDocument:null,
    name: null
  }

  constructor(private requestApiService: RequestApiService) { }
  ngOnInit() { }

  async findById() {
    this.response = await firstValueFrom(this.requestApiService.findById(this.documentNumber)) as any
    console.log(this.response)
  }

  async onUpdate() {
    console.log(JSON.stringify(this.response) + this.documentNumber)
    this.requestApiService.onUpdate(JSON.stringify(this.response), this.documentNumber);
  }

  async findByOperation() {
    this.response = await firstValueFrom(this.requestApiService.findByOperation(this.documentNumber)) as any
    console.log(this.response)
  }
}
