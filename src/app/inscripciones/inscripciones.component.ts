import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Inscripcion } from '../inscripcion.model';
import { InscripcionesService } from '../inscripciones.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  form!: FormGroup;
  mensaje!: String;

  cursos = [ 'Primero', 'Segundo', 'Tercero', 'Cuarto' ];

  constructor(private inscripcionesService: InscripcionesService) {
    this.form = new FormGroup({
      $key: new FormControl(null),
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      universidad: new FormControl('', Validators.required),
      titulacion: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  ngOnInit(): void {
  }

  onClear() {
    this.form.reset();
  }

  //method to add an inscription from the form values
  addInscripcion() {
    const inscripcion: Inscripcion = {
      nombre: this.form.value.nombre,
      apellidos: this.form.value.apellidos,
      universidad: this.form.value.universidad,
      titulacion: this.form.value.titulacion,
      email: this.form.value.email,
      curso: this.form.value.curso,
    };
    if (this.inscripcionesService.getInscripcion(inscripcion)) {
      this.mensaje = "Este email ya está registrado.";
    }
    else {
      this.inscripcionesService.addInscripcion(inscripcion);
      this.mensaje = "Se ha añadido la inscripción correctamente.";
    }
  }
}