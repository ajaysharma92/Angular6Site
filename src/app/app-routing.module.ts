import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientComponent } from './client/client.component';
import { PricingtableComponent } from './pricingtable/pricingtable.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';

const routes:Routes=[
  {path:'', redirectTo:'/Home',pathMatch:'full'},
{path:'Home',component:HeaderComponent},
{path:'About',component:IntroComponent},
{path:'Gallery',component:GallaryComponent},
{path:'Services',component:ContentComponent},
{path:'Testimonials',component:TestimonialsComponent},
{path:'Client',component:ClientComponent},
{path:'Pricing',component:PricingtableComponent},
{path:'Blog',component:BlogComponent},
{path:'Article/:id',component:ArticleComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
