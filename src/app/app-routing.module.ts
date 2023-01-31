import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { SearchOperationComponent } from './pages/search-operation/search-operation.component';
import { SearchSituationComponent } from './pages/search-situation/search-situation.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search-operation', component: SearchOperationComponent },
  { path: 'search-situation', component: SearchSituationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
