// Sequelize_Geral para BANCO

// Lembrar: 
// Associado: Tem cadastro
// Assinante: Cadstro revisado como sucesso e cadastrado no site Asaas pela API

function conectaBanco() {
    //Conecta ao banco
    // No futuro, parametrizar as opções
    const Sequelize_Geral = require('sequelize');
    const sequelize_banco = new Sequelize_Geral('bd_vector_registration', 'root', 'Luc112013',
    {
        host: "localhost",
        dialect: 'mysql',
        port: 3306

    });

    /// Testa conexão
    sequelize_banco.authenticate()
        .then(function(){console.log("Conectado.");})
        .catch(function(erro){console.log("Erro ao conectar. ---> " + erro);});
}

export default conectaBanco;