let num1 = 0;
let num2 = 0;
let operacion = '';

// Aquí hacemos la función para realizar operaciones matemáticas
function realizarOperacion(num1, num2, operacion) {
  if (operacion === 'suma') {
    return num1 + num2;
  } else if (operacion === 'resta') {
    return num1 - num2;
  } else if (operacion === 'multiplicacion') {
    return num1 * num2;
  } else if (operacion === 'division') {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return 'Error: División por cero';
    }
  } else {
    return 'Operación no válida';
  }
}

// Aquí validamos la operación ingresada
function validarOperacion(operacion) {
  return ['suma', 'resta', 'multiplicacion', 'division'].includes(operacion);
}

// Bucle para realizar múltiples operaciones
let continuar = true;

while (continuar) {
  num1 = parseFloat(prompt('Ingrese el primer número:'));
  num2 = parseFloat(prompt('Ingrese el segundo número:'));
  operacion = prompt('Ingrese la operación (suma, resta, multiplicacion, division) o "salir" para terminar:').toLowerCase();

  if (operacion === 'salir') {
    continuar = false;
    alert('¡Gracias por usar la calculadora! Adiós.');
  } else if (validarOperacion(operacion)) {
    const resultado = realizarOperacion(num1, num2, operacion);
    alert(`El resultado de la operación ${operacion} es: ${resultado}`);
  } else {
    alert('Operación no válida. Por favor, intente de nuevo.');
  }
}
