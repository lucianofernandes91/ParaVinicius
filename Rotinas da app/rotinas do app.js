//Busca todos os associados
export function buscaTodosAssociados(){
    Associados.findAll()
    .then(function(TodosAssociados){
        return TodosAssociados;
    })
    .catch(function(err) {
        console.log('erro --->' + err.message);
    });
}

// BUSCA POR CHAVE - UM REGISTRO DE RESPSOTA
export function buscaAssociadoPorId(id) { 
rota_associados.get('/:id', function(req, res) {
    Associados.findOne({ where: { id_associado: id } })
    .then(function(associadoAchado) {
        return associadoAchado;
    })
    .catch(function(err) {
        console.log('erro --->' + err.message);
    });
});

//Cria novos Associados
function adicionaAssociado(dados){
    if (dados.length === undefined) {
        Associados.create(
        {
            nome: dados.nome,
            email: dados.email
        })
    } else if ((typeof dados) == 'object') {
        for(i=0 ; i<dados.length ; i++) { 
            Associados.create(
            {
                nome: dados[i].nome,
                email: dados[i].email
            })
        }
    }
}

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