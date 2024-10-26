function convertFromCelsius() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  document.getElementById('fahrenheit').value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
  document.getElementById('kelvin').value = isNaN(kelvin) ? '' : kelvin.toFixed(2);
}

function convertFromFahrenheit() {
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  const celsius = (fahrenheit - 32) * 5/9;
  const kelvin = celsius + 273.15;

  document.getElementById('celsius').value = isNaN(celsius) ? '' : celsius.toFixed(2);
  document.getElementById('kelvin').value = isNaN(kelvin) ? '' : kelvin.toFixed(2);
}

function convertFromKelvin() {
  const kelvin = parseFloat(document.getElementById('kelvin').value);
  const celsius = kelvin - 273.15;
  const fahrenheit = (celsius * 9/5) + 32;

  document.getElementById('celsius').value = isNaN(celsius) ? '' : celsius.toFixed(2);
  document.getElementById('fahrenheit').value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
}

function clearInputs() {
  document.getElementById('celsius').value = '';
  document.getElementById('fahrenheit').value = '';
  document.getElementById('kelvin').value = '';
}

