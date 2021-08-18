// El clone no funciona para arrays multidimensionales
// para probar los arrgelos multidimensionales  remplazar la linea 4 x 5 y la linea 14 x 15

const arrayA = [0, 1, 2]; //[0, [1], 2]
//const arrayA = [0, [1], 2];
const arrayB = arrayA;
const arrayC = [...arrayA];
const arrayD = [];
const arrayE = Object.assign(arrayD, arrayA);;


console.log(arrayA, arrayB, arrayC, arrayD, arrayE);

arrayA[1] = 4; //arrayA[1][0] 
// arrayA[1] = arrayA[1][0]; 

console.log(arrayA, arrayB, arrayC, arrayD, arrayE);


const arr = new Set(arrayA);
console.log(arr);
console.log([...arr]);

