const { Model, DataTypes } = require("sequelize");

class Agendamento extends Model {

    static init(connection){
        super.init({

            nome:DataTypes.STRING,
            data:DataTypes.STRING,
            horainicio:DataTypes.STRING,
            horatermino:DataTypes.STRING
        },
        {
            sequelize:connection
        })
    }
        static associate(models) {
            this.belongsTo(models.Condominio);
           
        }
}


module.exports = Agendamento;