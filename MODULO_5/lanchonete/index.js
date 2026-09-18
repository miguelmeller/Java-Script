//exports e imports
const fs = require ("fs/promises");
const{buscarUsuario} = require("./usuario");
const {buscarProdutos} = require("./produtos");
const { buscarPedidos } = require("./pedidos");

//função
async function fecharConta(usuarioId) {
    try{

    //Usuário
    console.log("Buscando usuário")
    const usuario = await buscarUsuario(usuarioId);
    console.log(usuario);

    console.log("Buscando pedidos")
    const pedidos = await buscarPedidos(usuario.id)

    //Pedido--------------
    //Total geral
    let totalGeral = 0;

    //Array para os itens
        const itensConta = [];

    //varrer os pedidos para ver se o tem pedidos do cliente
    //varrer os itens (produtos) e add (push) os itens no itens da conta
    //Estrutura do comando
    for(const pedido of pedidos){
        const produto = await buscarProdutos(pedido.produtoId);
        const subTotal = produto.preco * pedido.quantidade;

        itensConta.push({
            item: produto.nome,
            quantidade: pedido.quantidade,
            precoUnitario: produto.quantidade,
            subTotal: subTotal
        });

        totalGeral += subTotal;
    }


    //Construir nosso arquivo
    const comanda = {
        estabelecimento: "Mc",
        cliente:{
            id: usuario.id,
            nome:usuario.nome
        },
        itens: itensConta,
        totaPagar: totalGeral
    }
    
    await fs.writeFile("comandaCliente.json", 
        JSON.stringify(comanda, null, 2), "utf-8")

    }
    catch(erro){
    console.error("Erro ao fechar a conta", erro);
    }
}

fecharConta(1);