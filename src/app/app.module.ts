import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import { InscripcionesComponent } from './inscripciones/inscripciones.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogDelete } from './list/list.component';
import { DialogEdit } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    InscripcionesComponent,
    ListComponent,
    NavbarComponent,
    DialogDelete,
    DialogEdit
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
