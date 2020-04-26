import { NotfoundComponent } from './notfound/notfound.component';
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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GaurdService } from './gaurd.service';

const routes:Routes=[
  {path:'', redirectTo:'/Home',pathMatch:'full'},
{path:'Home',component:HeaderComponent},
{path:'About',component:IntroComponent},
{path:'Gallery',component:GallaryComponent},
{path:'Services',component:ContentComponent},
{path:'Testimonials',component:TestimonialsComponent},
{path:'Client',component:ClientComponent},
{path:'Pricing',component:PricingtableComponent},
{path:'Blog',component:BlogComponent, canActivate: [GaurdService]},
{path:'Article/:id',component:ArticleComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'contactus',component:ContactusComponent},
{path:'404',component:NotfoundComponent},
{path:'**',redirectTo:'/404'},
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
