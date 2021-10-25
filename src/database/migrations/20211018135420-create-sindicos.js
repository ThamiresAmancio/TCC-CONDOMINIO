'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.createTable('sindicos', { 
        
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        
        surname:{
          type: Sequelize.STRING,
          allowNull: false
        },
        cpf:{
          type: Sequelize.STRING,
          allowNull: false
        },
        birth:{
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
        apartamento_id:{
          type: Sequelize.INTEGER,        
          allowNull: false,
          references: {
            model: "apartamentos",
            key: "id"
          },
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: true
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: true
        }
       }
    );
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.dropTable('sindicos');
     
  }
};

