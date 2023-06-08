const valorInput = document.getElementById("valor");

valorInput.addEventListener("input", calcularCotizacion);

function calcularCotizacion() {
  const valor = parseFloat(valorInput.value);

  const cotizacion = valor * 0.2;

  const precioCotizacionSpan = document.getElementById("precio-cotizacion");

  precioCotizacionSpan.textContent = "$" + cotizacion;
}

const form = document.getElementById("cotizacionForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  calcularCotizacion();
});

const selectModelo = document.getElementById("modelo");

const data = [
  { id: 1, nombre: "Toyota" },
  { id: 2, nombre: "Ford" },
  { id: 3, nombre: "Chevrolet" },
  { id: 4, nombre: "Honda" },
  { id: 5, nombre: "Volkswagen" },
  { id: 6, nombre: "BMW" },
  { id: 7, nombre: "Mercedes-Benz" },
  { id: 8, nombre: "Audi" },
  { id: 9, nombre: "Nissan" },
  { id: 10, nombre: "Hyundai" },
  { id: 11, nombre: "Kia" },
  { id: 12, nombre: "Mazda" },
  { id: 13, nombre: "Subaru" },
  { id: 14, nombre: "Lexus" },
  { id: 15, nombre: "Volvo" },
  { id: 16, nombre: "Jeep" },
  { id: 17, nombre: "Mitsubishi" },
  { id: 18, nombre: "Porsche" },
  { id: 19, nombre: "Ferrari" },
  { id: 20, nombre: "Lamborghini" },
];

data.forEach((item) => {
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nombre;
  selectModelo.appendChild(option);
});

fetch('data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
  
    var coberturaContainer = document.getElementById("cobertura-container");
    coberturaContainer.innerHTML = ""; 
    
    data.coberturas.forEach(function(cobertura) {
      var coberturaElement = document.createElement("div");
      coberturaElement.textContent = "Cobertura: " + cobertura.nombre + ", Precio: " + cobertura.precio;
      coberturaContainer.appendChild(coberturaElement);
    });
  });
