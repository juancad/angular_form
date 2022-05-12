# Formulario CRUD en Angular

## Contenidos 
1. [Link web](#link-web)
2. [Requisitos](#requisitos)
3. [Descripción](#descripcion)
4. [Referencias](#referencias)

## 1. Link web <a name="link-web"/>
https://juancad.github.io/angular_form/

## 2. Requisitos<a name="requisitos"/>
Para poder ejecutar el proyecto será necesario:
- Tener instalado [Node.js](https://nodejs.org/es/download/).
- Para este proyecto se ha utilizado el IDE Visual Studio.
- Tener instalado npm, mediante el comando: `npm install -g @angular/cli`.
- Importar el proyecto e instalar las dependencias del fichero package.json mediante el comando `npm install`.
- Ejecutar el comando `ng serve` y abrir la dirección `http://localhost:4200/` en un navegador.

## 3. Descripción <a name="descripcion"/>

Las componentes del proyecto son:
- navbar: contiene la barra de navegación de la aplicación.
- list: permite mostrar la lista de inscripciones en la aplicación. Contiene los métodos para editar y eliminar una inscripción, que llaman a los métodos de editar y eliminar del servicio.
- inscripciones: contiene el formulario de inscripción.
- footer: contiene el pie de la página.
El servicio "inscripciones.service.ts" contiene una lista de las inscripciones que se muestran por defecto en la aplicación. En él se han definido los métodos que permiten obtener la lista de inscripciones, saber si una inscripción existe o no (se utiliza como identificador el email de la inscripción), añadir, modificar y eliminar inscripciones.
El modelo contiene los atributos de la inscripción.

## 4. Referencias <a name="referencias"/>

[Angular Material](https://material.angular.io/)
