import { Component, OnInit } from '@angular/core';
import { Inscripcion } from '../inscripcion.model';
import { InscripcionesService } from '../inscripciones.service';
import { MatDialog } from '@angular/material/dialog';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  inscripcionesList = this.inscripcionesService.getInscripciones();

  constructor(
    private inscripcionesService: InscripcionesService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  delete(inscripcion: Inscripcion) {
    const dialogRef = this.dialog.open(DialogDelete);
    dialogRef.componentInstance.inscripcion = inscripcion;

    dialogRef.afterClosed().subscribe(result => {
      if (!`${result}`) this.inscripcionesService.delete(inscripcion);
    });
  }

  openEditForm(inscripcion: Inscripcion) {
    const dialogRef = this.dialog.open(DialogEdit);
    dialogRef.componentInstance.inscripcion = inscripcion;
  }
}

@Component({
  selector: 'dialog-delete',
  templateUrl: './list.dialog-delete.html',
  styleUrls: ['./list.component.css']
})
export class DialogDelete implements OnInit {

  inscripcion!: Inscripcion;

  ngOnInit(): void {
  }
}


@Component({
  selector: 'dialog-edit',
  templateUrl: './list.dialog-edit.html',
  styleUrls: ['./list.component.css']
})
export class DialogEdit implements OnInit {
  inscripcion!: Inscripcion;
  form!: FormGroup;
  cursos = ['Primero', 'Segundo', 'Tercero', 'Cuarto'];

  constructor(private inscripcionesService: InscripcionesService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      $key: new FormControl(null),
      nombre: new FormControl(this.inscripcion.nombre, Validators.required),
      apellidos: new FormControl(this.inscripcion.apellidos, Validators.required),
      universidad: new FormControl(this.inscripcion.universidad, Validators.required),
      titulacion: new FormControl(this.inscripcion.titulacion, Validators.required),
      curso: new FormControl(this.inscripcion.curso, Validators.required),
      email: new FormControl(this.inscripcion.email, [Validators.required, Validators.email]),
    })
  }

  edit() {
    const inscripcion = new Inscripcion(this.form.value.nombre, this.form.value.apellidos, this.form.value.universidad, this.form.value.titulacion, this.form.value.email, this.form.value.curso);
    this.inscripcionesService.edit(this.inscripcion, inscripcion);
  }
}