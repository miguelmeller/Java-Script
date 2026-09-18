
const usuarios = [{
    id: 1,
    nome: "Israel",
    whats: "19992732774",
    email: "israel.piran@gmail.com",
    cep: "13670000"

},
{
    id: 2,
    nome: "Amauri",
    whats: "1966666666",
    email: "amauri.piran@gmail.com",
    cep: "13670001"
},
{
    id: 1,
    nome: "Neide",
    whats: "1977777777",
    email: "neide.piran@gmail.com",
    cep: "13670002"
},
];

//Função buscar
async function buscarUsuario(id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const usuario = usuarios.find((usuario) => usuario.id === id);
            
            if(usuario){
                resolve(usuario);
            }
            else{
                reject("Usuário não encontrado");
            }

        }, 1000)

    });
}

//transformando em modulo 
module.exports = {
    buscarUsuario
};

