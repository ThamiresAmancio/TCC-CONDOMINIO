'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('visitantes', [{
        name: 'Maria',
        rg : '502025712',
        cpf:'11155578923'
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      
      await queryInterface.bulkDelete('visitantes', null, {});
     
  }
};
