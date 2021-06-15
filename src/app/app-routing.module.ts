import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { ImagesComponent } from "./images/images.component";
import { DocumentsComponent } from "./documents/documents.component";
import { ChartsComponent } from "./charts/charts.component";

const routes: Routes = [
  {
    path: '', component:MenuComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: 'docs', component: DocumentsComponent},
      {path: 'imgs', component: ImagesComponent},
      {path: 'charts', component: ChartsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
