//Simulção
//Função auxiliar

const esperar = (ms) => new Promise(
    resolve => setTimeout(
        resolve, ms
    ));

// BuscarUsuario
async function buscarUsuario(Id) {
    await esperar(2000) //await vai simular o tempo

    return{
        id: Id, //O ID QUE A GNT
        nome: "Miguel Augusto",
        email: "miguelmeller670@gmail.com"
    }   
};

//Função buscarPedidos

async function buscarPedidos(usuarioId) {
    await esperar(3000);

    const todosPedidos = [
        {id: 1, produto: "X-Tudo"},
        {id: 2, produto: "Coca-Cola"},
        {id: 3, produto: "X-Catupiry"}
    ];

    return todosPedidos.filter(pedido => pedido.id === usuarioId);

}

//Função executar

async function executar() {
    try {
        console.log("Iniciando simulação")
        console.log("Buscando usuário...")
        buscarUsuario();
        const usuario = await buscarUsuario(1);
        console.log("Usuário encontrado: ", usuario);

        //buscar pedidos
        console.log("Buscando pedido pelo id: ", usuario.id);
        const pedidos = await buscarPedidos(usuario.id);
        console.log("O pedido encontrado foi: ", pedidos)
        
        
    }
    catch(erro){
        console.log("Deu errado!")
    }
    
}

executar();



