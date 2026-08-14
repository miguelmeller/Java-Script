//#region ante só true e false
/*const idade = 20;

console.log(idade >= 18);

//agora podemos tomar decisões com essa resposta
const idade = 20;

if (idade >= 18) {
    console.log("Maior de idade");
}
*/
//#region if e else
/*const idade = 16;

// em js usamos chaves para delimitar um bloco de código
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console ("Menor de idade");
}
*/
//-----
//nota com casa decimal muito grande
const  nota = 6.99999999999999999999999999999999999999;
//transformação para notaArredondada
const notaArredondada = Number(nota.toFixed(2))
console.log(notaArredondada);

// arprovado, reprovado, recuperação
if (notaArredondada <= 4) {
    console.log("Reprovado");
} 
if (notaArredondada >=5 && notaArredondada <7) {
    console.log("Recuperação");
} 
else if (notaArredondada >= 7) {
    console.log("Aprovado");
}

//#endregion

//#region senha

const senha = 20;
const email= "ddd@gmail.com"
const ativo = true;

if (senha === 18 && email === "ddd@gmail.com" && ativo) {
    consolole.log("Usuário autorizado");
}
else{
    console.log("Acesso negado")
}
//#endregion

//#region case

//switch case
const dia = 7

switch(dia){
    case 1: 
        console.log("Domingo");
        break;
    case 2: 
        console.log("Segunda");
        break;
    case 3: 
        console.log("Terça");
        break;
    case 4: 
        console.log("Quarta");
        break;
    case 5: 
        console.log("Quinta");
        break;
    case 6: 
        console.log("Sexta");
        break;
    case 7: 
        console.log("Sábado");
        break;
    default:
        console.log("Dia não encontrado")

}

        /*Quando usar switch case?
        -Quando temos muitas condições para verificar.
        -Quando temos uma variável que pode ter muitos valores diferentes.
        -Quando queremos deixar o código mais legível

        Quando usar if/else?
            -Quando temos poucas condições para verificar
        */

    //#endregion

    //#region contador
const idade = 20;
const mensagem = idade >= 18? "Maior" : "Menor";
console.log(mensagem);

//#region while - enquanto for verdade
let contador = 1;

while(contador <=6){
    console.log(contador);

    contador++;
}
//#endregion

//region for

//for(iniciação; condição; incremento)

for (let i = 1; i <= 5; i++){
    console.log(i);
}

//for..of
const frutas = ["Morango", "Banana", "Maçã", "Ameixa", "Uva"];

for(const fruta of frutas){
    console.log(fruta);
}

//otimizado para array
for(let i= 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
