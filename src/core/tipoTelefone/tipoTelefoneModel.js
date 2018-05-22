const sequelizePG = require('../../../common/sequelizeConfig'),
    sequelize = sequelizePG.sequelize(),
    DataTypes = sequelizePG.Sequelize.DataTypes;

module.exports = () => {
    return tipoTelefone;
}

const tipoTelefone = sequelize.define('tipo_telefone', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        tableName: "tipo_telefone",
        timestamps: false
    }
);