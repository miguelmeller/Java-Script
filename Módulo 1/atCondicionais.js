//#region atividades 

// Atividade 1 — Maioridade - Crei uma variável idade e atribua um 
// valor. Em seguida, use uma estrutura condicional para verificar 
// se a idade é maior ou igual a 18. Se for, exiba "Maior de idade",
// caso contrário, exiba "Menor de idade".

console.log("------ Atividade 1 ------")

const idade = 14;
    if(idade >=18){
        console.log("Maior idade")}
    else{
        console.log("Menor idade");
    }

//Atividade 2 — Aprovação - Implemente com if/else e com switch case. 
// Crie uma variável nota e atribua um valor.

console.log("------ Atividade 2 ------")

const nota = 1;

if (nota >= 7){
    console.log("Aprovado");
}
if (nota >=5 && nota <7){
    console.log("Recuperação");
}
else if (nota <=4){
    console.log("Reprovado");
}

//Atividade 3 — Login - Crie uma variável usuario e outra senha. 
//Em seguida, use uma estrutura condicional para verificar se o 
//usuário e a senha são válidos e pode ou não acessar o sistema.

console.log("------ Atividade 3 ------")

const usuario = "miguel123";
const senha = 30;

if (usuario === "miguel123" && senha === 30){
    console.log("Acesso liberado")
}
else{
    console.log("Acesso negado")
}

//Atividade 4 — Status do pedido - Crie uma variável statusPedido e
// atribua um valor (pendente, pago, envidado, processando, entregue,
// concluído).

console.log("------ Atividade 4 ------")

const statusPedido = 7
switch(statusPedido){
    case 1:
    console.log("Pendente");
    break;
    case 2:
    console.log("Pago");
    break;
    case 3:
    console.log("Enviado");
    break;
    case 4:
    console.log("Processando");
    break;
    case 5:
    console.log("Entregue");
    break;
    case 6:
    console.log("Concluído");
    break;
    default:
    console.log("Status não encontrado");
    break;
}

//Atividade 5 — Contador - Crie uma algoritmo que com "for" para imprimir 
// todos os numeros pares de 1 a 100.

console.log("------ Atividade 5 ------")

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//atividade 6 - Refaça o exercicio 5 agora usando for...of e while.

console.log("------ Atividade 6 ------")

let contador = 1;
while (contador <= 100) {
    if (contador % 2 === 0) {
    console.log(contador);
    }
    contador++;
}

//Atividade 7 — Crie um array com 10 nomes e exiba cada um dele usando for...of.

console.log("------ Atividade 7 ------")

const nomes = ["Miguel", "Terassi", "Dias", "Murilo", "Kauan", "Vithor", "Luís", "Caio", "Pitanga", "Vinicius"]

for(const nome of nomes){
    console.log(nome);
}

//Atividade 8 - Crie um array com 10 nomes e exiba somente os nomes que tem mais 
// de 5 letras usando for...of, if e .length. 

console.log("------ Atividade 8 ------")

const pessoas = ["Dias", "Miguel", "Caio", "Luis", "Piran", "Davi", "Murilo", "Carol", "Bia", "Ana"];
for(const pessoa of pessoas){
    //console.log(pessoa);

if (pessoa.length >5){
    console.log(pessoa);
}
}

//Atividade 9 — Somando valores
/*
    Dado o array de números, calcule a soma de todos os elementos do 
    array e exiba o resultado no console.
    Dica: você pode usar um loop for ou for...of para percorrer 
    o array e somar os valores.
    const numeros = [10, 20, 30, 40, 50];

*/

console.log("------ Atividade 9 ------")

const numeros = [10, 20, 30, 40, 50];

let soma = 0;

for (let numero of numeros) {
    soma = soma + numero; 
}

console.log(soma);


//Atividade 10 — Desafio do backend 
 
    //Dado o array abaixo, mostre somente o pedidos pagos 

console.log("------ Atividade 10 ------")

    const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];

for(let i = 0; i < pedidos.length; i++){
    //verificar se o pedido é "pago" é true
    if(pedidos[i].pago === true){
        console.log(pedidos[i]);
    }
}

//#endregion
