//const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi", "pera"];

// //Acessando elementos do array
// console.log(frutas[5]);

// //Contando elementos do array
// console.log(frutas.length);

// //Acessando o ultimo elemento do array
// console.log(frutas[frutas.length - 1]); 

// //Alterando elemento do array
// frutas[3] = "Morango";
// console.log(frutas);



// //colocando no inicio do array
// frutas.push("morango");
// console.log(frutas);

// //colocando no inicio
// frutas.unishift("manga");
// console.log(frutas);

// //
// frutas.pop();
// console.log(frutas);

//const itemRemovido = frutas.pop();

//varrendo o array
//for of
// for(const fruta of frutas) {
//     console.log(fruta);
//     return fruta; //relembrando
// }


//forEach executa uma função para cada elemento do array.
//Eles fazem algo semelhante, mas forEach é especifico para percorrer uma coleção e executar uma ação paracada elemento
// frutas.forEach((fruta) => {
//     console.log(fruta)
// });

// frutas.forEach((fruta) => {
//     const nomeFrutaPrimeiraLetraMaiscula =
//         fruta.charAt(0).toUpperCase() + fruta.slice(1);
//     console.log(nomeFrutaPrimeiraLetraMaiscula);
// });

// function{
//     ();
// }

const numeros = [1, 2, 3, 4, 5, 6];

//map - cria um novo array com elementos modificados

const numerosDobrados = numeros.map((numero) => {
    return numero / 2;
}
);

console.log(numerosDobrados)

//filter - cria um novo array com os elementos que atendem a uma condição
const maiorQue3 = numeros.filter ((numero) => {
    return numero > 3;
}
);

console.log(maiorQue3);

//metodo   |  pergunta
//forEach  | O que quero fazer com cada elemento?
//map      | Como quero transformar cada elemento?
//filter   | Quais elementos quero manter?

//find - procura um elemento que satisfaça uma condição 
const numerof = numeros.find((n) => n > 4);
console.log(numerof)

/*
filter x find

    filter
    ->retorna varios elementos

    find
    ->retorna o primeiro elemento 
*/

//não é tanto usado no dia a dia, mas é bom saber que existe
//some - verifica se pelo menos um elemento atende a uma condição
//retorna true ou false (boolean)
const existeMaiorQue5 = numeros.some(n => n > 8);
console.log(existeMaiorQue5);

//every - verifica se todos os elementos atendem a uma condição
//retorna true ou false (boolean)
const todosMaioresQue0 = numeros.every(n => n > 0);
console.log(todosMaioresQue0);

//reduce - reduz o array a um unico valor,
//aplicando uma função a cada elemento

const soma = numeros.reduce((total, numero) => {
    return total + numero;
}, 0);

console.log(soma)
