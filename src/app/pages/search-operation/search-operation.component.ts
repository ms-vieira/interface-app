import { Component, OnInit } from '@angular/core';
import{ RequestApiService } from 'src/app/services/request-api.service'
import { firstValueFrom } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Operation } from './Operation';

@Component({
  selector: 'app-search-operation',
  templateUrl: './search-operation.component.html',
  styleUrls: ['./search-operation.component.css']
})
export class SearchOperationComponent implements OnInit {

documentNumber = ""

response!:Operation[];

dataSource: any;

constructor(private requestApiService: RequestApiService) { }
ngOnInit() { }

async findByOperation() {
  this.response = await firstValueFrom(this.requestApiService.findByOperation(this.documentNumber)) as any
  console.log(this.response)
  this.dataSource = new MatTableDataSource(this.response);
  console.log(this.response)
}

displayedColumns: string[] = ['action', 'clientId', 'datProcess'];
}
