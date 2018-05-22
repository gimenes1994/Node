const tipoTelefoneRepository = require('../tipoTelefone/tipoTelefoneRepository'),
    sequelize = require('../../../common/sequelizeConfig').sequelize();

module.exports = {
    insert
}

async function insert(tipoTelefoneModel) {
    // montei um exemplo de transaction.
    var transaction = await sequelize.transaction();
    try {

        var retorno = await tipoTelefoneRepository.insert(tipoTelefoneModel, transaction);
        let teste = tipoTelefoneModel;
        teste.id = 25;
        teste.descricao = 'UPDATE TRANSACTION';
        var retorno = await tipoTelefoneRepository.update(teste, transaction);
        kasjdhas;

        await transaction.commit();
        
        return retorno;
    } catch (e) {
        await transaction.rollback();
        throw e;
    }
}