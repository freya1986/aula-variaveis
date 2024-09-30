// Exercícios de interpretação de código
//1

let a = 10
let b = 10 // Varíaveis a e b são definidas como 10

console.log(b) // Imprime o valor de b que é 10

b = 5 // b é redefinido para 5, mas a permanece com o valor orinal que é 10
console.log(a, b) // Imprime 10 para a e 5 para b

/* 
10
10 5
*/


//2

let a = 10 // A varíavel a recebe o valor 10
let b = 20 // A variável b recebe o valor 20
c = a // A variável c recebe o valor de a, que é 10, agora, c = 10
b = c // A variável b recebe o valor de c, que é 10, agora, b = 10
a = b // A variável a recebe o valor de b, que é 10, agora, a = 10


console.log(a, b, c) // 10 10 10


//3

/*
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
*/

let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?") // p -> horasTrabalhadasPorDia: esse nome reflete diretamente o que a variável está armazenando (número de horas trabalhadas por dia)
let salarioPorDia = prompt("Quanto você recebe por dia?") // t-> salarioPorDia: esse nome descreve que a variável armazena o salário que o usuário recebe por dia
alert(`Você recebe ${salarioPorDia / horasTrabalhadasPorDia} por hora`)


// Exercícios de escrita de código
//1

let nome
let idade

console.log(typeof nome) // undefined
console.log(typeof idade) // undefined
// O tipo 'undefined' foi impresso porque as variáveis foram declaradas, mas ainda não receberam nenhum valor

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome) // string
console.log(typeof idade) // string
// Agora o tipo das variáveis é 'string', pois o valor inserido pelo prompt é sempre tratado como uma string, mesmo no caso da idade

console.log(`Olá ${nome}, você tem ${idade} anos.`)


//2

let pergunta1 = "Você está usando jeans hoje?"
let pergunta2 = "Você tomou café da manhã hoje?"
let pergunta3 = "Você fez exercícios físicos hoje?"

let resposta1 = prompt(pergunta1)
let resposta2 = prompt(pergunta2)
let resposta3 = prompt(pergunta3)

console.log(pergunta1, "-", resposta1)
console.log(pergunta2, "-", resposta2)
console.log(pergunta3, "-", resposta3)

//3

let a = 10
let b = 25
let c = a

a = b
b = c

console.log(a)
console.log(b)

// Desafios

let primeiroNumero = prompt("Digite  primeiro número:")
let segundoNumero = prompt("Digite o segundo número:")

let soma = primeiroNumero + segundoNumero
let multiplicacao = primeiroNumero * segundoNumero

console.log(`1. O primeiro número somado ao segundo número resulta em: ${soma}.`)
console.log(`2. O primeiro número multiplicado pelo segundo número resulta em: ${multiplicacao}.`)


