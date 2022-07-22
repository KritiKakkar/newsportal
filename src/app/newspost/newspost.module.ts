import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewspostRoutingModule } from './newspost-routing.module';
import { NewspostFeaturedComponent } from './newspost-featured/newspost-featured.component';
import { NewspostRecentComponent } from './newspost-recent/newspost-recent.component';
import { NewspostListComponent } from './newspost-list/newspost-list.component';
import { NewspostDetailComponent } from './newspost-detail/newspost-detail.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    NewspostFeaturedComponent,
    NewspostRecentComponent,
    NewspostListComponent,
    NewspostDetailComponent,
    CategoriesComponent
  ],
  exports:[

    NewspostFeaturedComponent
  ],
  imports: [
    CommonModule,
    NewspostRoutingModule
  ]
})
export class NewspostModule { }
