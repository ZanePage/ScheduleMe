import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "search", component: SearchresultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
