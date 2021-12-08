'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('avisos', { 

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      mensagem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      link:{
        type: Sequelize.STRING,
        allowNull: true

      },
      status:{
        type: Sequelize.STRING,
        allowNull: true
      },
     
      data: {
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
        allowNull: false,
        type:Sequelize.INTEGER,
        references: {
          model: "condominios",
          key: "id"
        },
      },
     });
  },


  down: async (queryInterface, Sequelize) => {

    queryInterface.removeColumn('condominios', "condominio_id")
     await queryInterface.dropTable('avisos');
    
  }
};