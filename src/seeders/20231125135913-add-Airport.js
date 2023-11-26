'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      
    await queryInterface.bulkInsert('Airports', [
      {
         name: 'Jaipur Airport',
        cityId: 51,
        createdAt: new Date(),
        updatedAt: new Date(),
        address : "sanganer"
       },
       {
         name: 'Noida Airport',
        cityId: 61,
        createdAt: new Date(),
        updatedAt: new Date(),
        address : "jewar"
       },
       {
         name: 'Delhi Airport',
        cityId: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
        address : "dwarka sector 20"
       },
       {
         name: 'varanasi Airport',
        cityId: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        address : "harahua"
       },
       {
         name: 'banglore Airport',
        cityId: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
        address : "main road"
       },
       {
         name: 'Kolkatta Airport',
        cityId: 56,
        createdAt: new Date(),
        updatedAt: new Date(),
        address : "main road"
       },
       {
         name: 'Gurugram Airport',
        cityId: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
        address : "cyber city"
       },
      
      
      
      ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
