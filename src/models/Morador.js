const { Model, DataTypes } = require("sequelize");

class Morador extends Model {

    static init(connection){
        super.init({


            name:DataTypes.STRING,
            surname:DataTypes.STRING,
            cpf:DataTypes.STRING,
            birth:DataTypes.STRING,
            email:DataTypes.STRING,
            password:DataTypes.STRING,
        },
        {
            sequelize:connection
        })
    }

    static associate(models){

        this.belongsTo(models.Apartamento);
        this.hasMany(models.Visitante,{ foreignKey:'morador_id', as:'visitante'});

    }
}


module.exports = Morador;