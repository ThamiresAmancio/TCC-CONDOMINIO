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
            numero:DataTypes.STRING,
            cnpj:DataTypes.STRING,

        },
        {
            sequelize:connection
        })
    }

    static associate(models){
        this.belongsTo(models.Admin)
        this.hasMany(models.Porteiro, { foreignKey:'condominio_id', as:'porteiros'})
        this.hasMany(models.Bloco, { foreignKey:'condominio_id', as:'blocos'})
        this.hasMany(models.Aviso, { foreignKey:'condominio_id', as:'avisos'})
    }
}

module.exports = Condominio;