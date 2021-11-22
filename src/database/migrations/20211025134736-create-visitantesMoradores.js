
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.createTable('visitantes_moradors', 
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
           morador_id:{
            type: Sequelize.INTEGER,        
            allowNull: false,
            references: {
              model: "moradors",
              key: "id"
            },
          },
        });
  },

  down: async (queryInterface, Sequelize) => {
    
      
      await queryInterface.dropTable('visitantes_moradors');
     
  }
};
