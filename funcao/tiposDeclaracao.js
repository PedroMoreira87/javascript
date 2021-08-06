console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function () {
    return x - y
}
console.log(sub(3, 4))

// named function expression // pouco usado, única vantagem é que aparece o nome da função na hora de debugar o cód
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))
