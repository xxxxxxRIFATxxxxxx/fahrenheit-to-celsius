// Define UI
var fahrenheit = document.querySelector("#fahrenheit");
var result = document.querySelector("#result");

// Define Function
function FahrenheitToCelsius() {
    var celsius = (fahrenheit.value - 32) * 5 / 9;
    result.innerText = celsius;
};

// Define Event Listener
fahrenheit.addEventListener("keyup", FahrenheitToCelsius);

