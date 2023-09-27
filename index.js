//1
const Coche = {
    marca: "Seat",
    modelo: "Leon",
    matricula: "45rwe"
};

//2
const Casa = {
    codPostal: "41001",
    calle: "Calle almedralejo",
    portal: "B",
    piso: "2"
};

//3

const FullStackDeveloper = {
    lenguajes: ["JavaScript", "HTML", "CSS", "Python"],
    proyectos: ["Proyecto 1", "Proyecto 2", "Proyecto 3"]
};

//4

const Perro = {
    nombre: "Roco",
    raza: "Beagle",
    color: "Marrón",
    edad: 10,
    ladrar: function() {
      console.log('¡Guau! ¡Guau!');
    },
    popo: function() {
      return Math.random() * 3;
    }
  };

//5
const marcaPortatil = Portatil.marca; 

//6

const marcaPortatil2 = Portatil['marca'];

//7

const grupos = Concierto.grupos;

//8

const RGB = [Led.rojo, Led.verde, Led.azul];

//9

Portatil.modelo = "P345";

//10

Concierto.cartelera.push("Guns N' Roses");

//11

Concierto.fecha = new Date();

//12

Impresora.imprimiendo = {
    nombreArchivo: "documento.pdf",
    copias: 2,
    numPaginas: 10
  };
  
//13
const Noticia = {
    titular: "Título",
    cuerpo: "Texto",
};
//14
const Persona = {
    nombre: "Alejandro",
    apellidos: "Lobato Haurie",
    edad: 29
};

//15
const Avion = {
    numPasajeros: 150,
    despegar: function() {
      console.log('despegando');
    },
    volar: function() {
      console.log('llegando al destino');
    },
    aterrizar: function() {
      console.log('aterrizando');
    }
  };

//16

const Paquete = {
    contenido: [
      { nombre: "cd", peso: 0.5 },
      { nombre: "Cascos", peso: 1.2 },
      { nombre: "Wii", peso: 2.0 }
    ]
};

//17

const Pais = {
    numHabitantes: 50000000,
    continente: "América del Sur",
    gentilicio: "colombiano"
};

//18

const codError = O_Error.codigo;

//19

const integrantes = Grupo.integrantes;

//20

const nivelesTinta = Impresora.tinta;

//21

const pixeles = Pantalla.pixeles;

//22

const especificaciones = Movil
["especificaciones"];

//23

Grupo.numIntegrantes = 5;

//24

Pantalla.dimensiones = "1920x1080";

//25

Led.encendido = !Led.encendido;

//26

Movil.temperatura = "20º";