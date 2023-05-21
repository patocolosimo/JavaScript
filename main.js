function calcularSeguro() {
  // Definimos las variables que vamos a necesitar
  var marca, anio, tipo, precioBase, precioFinal;

  // Solicitamos la marca del auto al usuario
  marca = prompt("Ingrese la marca del auto (ej. Ford, Chevrolet, etc.):");

  // Solicitamos el año del auto al usuario y verificamos que sea válido
  do {
    anio = prompt("Ingrese el año del auto (ej. 2000, 2005, etc.):");
  } while (isNaN(anio) || anio < 1900 || anio > new Date().getFullYear());

  // Solicitamos el tipo de seguro al usuario
  tipo = prompt(
    "Ingrese el tipo de seguro que desea (basico, completo, premium):"
  );

  // Determinamos el precio base del seguro en base a la marca y el año del auto
  switch (marca.toLowerCase()) {
    case "ford":
      precioBase = 5000;
      break;
    case "chevrolet":
      precioBase = 5500;
      break;
    case "renault":
      precioBase = 6000;
      break;
    default:
      precioBase = 6500;
      break;
  }

  if (anio <= 2000) {
    precioBase -= 1000;
  } else if (anio >= 2010) {
    precioBase += 2000;
  }

  // Calculamos el precio final del seguro en base al tipo de seguro solicitado
  switch (tipo.toLowerCase()) {
    case "basico":
      precioFinal = precioBase * 1.1;
      break;
    case "completo":
      precioFinal = precioBase * 1.25;
      break;
    case "premium":
      precioFinal = precioBase * 1.4;
      break;
    default:
      precioFinal = precioBase;
      break;
  }

  // Mostramos el precio final del seguro al usuario
  alert(
    "El precio del seguro para un " +
      marca +
      " modelo " +
      anio +
      " tipo " +
      tipo +
      " es de $" +
      precioFinal.toFixed(2)
  );
}

// Creamos un objeto
const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  precio: 25000,
};

// Accedemos a las propiedades del objeto
console.log(`Marca: ${auto.marca}`);
console.log(`Modelo: ${auto.modelo}`);
console.log(`Año: ${auto.año}`);
console.log(`Precio: $${auto.precio}`);

// Creamos un array de objetos que representa varios automóviles
const autos = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    precio: 25000,
  },
  {
    marca: "Honda",
    modelo: "Civic",
    año: 2022,
    precio: 27000,
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    año: 2022,
    precio: 35000,
  },
];

// Recorremos el array y accedemos a las propiedades de cada objeto
autos.forEach((auto) => {
  console.log(`Marca: ${auto.marca}`);
  console.log(`Modelo: ${auto.modelo}`);
  console.log(`Año: ${auto.año}`);
  console.log(`Precio: $${auto.precio}`);
});

// Definimos una función que recibe el precio base y el porcentaje de descuento
function calcularPrecioFinal(precioBase, porcentajeDescuento) {
  const descuento = (precioBase * porcentajeDescuento) / 100;
  const precioFinal = precioBase - descuento;
  return precioFinal;
}

// Creamos un objeto que representa un automóvil
const auto2 = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2022,
  precioBase: 25000,
  porcentajeDescuento: 10,
};

// Calculamos el precio final utilizando la función y las propiedades del objeto
const precioFinal = calcularPrecioFinal(
  auto2.precioBase, // Corregido de auto.precioBase a auto2.precioBase
  auto2.porcentajeDescuento // Corregido de auto.porcentajeDescuento a auto2.porcentajeDescuento
);

// Mostramos el resultado en la consola
console.log(
  `El precio final del ${auto2.marca} ${auto2.modelo} es: $${precioFinal}`
);

let autos2 = [
  {
    marca: "Ford",
    modelo: "Mustang",
    anio: 2020,
    precio: 50000,
    vendido: false,
  },
  {
    marca: "Chevrolet",
    modelo: "Camaro",
    anio: 2021,
    precio: 55000,
    vendido: true,
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    anio: 2019,
    precio: 45000,
    vendido: true,
  },
  {
    marca: "BMW",
    modelo: "M4",
    anio: 2022,
    precio: 70000,
    vendido: false,
  },
];

// Filtro de array
const autos3 = [
  { marca: "Toyota", modelo: "Corolla", anio: 2018, precio: 25000 },
  { marca: "Honda", modelo: "Civic", anio: 2017, precio: 22000 },
  { marca: "Ford", modelo: "Mustang", anio: 2019, precio: 35000 },
  { marca: "Chevrolet", modelo: "Camaro", anio: 2016, precio: 30000 },
  { marca: "Nissan", modelo: "Sentra", anio: 2015, precio: 18000 },
];

// Filtrar autos cuyo precio es menor o igual a 25000
const autosFiltrados = autos3.filter((auto) => auto.precio <= 25000); // Corregido de autos a autos3

console.log(autosFiltrados);

// Output: [
//   { marca: 'Toyota', modelo: 'Corolla', anio: 2018, precio: 25000 },
//   { marca: 'Honda', modelo: 'Civic', anio: 2017, precio: 22000 },
//   { marca: 'Nissan', modelo: 'Sentra', anio: 2015, precio: 18000 }
// ]

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Accede a los datos del JSON y salen en el simulador
    const opcionesSeguro = data.opcionesSeguro;
    const marcasAutos = data.marcasAutos;
    const descuentoAnio = data.descuentoAnio;
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });

  // Obtener elementos del DOM
  const marcaElement = document.getElementById('marca');
  const anioElement = document.getElementById('anio');
  const tipoSeguroElement = document.getElementById('tipoSeguro');
  const calcularButton = document.getElementById('calcular');
  const resultadoElement = document.getElementById('resultado');
  
  // Agregar event listener al botón "Calcular"
  calcularButton.addEventListener('click', () => {
    const marca = marcaElement.value;
    const anio = parseInt(anioElement.value);
    const tipoSeguro = tipoSeguroElement.value;
    
    // Realizar cálculos y actualizar el DOM
    // ...

    // Actualizar el resultado en el DOM
    resultadoElement.innerHTML = `El precio del seguro es de $XXXXX`;
  });