// no promesses temos

buscarUsuario().then(usuario => {
    console.log(usuario);
});

// async awit - Essa função vai funcionar de forma assincrona e vai 
// ter um pedaço que vamos precisar esperar

//No Async - await
async function buscarUsuarioAsync(id) {
    try{
    //aqui é o que eu quero que aconteça
    const usuario = await buscarUsuario();
    console.log(usuario);
    }
    catch (erro) {
        //erro que rolou
        console.log(erro);
    }
}