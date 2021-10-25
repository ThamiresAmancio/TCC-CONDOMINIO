const { Model, DataTypes } = require("sequelize");

class Admin extends Model {

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
        static associate(models) {
            this.hasMany(models.Condominio,{ foreignKey:'admin_id', as:'condominio'});
        }
}


module.exports = Admin;