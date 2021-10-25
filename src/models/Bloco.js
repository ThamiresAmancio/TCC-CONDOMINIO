const { Model, DataTypes } = require("sequelize");

class Bloco extends Model {

    static init(connection){
        super.init({

            name:DataTypes.STRING,
        },
        {
            sequelize:connection
        })
    }

    static associate(models){
        this.belongsTo(models.Condominio);
        this.hasMany(models.Apartamento,{ foreignKey:'bloco_id', as:'apartamentos'});
    }
}


module.exports = Bloco;