import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'home/admin', component: AdminComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
