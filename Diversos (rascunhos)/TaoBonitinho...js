// Adiciona array de JSONs
var associadosAIncluir = 
[
    {
        "nome": "Molecule Man",
        "email": "molecular@email.com.br"
        
    },
    {
        "nome":"Super man",
        "email": "clark@email.com."
    },
    
    {
        "nome":"Batman",
        "email": "BruceWayne@email.com."
    }
]

adicionaAssociado(associadosAIncluir);

//Adiciona único JSON (sem array)
associadosAIncluir = 
    {
        "nome": "Só um",
        "email": "SoUm@email.com.br"  
    };

adicionaAssociado(associadosAIncluir);