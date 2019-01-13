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
    SocialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
