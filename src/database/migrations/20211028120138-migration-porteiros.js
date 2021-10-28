'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('porteiros', { 

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      telephone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
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

     await queryInterface.dropTable('porteiros');
    
  }
};

