import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';     
import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';

import {
  MatToolbarModule,
  MatSelectModule,
  MatIconModule,
  MatTableModule,
  MatSortModule,
  MatCardModule,
  MatPaginatorModule,
  MatDialogModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSpinner,
  MatMenuModule
} from '@angular/material';

@NgModule({

  imports:      [  
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    MenubarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatSelectModule,
    MatSortModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'locations', component: LocationsComponent },
    ]) ],

  declarations: [ 
    AppComponent,
    HelloComponent,
    NavbarComponent,
    HomeComponent,
    LocationsComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
