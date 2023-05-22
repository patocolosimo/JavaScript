
const valorInput = document.getElementById("valor");

  valorInput.addEventListener("input", calcularCotizacion);
  
  function calcularCotizacion() {
    const valor = parseFloat(valorInput.value);

    const cotizacion = valor * 0.2;

    const precioCotizacionSpan = document.getElementById("precio-cotizacion");

    precioCotizacionSpan.textContent = "$" + cotizacion;
  }
  const form = document.getElementById("cotizacionForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    calcularCotizacion();});