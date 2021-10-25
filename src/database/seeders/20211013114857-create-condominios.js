

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('condominios', [{
        name: 'Condominio Bela Vista ',
        bairro: 'Bairro das Flores',
        estado:'sao paulo',
        cep: '12345',
        rua:'rua belem',
        cidade:'barueri',
        numero: 13, 
        cnpj: 45777688,
        admin_id: 2
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('condominios', null);
     
  }
};




