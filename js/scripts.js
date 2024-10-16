function sayHello(name) {
  console.log("hola" + " " + name);
}

sayHello("Diego");

function calculateSquareArea(side) {
  const area = side * side;
  console.log("area:" + " " + area);
}

calculateSquareArea(5);

function calculateTriangleArea(base, height) {
  const area = (base * height) / 2;
  console.log("area:" + " " + area);
}

calculateTriangleArea(5, 10);

function calculateCircleArea(radius) {
  const area = 3.14 * radius * radius;
  console.log("area:" + " " + area);
}

calculateCircleArea(10);

function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  console.log(fahrenheit + " " + "fahrenheit");
}

celsiusToFahrenheit(100);

function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8;
  console.log(celsius + " " + "celsius");
}

fahrenheitToCelsius(212);

function totalPrice(price) {
  const totalPrice = price + price * 0.21;
  console.log("Total de precio:" + " " + totalPrice);
}

totalPrice(100);

function writeMessage(name, material, size, note) {
  const text =
    name +
    " ha pedido una caja de " +
    material +
    " de tamaño " +
    size +
    ". " +
    note +
    ".";
  console.log(text);
}

writeMessage("Diego", "manzanas", "mediana", "Lista");
