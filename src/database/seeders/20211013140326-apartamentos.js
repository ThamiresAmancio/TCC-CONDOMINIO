'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('apartamentos', [{
        numero: 14
      }], {});
  
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('apartamentos', null, {});
     
  }
};
