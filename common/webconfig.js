module.exports = {
    apiRequestTimeout: 20000,
    secretWord: 'teste123',
    nameApi: 'Estudos Node',
    urlApi: 'http://localhost',
    portApi: process.env.PORT || 4600,
    dataConfig: {
        PG: getBanco()
    }
};

function getBanco() {
    // metodo responsavel por verificar qual ambiente sera utilizado
    if (process.env.NODE_ENV == "producao") {
        return {
            host: 'localhost',
            database: 'OdontologiaMoreno',
            port: 5432,
            user: 'postgres',            
            password: 'moreno01',
            dialect: "postgres"
        }
    }

    return {
        host: 'localhost',
        database: 'OdontologiaMoreno',
        port: 5432,
        user: 'postgres',            
        password: 'moreno01',
        dialect: "postgres"           
    }
}