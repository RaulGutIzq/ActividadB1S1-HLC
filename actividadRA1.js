//Bloque declarativo con todas las variables a usar:
let nombre, edad, esEstudiante, num1, num2, res, mensajeCompleto;
//Apartado a:
nombre = "Raúl";
edad = 21;
esEstudiante = true;
//${nVar} Introduce en la cadena la variable introducida, la cadena debe ser delimitada con el carácter `
console.log(`Nombre: ${nombre}, Edad: ${edad}, Estudiante: ${esEstudiante}`);

//Apartado b:
num1 = 10;
num2 = 5;
//res almacenará el resultado de las diferentes operaciones
res = num1 + num2;
console.log(`La suma de ${num1} y ${num2} es: ${res}`);
res = num1 - num2;
console.log(`La resta de ${num1} y ${num2} es: ${res}`);
res = num1 * num2;
console.log(`La multiplicación de ${num1} y ${num2} es: ${res}`);
res = num1 / num2;
console.log(`La división de ${num1} y ${num2} es: ${res}`);
res = num1 % num2;
console.log(`El módulo de ${num1} y ${num2} es: ${res}`);

//Apartado c:
mensajeCompleto = "Mi nombre es " + nombre + " y tengo " + edad + " años";
console.log(mensajeCompleto);

//Apartado d:
console.log("Tipo de dato de la variable nombre: "+typeof nombre);
console.log("Tipo de dato de la variable edad: "+typeof edad);
console.log("Tipo de dato de la variable esEstudiante: "+typeof esEstudiante);
console.log("Tipo de dato de la variable mensajeCompleto: "+typeof mensajeCompleto);
