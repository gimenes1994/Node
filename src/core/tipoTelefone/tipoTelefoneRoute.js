const controller = require('./tipoTelefoneController');

module.exports = [{
    verbo: 'get',
    rota: '/tipoTelefone/',
    metodo: controller.get,
    public: true
}, {
    verbo: 'get',
    rota: '/tipoTelefone/:id',
    metodo: controller.getById,
    public: true
}, {
    verbo: 'post',
    rota: '/tipoTelefone/',
    metodo: controller.insert,
    public: true
}, {
    verbo: 'put',
    rota: '/tipoTelefone/',
    metodo: controller.update,
    public: true
}, {
    verbo: 'delete',
    rota: '/tipoTelefone/:id',
    metodo: controller.exclude,
    public: true
}
];