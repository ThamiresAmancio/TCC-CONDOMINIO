'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('admins', [{
        name: 'John ',
        surname: 'shawn',
        cpf:'504.198.445-52',
        birth: '10/06/2004',
        email:'john@gmail.com',
        password:'1234',
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('admins', null);
     
  }
};
