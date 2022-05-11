import { Injectable } from '@angular/core';
import { Inscripcion } from './inscripcion.model';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  inscripcionesList: Array<Inscripcion> = [
    {
      nombre: "Juan Carlos", apellidos: "Alcalde Díaz", universidad: "Universidad de las Palmas de Gran Canaria", titulacion: "Grado en Ingeniería Informática", email: "juancarlosalcd@gmail.com", curso: "Cuarto",
    },
    {
      nombre: "Ejemplo", apellidos: "Apellido1 Apellido2", universidad: "Universidad de Ejemplo", titulacion: "Grado en Ingeniería Informática", email: "ejemplo@gmail.com", curso: "Primero"
    }
  ]

  getInscripciones() {
    return this.inscripcionesList;
  }

  getInscripcion(inscripcion: Inscripcion): boolean {
    for (let i in this.inscripcionesList) {
      if(this.inscripcionesList[i].email == inscripcion.email) return true; 
   }
   
   return false;
  }

  addInscripcion(inscripcion: Inscripcion) {
    this.inscripcionesList.push(inscripcion);
  }

  delete(inscripcion: Inscripcion) {
    this.inscripcionesList.forEach((element,index)=>{
      if(element.email == inscripcion.email) this.inscripcionesList.splice(index,1);
   });
  }

  edit(inscripcion: Inscripcion, newInscripcion: Inscripcion) {
    this.inscripcionesList.forEach((element,index)=>{
      if(element.email == inscripcion.email) this.inscripcionesList[index] = newInscripcion;
   });
  }

  constructor() { }
}
