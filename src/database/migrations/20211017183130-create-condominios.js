'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('condominios', { 
     
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cnpj: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: true
      },
      admin_id:{
        type: Sequelize.INTEGER,
      references: {
        model: "admins",
        key: "id"
      },
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
   
    queryInterface.dropTable('condominios')
 
}
};