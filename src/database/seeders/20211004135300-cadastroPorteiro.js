'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('porteiros', [{
        name: 'John Doe',
        telephone: '1197252-3125',
        email:'john@gmail.com',
        password:'123',
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('porteiros', null, {});
    
  }
};
