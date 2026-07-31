// variavel eh um espaco na memoria para guardar um valor

// utilizamos duas formas para declarar variaveis em js.

//1- Connst
//atribuindo
const nome = "Miguel";

//Exibindo a atribuição
console.log(nome);

let nomeCachorro = "Bob";
console.log(nomeCachorro);

//--------------------------------------------------------------------------//

//Principio da imutalidade - Constantes não podem ser reatribuídas

const nomeNovo = "Ana";
nomeNovo = "Carlos Alberto da Nobrega"; //Funciona sem erros
console.log(nomeNovo); // Imprime o nome Carlos

const idade = 16;
idade = 18;
console.log(idade)

let idadeNova = 16;
idadeNova = 18;
console.log(idadeNova)