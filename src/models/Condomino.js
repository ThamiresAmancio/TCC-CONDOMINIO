const { Model, DataTypes } = require("sequelize");

class Condominio extends Model {

    static init(connection){
        super.init({


            name:DataTypes.STRING,
            bairro:DataTypes.STRING,
            estado:DataTypes.STRING,
            cep:DataTypes.STRING,
            rua:DataTypes.STRING,
            cidade:DataTypes.STRING,
            numero:DataTypes.INTEGER,
            cnpj:DataTypes.INTEGER,

        },
        {
            sequelize:connection
        })
    }

    static associate(models){
        this.belongsTo(models.Admin)
        this.hasMany(models.Porteiro, { foreignKey:'condominio_id', as:'porteiros'})
        this.hasMany(models.Bloco, { foreignKey:'condominio_id', as:'blocos'})
    }
}

module.exports = Condominio;