import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientComponent } from './client/client.component';
import { PricingtableComponent } from './pricingtable/pricingtable.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';
import { AppRoutingModule } from './/app-routing.module';
import {ConfigService} from './config.service';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PagerService } from './pager.service';
import { ModalModule } from 'ngb-modal';
import { CommonModalComponent, ModalComp } from './common-modal/common-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GallaryComponent,
    ContentComponent,
    TestimonialsComponent,
    ClientComponent,
    PricingtableComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    SocialComponent,
    BlogComponent,
    PostComponent,
    ArticleComponent,
    NotfoundComponent,
    PaginationComponent,
    CommonModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    HttpClientModule
  ],
  providers: [ConfigService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
