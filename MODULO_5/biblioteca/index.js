/*
//Criar Arquivo
const fs = require("fs/promises");


async function criarArquivo() {
    const livros = [
        {
            id: 1,
            titulo: "Iracema",
            autor: "José de Alencar"
        },
        {
            id: 2,
            titulo: "Harry Potter",
            autor: "J.K. Rowling"
        }
    ];

    //Criar o arquivo
    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

    console.log("Arquivo criado com sucesso!");
}

//Listar livros
async function listarLivros() {

    //ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");
    //transformar para objeto
    
    const livros = JSON.parse(dados) //parse transforma em um objeto

    //exibir no console(no futuro sera seu site)
    console.log(livros)
    
}
//Adicionar livro
async function adicionarLivro() {
//ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

//transformar (parse)
    const livros = JSON.parse(dados)

//add livro (push)
    livros.push({
        id: 3,
        titulo: "Jogos Vorazes",
        autor: "Suzanne Collins"
    })

//retransformar no objeto json
    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));


//"Livro adicionado com sucesso"
    console.log("Livro adicionado com sucesso")

}

//Alterar livros
async function alterarLivro(id) {
    //precisamos saber o livro

    //ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //transformar o arquivo JSON --> objeto
    const livros = JSON.parse(dados)

    //descobrir o livro
    const livro = livros.find((livro) => livro.id === id);

    //logica - se nao existir
    // ! => é como uma negação, como um false
    if(!livro){
        console.log("Livro não encontrado");
        return;
    }

    //altera o livro
    livro.autor = "Miguel";

    //retransformar 
    await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));

    //falar que deu certo
    console.log("Livro alterado com sucesso!")
    
}
//Deletar livro
    async function deletarLivro() {
    //Ler arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //transformar o arquivo
    const livros = JSON.parse(dados)

    //logica não - msg
    if(!livros){
        console.log("Livro não encontrado");
        return;
    }

    //procurar o livro a ser deletado -- deleta os dados do livro
    const livrosAtualizados = livros.filter((livro) => livro.id !==id);

    //retransformar
    await fs.writeFile("livros.json", JSON.stringify(livrosAtualizados, null, 2));

    //msg
    console.log("Livro deletado com sucesso!")
    }

//Função executar
async function executar() { // quando uma função chama outra usa await

    //await criarArquivo();

    await listarLivros();

    await adicionarLivro();

    await alterarLivro();

    await livrosAtualizados();

    await deletarLivro(2);
}

//chamando o inicio (endpoint)
executar();
*/

//Criar Arquivo
const fs = require("fs/promises");

async function criarArquivo() {
  const livros = [
    { id: 1, titulo: "Iracema", autor: "José de Alencar" },
    { id: 2, titulo: "Harry Potter", autor: "J.K. Rowling" }
  ];

  //Criar o arquivo
  await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));
  console.log("Arquivo criado com sucesso!");
}

//Listar livros
async function listarLivros() {
  //ler o arquivo
  const dados = await fs.readFile("livros.json", "utf-8");
  //transformar para objeto
  const livros = JSON.parse(dados); //parse transforma em um objeto
  //exibir no console
  console.log("--- Lista de Livros ---", livros);
}

//Adicionar livro
async function adicionarLivro() {
  //ler o arquivo
  const dados = await fs.readFile("livros.json", "utf-8");
  //transformar (parse)
  const livros = JSON.parse(dados);
  //add livro (push)
  livros.push({ id: 3, titulo: "Jogos Vorazes", autor: "Suzanne Collins" });
  //retransformar no objeto json
  await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));
  //"Livro adicionado com sucesso"
  console.log("Livro adicionado com sucesso!");
}

//Alterar livros
async function alterarLivro(id) {
  //ler o arquivo
  const dados = await fs.readFile("livros.json", "utf-8");
  //transformar o arquivo JSON --> objeto
  const livros = JSON.parse(dados);
  //descobrir o livro
  const livro = livros.find((livro) => livro.id === id);
  
  //logica - se nao existir
  if(!livro){
    console.log(`Livro com ID ${id} não encontrado para alteração`);
    return;
  }
  
  //altera o livro
  livro.autor = "Miguel";
  //retransformar
  await fs.writeFile("livros.json", JSON.stringify(livros, null, 2));
  //falar que deu certo
  console.log("Livro alterado com sucesso!");
}

//Deletar livro (Adicionado o parâmetro 'id' aqui)
async function deletarLivro(id) {
  //Ler arquivo
  const dados = await fs.readFile("livros.json", "utf-8");
  //transformar o arquivo
  const livros = JSON.parse(dados);

  // Procurar se o livro existe antes de deletar
  const livroExiste = livros.some((livro) => livro.id === id);
  if(!livroExiste){
    console.log(`Livro com ID ${id} não encontrado para exclusão`);
    return;
  }

  //procurar o livro a ser deletado -- deleta os dados do livro
  const livrosAtualizados = livros.filter((livro) => livro.id !== id);

  if(livrosAtualizados.length === livros.length){
    console.log("Livro", id, "não encontrado!");
    return
  }
  //retransformar
  await fs.writeFile("livros.json", JSON.stringify(livrosAtualizados, null, 2));
  //msg
  console.log("Livro deletado com sucesso!");
}

//Função executar
async function executar() {
  // Ativei o criarArquivo para garantir que o arquivo exista ao testar
  await criarArquivo(); 
  await listarLivros();
  
  await adicionarLivro();
  await listarLivros(); // Lista de novo para ver o livro adicionado
  
  await alterarLivro(1); // Passado o ID 1 como exemplo para alterar o autor de Iracema
  await listarLivros(); // Lista de novo para ver a alteração
  
  await deletarLivro(2); // Deleta o Harry Potter (ID 2)
  await listarLivros(); // Lista final para ver o resultado
}

//chamando o inicio (endpoint)
executar();
