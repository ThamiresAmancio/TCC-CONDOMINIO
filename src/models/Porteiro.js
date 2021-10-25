const { Model, DataTypes } = require("sequelize");


class Porteiro extends Model {
    static init(conncetion){
        super.init({

            name:DataTypes.STRING,
            telephone: DataTypes.STRING,
            email:DataTypes.STRING,
            password:DataTypes.STRING,
        },{
            sequelize:conncetion
        })
    }
    static associate(models){
        this.belongsTo(models.Condominio);
    }
}

module.exports = Porteiro;