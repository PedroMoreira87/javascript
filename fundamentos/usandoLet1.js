// let tem escopo global, escopo de bloco e escopo de função
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
