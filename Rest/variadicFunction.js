// puede leer mas sobre variadicFunctions --> en.wikipedia.org/wiki/Variadic_function

function fullName(...names) {
    return names.reduce((prev, curr) => {
        return `${prev} > ${curr}`;
    }
    )
}


console.log(fullName('Ivan', 'Ricardo', 'Pena'));

console.log(fullName(...['Ivan', 'Ricardo', 'Pena']));


function areaStructurePeople(manager, leader, ...team) {
    console.log(`-manages is ${manager}`);
    console.log(`--leader is ${leader}`);
    console.info('----team are', team);
    console.info('----team are', ...team);
    console.info('----team are', team.join(' - '));

}
areaStructurePeople('Juan', 'Ger', 'Maria', 'Jarvi');
areaStructurePeople('Juan', 'Ger', 'Maria', ...['Jarvi', 'ivan']);