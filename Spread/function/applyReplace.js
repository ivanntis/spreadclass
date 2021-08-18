// para explicar como se remplaza el elemento apply, se debe entender como funciona el apply y el call,
// con esta primera seccion la idea es explicar como funcionan estos dos metodos que hacen parte de
// Funtion.Prototype.(apply/call)

// // Bloque 1 
// // explicacion de call y apply

// function ProductCall(name, price) {
//     this.name = name;
//     this.price = price;
// }

// function FoodCall(name, price) {
//     ProductCall.call(this, name, price);
//     this.category = 'food';
// }

// console.log(new FoodCall('cheese', 5).name);

// function ProductApply(name, price) {
//     this.name = name;
//     this.price = price;
// }

// function FoodApply(name, price) {
//     const arrayData = [name, price];
//     ProductApply.apply(this, arrayData);
//     this.category = 'food';
// }

// console.log(new FoodApply('cheese', 5).name);


// // Bloque 2 

// // es importante de notar que solo se puede remplazar el apply que utiliza la
// // estructur apply(null, argsArray), con el spread function no applica con el objeto  
// // this apply(this, argsArray)

// // Ejemplo Practico
// //Suponga que debe encontrar el minimo valor de un array de elementos numericos
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

// const numeros = [-2, 5, 7, 2, 3, 45, 7, -1];

// // ejemplo apply
// const applyMin = Math.min.apply(null, numeros);
// console.log(applyMin);

// // ejemplo call
// const applyCall = Math.min.call(...numeros);
// console.log(applyCall);

// // ejemplo spread
// const applySpread = Math.min(...numeros);
// console.log(applySpread);

// // Bloque 3
// // Como Plus Spread utilizacion en constructores lo que es complejo con apply y call

const birthdayPartyNoSpread = new Date(1986, 08, 11, 3, 24, 0);
const arrayDate = [1986, 09, 11]
const birthdayParty = new Date(...arrayDate);
console.log(birthdayPartyNoSpread, birthdayPartyNoSpread.getFullYear());
console.log(birthdayParty, birthdayParty.getFullYear());
