
const objectA = {
    name: {
        firstName: 'ivan', middleName: 'ricardo'
    },
    birthYear: 1986
};
const objectB = {
    lastName: 'peña',
    nick: 'ivanntis'
}


const objectE = Object.assign({}, objectA, objectB);

const objectC = { ...objectA, ...objectB };
objectA.birthYear = 1987;

console.log(objectA);
console.log(objectC);
console.log(objectE);