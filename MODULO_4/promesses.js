// Promesses - é uma promessa de que teremos um resultado no futuro

//formator
//((parametros ...) => {lógica})

// Criando uma promisse

const promessa = new Promise((resolve, reject) => {
    const sucesso = true;

    if (sucesso) {
        console.log("Tudo certo!!")
    }
    else {
        reject("Deu errado!!")
    }
});

//consumir a promisse

promessa
    .then((resultado) => {
    console.log(resultado);
})
    .catch((erro) => {
        console.log(erro)
});