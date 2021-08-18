const objectA = {
    name: 'ivan',
    birthYear: 1986
}
const objectB = objectA;
const objectC = {...objectA};
const objectD = {};
const objectE = Object.assign(objectD, objectA);;


console.log(objectA, objectB, objectC, objectD, objectE);

objectA.name = 'Ricardo';

console.log(objectA, objectB, objectC, objectD, objectE);

