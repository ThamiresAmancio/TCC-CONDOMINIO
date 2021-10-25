const { Model, DataTypes } = require("sequelize");


class Apartamento extends Model {

    static init(connection){
        super.init({

            numero: DataTypes.INTEGER,
        },
        {
            sequelize:connection
        })
    }
    static associate(models){
        this.hasOne(models.Morador);
        this.hasOne(models.Sindico);
        this.belongsTo(models.Bloco);
    }
}


module.exports = Apartamento;