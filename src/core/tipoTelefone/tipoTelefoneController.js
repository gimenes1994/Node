const tipoTelefoneRepository = require("./tipoTelefoneRepository"),
  tipoTelefoneService = require("./tipoTelefoneService");

module.exports = {
  get,
  getById,
  insert,
  update,
  exclude
};

async function get(req, pg, recordCount) {
  let ret = await tipoTelefoneRepository.get(pg);
  ret.recordCount = await tipoTelefoneRepository.get({}, recordCount);  
  return ret;
}

async function getById(req) {
  return await tipoTelefoneRepository.getById(req.params.id);
}

async function insert(req) {
  return await tipoTelefoneRepository.insert(req.body.tipoTelefone);
}

async function update(req) {
  return await tipoTelefoneRepository.update(req.body.tipoTelefone);
}

async function exclude(req) {
  return await tipoTelefoneRepository.exclude(req.params.id);
}
