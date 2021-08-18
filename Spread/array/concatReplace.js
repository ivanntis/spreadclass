
//Para ejecutar ejemplo pudes decomentariar el bloque que quieres probar

const arrayA = ['a', 'b'];
const arrayB = [0, 1, 2];
const arrayC = arrayA;

// // ---Ejemplo 1 concatenar utilizando apply --
// arrayA.push.apply(arrayA, arrayB);
// console.log(arrayA);
// console.log(arrayC);

// //---Ejemplo 2 concatenar utilizando concat --
// arrayA.concat(arrayB);
// const arrayD = arrayA.concat(arrayB);
// console.log(arrayD);
// console.log(arrayA);
// console.log(arrayC);

// // ---Ejemplo 3 concatenar utilizando spread --
// const arrayD = [...arrayA, ...arrayB];
// console.log(arrayD);
// console.log(arrayA);
// console.log(arrayC);

// // ---Ejemplo 3 concatenar utilizando multiples elementos --
const arrayE = [9, ...arrayA, 7, ...arrayB];
console.log(arrayE);