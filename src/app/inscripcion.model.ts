export class Inscripcion{

    constructor(nombre:string, apellidos:string, universidad:string, titulacion:string, email:string, curso: string){
      this.nombre=nombre,
      this.apellidos=apellidos,
      this.universidad=universidad;
      this.titulacion=titulacion;
      this.email=email;
      this.curso=curso;
    }
    
    nombre="";
    apellidos="";
    universidad="";
    titulacion="";
    email="";
    curso="";
  }