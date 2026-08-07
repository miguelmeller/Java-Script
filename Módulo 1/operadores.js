//#region start operadores
const remy = 20;
    
console.log(remy <= 18);

//#endregion

//#region Operadores matemáticos
const a = 10;
const b = "10";

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); //Resto da divisão
//#endregion

//#region operadores de comparação...
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); //Comparação de valor
console.log(a === b); //Comparação de valor e tipo
console.log(a !== b);
//#endregion

//#region Exercício
/*
    Exercício: aplicando operadores de comparação com variavel
    faça a comparações a partir da variavel informada
*/

const idade1= 20;
const idade2= 25;

console.log(idade1 < idade2);
console.log(idade1 > idade2);
console.log(idade1 >= idade2);
console.log(idade1 <= idade2);
console.log(idade1 == idade2);
console.log(idade1 === idade2);
console.log(idade1 !== idade2);

console.log(a == b); //Comparação de valor
console.log(a === b); //Comparação de valor e tipo
console.log(a !== b);
//#endregion

//#region Operadores lógicos

const idade3 = 20;
const idade4 = 25;

//Operador lógico AND
console.log(idade3 > 18 && idade4 > 18); //Todas precisam

// Operador lógico OR
console.log(idade3 > 18 || idade4 > 18); //Uma precisa ser 

// Operador lógico NOT
console.log(!(idade3 > 18)); //false

//#endregion

//#region Combinando operadores
const idade = 25;
const matriculaAtivo = true;

const podeComprar = idade >= 18 && matriculaAtivo;

console.log(podeComprar);

//#endregion

//#region Operadores de incremento e decremento
let numero = 10;
console.log(numero++); //10
console.log(numero); //11
console.log(++numero); //12

console.log(numero--); //12
console.log(numero); //11
console.log(--numero); //10
//#endregion

//#region Exercício 1 - comparação
//Faça comparação a partir da variável informada
const x = 5;
const y = 10;

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y); //Comparação de valor
console.log(x === y); //Comparação de valor e tipo
console.log(x !== y);

//#endregion

//#region Exercício 2 - == vs ===
//verifique os resultados das comparações a seguir
console.log(10 == "10");

console.log(10 === "10");

console.log(true == 1);

console.log(true === 1);

console.log(null == undefined);

console.log(null === undefined);
//#endregion

//#region Exercício 3 - sistema de acesso - Desafio
const dataNascimento = new Date("2000-02-30");
const ativo = true;
/*
    Crie uma expressão que indique se o usuário pode acessar o sistema.

    Regra: O usúario precisa ter pelo menos 18 anos e estar ativo.
*/


// Transformando 18 anos em milissegundos
const dezoitoAnosEmMilissegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;

//comparando  milissegundos com milissegundos!
const podeAcessar = (new Date() - dataNascimento) >=
            dezoitoAnosEmMilissegundos && ativo;

console.log(podeAcessar)

//#endregion