'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('users', [
     {
       first_name: 'John',
       last_name: 'Doe',
       email: 'test@test.com',
       phone_number: '6045555555',
       password: '1234',
       user_type: 'user',
       createdAt: new Date(),
       updatedAt : new Date()
     },
     {
      first_name: 'Bob',
      last_name: 'Doe',
      email: 'test1@test.com',
      phone_number: '6045555556',
      password: '1234',
      user_type: 'user',
      createdAt: new Date(),
      updatedAt : new Date()
     },
     {
      first_name: 'Mike',
      last_name: 'Doe',
      email: 'test2@test.com',
      phone_number: '6045555557',
      password: '1234',
      user_type: 'user',
      createdAt: new Date(),
      updatedAt : new Date()
     },
     {
      first_name: 'Gurpreet',
      last_name: 'Kooner',
      email: 'test3@test.com',
      phone_number: '4166683037',
      password: '1234',
      user_type: 'admin',
      createdAt: new Date(),
      updatedAt : new Date()
     }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('users', null, {});
  }
};
