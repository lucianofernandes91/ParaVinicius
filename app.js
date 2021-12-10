const conectaBanco = require('./Bancos de Dados/conexao com o banco');
const defineTabelas = require('./Bancos de Dados/DDLs da app');
const configInicialDasRotas = require('./Rotas/rotas');

await conectaBanco();
await defineTabelas();
await configInicialDasRotas();

// ROTAS DE API - '/associados'

// BUSCA - TODOS REGISTROS
rota_associados.get('/', function(req, res) {
    res.json(buscaTodosAssociados);
});

// BUSCA POR CHAVE - UM REGISTRO DE RESPSOTA
rota_associados.get('/:id', function(req, res) {
    Associados.findOne({ where: { id_associado: req.params.id } })
        .then(function(associadoAchado) {
            res.json(associadoAchado);
        })
        .catch(function(err) {
            console.log('erro --->' + err.message);
        });
});

// Novo associado
rota_associados.post('/', function(req, res) {
    adicionaAssociado(req.body);
    res.send('cadastrado!');
});

// UPGRADE
rota_associados.put('/', function(req, res) {
        var aEnviar = '';
         Associados.findAll()
        .then(function(TodosAssociados){
            for (var i=0; i<TodosAssociados.length; i++) {
                console.log(TodosAssociados[i].dataValues.nome)
                aEnviar += TodosAssociados[i].dataValues.nome + '<hr>';
            }
            res.json(aEnviar)
        })
        .catch(function(err) {
            console.log('erro --->' + err.message);
        });
});

rota_associados.delete('/', function(req, res) {
    var aEnviar = '';
     Associados.findAll()
    .then(function(TodosAssociados){
        for (var i=0; i<TodosAssociados.length; i++) {
            console.log(TodosAssociados[i].dataValues.nome)
            aEnviar += TodosAssociados[i].dataValues.nome + '<hr>';
        }
        res.send(aEnviar)
    })
    .catch(function(err) {
        console.log('erro --->' + err.message);
    });
});
*/

// Rotina principal de espera de requests
app.listen(8081, function(){ console.log('Servidor na prr da porta 8081.')});