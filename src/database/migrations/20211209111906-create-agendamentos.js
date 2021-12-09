'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('agendamentos', { 

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data: {
        type: Sequelize.STRING,
        allowNull:false
      },
      horainicio: {
         type: Sequelize.STRING,
         allowNull: true
      },
      horatermino: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: true
      },
      condominio_id:{
        type: Sequelize.INTEGER,        
        allowNull: false,
        references: {
          model: "condominios",
          key: "id"
        },
      },
     });
  },

  down: async (queryInterface, Sequelize) => {

    queryInterface.removeColumn('condominios', "condominio_id")

     await queryInterface.dropTable('agendamentos');
    
  }
};