import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { ImagesComponent } from "./images/images.component";
import { DocumentsComponent } from "./documents/documents.component";
import { ChartsComponent } from "./charts/charts.component";
import { ChildDocAboutComponent } from "./documents/child-doc-about/child-doc-about.component";
import {ChildBioAuthorComponent} from "./documents/child-bio-author/child-bio-author.component";
import {ChildImgsPrinceComponent} from "./images/child-imgs-prince/child-imgs-prince.component";
import {ChildImgsAntoineComponent} from "./images/child-imgs-antoine/child-imgs-antoine.component";

const routes: Routes = [
  {
    path: '', component:MenuComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: 'docs', component: DocumentsComponent},
      {path: 'child-doc-about', component: ChildDocAboutComponent},
      {path: 'child-bio-author', component: ChildBioAuthorComponent},
      {path: 'imgs', component: ImagesComponent},
      {path: 'child-imgs-prince', component: ChildImgsPrinceComponent},
      {path: 'child-imgs-antoine', component: ChildImgsAntoineComponent},
      {path: 'charts', component: ChartsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
