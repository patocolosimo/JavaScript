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

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });

  $(document).ready(function() {
    $.getJSON('data.json', function(data) {
      var dropdownOptions = $('#dropdownOptions');
  
      data.forEach(function(opcion) {
        var optionLink = $('<a>').addClass('dropdown-item').attr('href', '#').text(opcion.nombre);
        dropdownOptions.append(optionLink);
      });
    });
  });
  


    