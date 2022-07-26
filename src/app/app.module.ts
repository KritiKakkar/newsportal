import { NgModule } from '@angular/core';
import { BrowserModule , Title} from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { NewspostModule } from './newspost/newspost.module';
import { CmspageModule } from './cmspage/cmspage.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NewspostModule,
    CmspageModule,
    AppRoutingModule,
    
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
