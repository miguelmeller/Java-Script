//callback

/*
*Se vc pedir uma operação que demora muito o node não precisa esperar parado
*/

/*
console.log("1");
console.log("2");
console.log("3");

//Sincrono

//========================================================================

console.log("Início");

setTimeout(() => {
    console.log("Terminou Depois");
}, 2000);

console.log("Fim")
*/

//Callback é uma função passada para outra função para ser executada posteriormente

/*
numeros = [1, 2, 3, 4 , 6, 7, 90];

numeros.forEach((n) => { // forEach varre a função, chamar alguma coisa
    console.log(n);
});
*/

//Isso é callback
/*
(n) => {
    console.log(n);
}
*/

//Callback é uma função passada para outra função para ser executada posteriormente

function processarUsuario(nome, callback){
    console.log("Processando " + nome);
    callback();
}

processarUsuario("Miguel", () => {
    console.log("Usuário processado");
});

//=======================================

//3
function buscarUsuario(callback){
    //simulação de tempo
    setTimeout(() => {
        //construindo objeto
        const usuario ={
            id: 1,
            nome: "Rihanna"

        };
        callback(usuario)
    }, 2000)
}

//1
console.log("Inicio da chamada");

//2
buscarUsuario((usuario) => {
    console.log(usuario);
});

//4
console.log("Fim do processo");


//Problema do callback