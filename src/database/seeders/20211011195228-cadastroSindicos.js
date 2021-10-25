'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('sindicos', [{
        name: 'Maria',
        surname : 'Fernanda',
        cpf:'11155578923',
        birth:'11/10/2001',
        email:'maria@gmail.com',
        password:'123',
        // condominio:'Condomínio Bela Vista',
        // bloco:'Bloco A',
        // apartamento:'158'
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('sindicos', null, {});
     
  }
};
