

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

