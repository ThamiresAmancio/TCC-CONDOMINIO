const { Model, DataTypes } = require("sequelize");


class VisitantesSindicos extends Model{
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            rg:DataTypes.STRING,
            cpf:DataTypes.STRING,
            image:DataTypes.STRING,
        },
        {
            sequelize:connection
        })
    }
    static associate(models){
        this.belongsTo(models.Sindico);
    }
}

module.exports = VisitantesSindicos;