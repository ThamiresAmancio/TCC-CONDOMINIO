'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('visitantes', [{
        name: 'Maria',
          rg : '502025712',
         data:'12/08/2021'
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      
      await queryInterface.bulkDelete('visitantes', null, {});
     
  }
};
