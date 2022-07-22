import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewspostDetailComponent } from './newspost-detail/newspost-detail.component';
import { NewspostListComponent } from './newspost-list/newspost-list.component';

const routes: Routes = [
  {path : 'news' , component:NewspostListComponent},
  {path : 'news/:id', component:NewspostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewspostRoutingModule { }
