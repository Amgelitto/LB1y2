let num1 = 0;
let num2 = 0;
let operacion = '';

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

function validarOperacion(operacion) {
  return ['suma', 'resta', 'multiplicacion', 'division'].includes(operacion);
}

let continuar = true;

while (continuar) {
  num1 = parseFloat(prompt('Ingresa un numero:'));
  num2 = parseFloat(prompt('Ingresa otro número:'));
  operacion = prompt('Ingrese la operación: suma, resta, multiplicacion, division o salir para terminar:');
  
  // Validación para evitar error de toLowerCase en valor null
  if (operacion) {
    operacion = operacion.toLowerCase();

    if (operacion === 'salir') {
      continuar = false;
      alert('¡shau!, adiós.');
    } else if (validarOperacion(operacion)) {
      const resultado = realizarOperacion(num1, num2, operacion);
      alert(`El resultado de la  ${operacion} es: ${resultado}`);
    } else {
      alert('Algo hiciste mal, como para variar.');
    }
  } else {
    alert('Escribe la operación la próxima vez por favor, ome.');
  }
}
