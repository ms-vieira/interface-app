import { Component, OnInit } from '@angular/core';
import{ RequestApiService } from 'src/app/services/request-api.service'
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-search-situation',
  templateUrl: './search-situation.component.html',
  styleUrls: ['./search-situation.component.css']
})
export class SearchSituationComponent implements OnInit {

  documentNumber = ""
  statusResponse = ""

  constructor(private requestApiService: RequestApiService) { }
  ngOnInit() { }

  async findBySituation() {
    this.statusResponse = await firstValueFrom(this.requestApiService.findBySituation(this.documentNumber)) as any
    console.log(this.statusResponse)
  }
}
