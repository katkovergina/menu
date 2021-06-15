import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { DocumentsComponent } from './documents/documents.component';
import { ImagesComponent } from './images/images.component';
import { ChartsComponent } from './charts/charts.component';
import { ChildDocAboutComponent } from './documents/child-doc-about/child-doc-about.component';
import { ChildBioAuthorComponent } from './documents/child-bio-author/child-bio-author.component';
import { ChildImgsPrinceComponent } from './images/child-imgs-prince/child-imgs-prince.component';
import { ChildImgsAntoineComponent } from './images/child-imgs-antoine/child-imgs-antoine.component';

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    DocumentsComponent,
    ImagesComponent,
    ChartsComponent,
    ChildDocAboutComponent,
    ChildBioAuthorComponent,
    ChildImgsPrinceComponent,
    ChildImgsAntoineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
