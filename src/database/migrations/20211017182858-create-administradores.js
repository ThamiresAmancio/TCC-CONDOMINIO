'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('admins', { 
     
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      surname: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birth: {
        type: Sequelize.STRING,
        allowNull: true
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
    })
  },
    
  down: async (queryInterface, Sequelize) => {
   
       queryInterface.dropTable('admins');

  }
};