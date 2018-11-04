import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPopper } from 'angular-popper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsService } from './services/projects.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    NgxPopper,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/portfolio', pathMatch: 'full'},
      {path:'portfolio',component: PortfolioComponent},
      {path:'about',component: AboutComponent},
      {path:'contact', component: ContactComponent}
    ])
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
  

})
export class AppModule { }
export class OtherModule { }
