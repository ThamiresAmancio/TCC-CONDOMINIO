const { Model, DataTypes } = require("sequelize");


class Sindico extends Model{

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
            this.hasMany(models.visitanteSindico,{ foreignKey:'sindico_id', as:'visitante'});
        }
}

module.exports = Sindico;