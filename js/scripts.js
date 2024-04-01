function sayHello(name) {
  console.log('Hola ' + name + '.');
}

function calculateSquareArea(side) {
  const squareArea = side * side;
  console.log(
    'El área del cuadrado con lado ' + side + ' es ' + squareArea + '.'
  );
}

function calculateTriangleArea(base, heigth) {
  const triangleArea = base * heigth;
  console.log(
    'El área del triángulo con base ' +
      base +
      ' y altura ' +
      heigth +
      ' es ' +
      triangleArea +
      '.'
  );
}

function calculateCircleArea(radius) {
  const circleArea = 3.14 * (radius * radius);
  console.log(
    'El área del círculo con radio ' + radius + ' es ' + circleArea + '.'
  );
}

function celsiusToFahrenheit(celsius) {
  const farenheit = celsius * 1.8 + 32;
  console.log(
    celsius + ' grados celsius son ' + farenheit + ' grados farenheit.'
  );
}

function fahrenheitToCelsius(farenheit) {
  const celsius = (farenheit - 32) / 1.8;
  console.log(
    farenheit + ' grados farenheit son ' + celsius + ' grados celsius.'
  );
}

function totalPrice(price) {
  const IVA = price * 0.21;
  const pricePlusIVA = price + IVA;
  console.log('El precio ' + price + ' con IVA es ' + pricePlusIVA + '.');
}

function writeMessage(name, material, size, note) {
  console.log(
    name +
      ' ha pedido una caja de ' +
      material +
      ' de tamaño ' +
      size +
      '. ' +
      note +
      '.'
  );
}

sayHello('Manué');
calculateSquareArea(4);
calculateTriangleArea(2, 6);
calculateCircleArea(5);
celsiusToFahrenheit(38);
fahrenheitToCelsius(100.4);
totalPrice(120);
writeMessage('Lucas', 'gafas', 'mediano', '¡Qué buen servicio!');
