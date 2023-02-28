let a = 7;
let b = 3;
let c = 10;


if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log(true);
}
else {
    console.log(false);
}

console.log('===============================================')

let d = 10;
let e = 8;
let f = 7;

if (d % 2 == 1 || e % 2 == 1 || f % 2 == 1) {
    console.log(true);
}
else {
    console.log(false);
}

console.log('===============================================')

let custo = 19;
let valor = 50;

if (custo < 0 || valor < 0) {
    console.log('Valo incorreto!');
}
else {
    let lucro = ((valor-(custo*1.2))*1000)
    console.log(lucro);
}