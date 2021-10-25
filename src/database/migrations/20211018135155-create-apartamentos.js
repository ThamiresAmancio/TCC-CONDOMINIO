'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('apartamentos', { 
     
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      numero: {
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
      bloco_id:{
        type: Sequelize.INTEGER,
        references: {
          model: "blocos",
          key: "id"
        },
      }
    })
  },
    
  
  down: async (queryInterface, Sequelize) => {
   
       queryInterface.dropTable('apartamentos');
    
  }
};