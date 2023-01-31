import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RequestApiService } from './services/request-api.service';
import { HttpClientModule } from '@angular/common/http';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SearchSituationComponent } from './pages/search-situation/search-situation.component';
import { SearchOperationComponent } from './pages/search-operation/search-operation.component';
import { MatTableModule } from '@angular/material/table'  


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SearchComponent,
    SearchSituationComponent,
    SearchOperationComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule, 
      FormsModule,
      HttpClientModule,
      MatBottomSheetModule,
      MatCardModule,
      CommonModule,
      MatTableModule
  ],
  providers: [RequestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }