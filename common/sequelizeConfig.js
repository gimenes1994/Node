const Sequelize = require('sequelize'),
    webconfig = require("./webconfig"),
    webconfigdata = webconfig.dataConfig.PG;

function sequelize() {
    return new Sequelize(webconfigdata.database, webconfigdata.user, webconfigdata.password, {
        host: webconfigdata.host,
        dialect: webconfigdata.dialect,
        port: webconfigdata.port
    })
}

module.exports = {
    sequelize,
    Sequelize
}

