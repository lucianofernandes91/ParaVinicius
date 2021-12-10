function defineTabelas() {
    /// CREATE TABLE com sequelize.
    const Associados = sequelize_banco.define('associados',
    {
        id_associado: {
            type: Sequelize_Geral.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome:  Sequelize_Geral.STRING,
        email: Sequelize_Geral.STRING
    })
    Associados.sync(force = false);

    /// CREATE TABLE com sequelize.
    const Veiculos = sequelize_banco.define('veiculos',
    {
        id_veiculo: {
            type: Sequelize_Geral.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_associado: {
            type: Sequelize_Geral.INTEGER
        },
        marca:  Sequelize_Geral.STRING,
        modelo: Sequelize_Geral.STRING,
        placa: Sequelize_Geral.STRING
    })
    Veiculos.sync(force = false);
}

export default defineTabelas;