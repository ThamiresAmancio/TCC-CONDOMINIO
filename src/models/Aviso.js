const { Model, DataTypes } = require("sequelize");

class Aviso extends Model {

    static init(connection){
        super.init({
            titulo:DataTypes.STRING,
            mensagem:DataTypes.STRING,
            link:DataTypes.STRING,
            status:DataTypes.STRING,
            data:DataTypes.DATE,

        },
        {
            sequelize:connection
        })
    }
    static associate(models){
        this.belongsTo(models.Condominio);
  }
}


module.exports = Aviso;