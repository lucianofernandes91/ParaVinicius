// Express para rotas

const express = require('express');
const app = express();

// ROTAS

function configIniucialDasRotas() {
    // Criação do endpoint '/associadoS'
    var rota_associados = express.Router();

    /// middleware obrigatório da lib router. Deveria ser embutino, né, vacilões do Express???
    rota_associados.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now());
        next();
    });

    /// Outro middleware inútil do Express.
    app.use(express.json()) // for parsing application/json
    app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    /// Associação do endpoint a esta app
    app.use('/associadoS', rota_associados);

    rota_associados.use(express.json());
    rota_associados.use(express.urlencoded({ extended: true })) 
}

export default configIniucialDasRotas;