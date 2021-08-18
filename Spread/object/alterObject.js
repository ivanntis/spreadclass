const objectA = {
    name: {
        firstName: 'ivan', middleName: 'ricardo'
    },
    birthYear: 1986
};
// // en el siguiente bloque puedes quitar el comentario de la linea que quieras probar

// const objectC = { objectA, lastName: 'pena' }
// const objectC = {...objectA, lastName: 'pena'}
// const objectC = {...objectA.name, lastName: 'pena'}
// const objectC = {...objectA, name: {lastName: 'pena'}}
// const objectC = { ...objectA, name: { ...objectA.name, lastName: 'pena' } }
// const objectC = { ...objectA, ...{ surname: 'pena', secondSurame: 'sierra', nickName: 'ivanntis' } };
const objectC = { ...objectA, surname: 'pena', secondSurame: 'sierra', nickName: 'ivanntis' };

console.log(objectC);

// // puedes remplazar la linea 24 x 23 para probar el funcionamiento con el Object Assign 
// // la linea 23 se parece en su resultado a la linea 15

const arr = [{ surname: 'pena' }, { secondSurame: 'sierra' }, { nickName: 'ivanntis' }];
const objectF = Object.assign(objectA, ...arr);
//const objectF = { ...objectA, ...arr };

console.log(objectF);

// // Este ejemplo demuestra una funcionalidad clara donde se tiene 
// // posiblemente mas valor usar el Object.assign