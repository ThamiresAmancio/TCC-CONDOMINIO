'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.createTable('visitantes', 
        { 
          
          
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          
          rg:{
            type: Sequelize.STRING,
            allowNull: false
          },
          data:{
            type: Sequelize.STRING,
            allowNull: false
          },
          image:{
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
          sindico_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "sindicos",
              key: "id"
            },
          },
        });
  },

  down: async (queryInterface, Sequelize) => {
    
     queryInterface.removeColumn('sindicos', "sindico_id")
      await queryInterface.dropTable('visitantes');
     
  }
};