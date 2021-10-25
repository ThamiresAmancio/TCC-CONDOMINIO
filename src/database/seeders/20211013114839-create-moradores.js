'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('cadastro_moradores', [{
        name: 'Carol Mendes',
        surname: 'Ferreira',
        cpf:'687956785-22',
        birth: '12/12/2001',
        email:'carolmendes@gmail.com',
        password:'bcd17'
        // condominio: 'Bela Vista', 
        // bloco: 'f22',
        // apartamento: 44
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('cadastro_moradores', null);
     
  }
};

