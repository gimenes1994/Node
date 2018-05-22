const tipoTelefone = require('../tipoTelefone/tipoTelefoneModel')();

module.exports = {
    get,
    getById,
    insert,
    update,
    exclude
}

async function get(pg, recordCount) {
    return await tipoTelefone.findAll({offset: pg.offset, limit: pg.limit, attributes: recordCount });
}

async function getById(id) {
    return await tipoTelefone.findAll({ where: { id: id } });
}

async function insert(tipoTelefoneModel, transaction) {
    return await tipoTelefone.create(tipoTelefoneModel, { transaction });
}

async function update(tipoTelefoneModel, transaction) {
    return await tipoTelefone.update(tipoTelefoneModel, { transaction, where: { id: tipoTelefoneModel.id } });
}

async function exclude(id, transaction) {
    return await tipoTelefone.destroy({ transaction, where: { id: id } });
}

