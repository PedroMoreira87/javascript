// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const functionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...functionario}
console.log(clone)

// usar spread com array
const grupoaA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoaA, 'Rafaela']
console.log(grupoFinal)
