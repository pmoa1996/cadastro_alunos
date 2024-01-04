/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Larisa Jota',
          email: 'larj@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Leo Jota',
          email: 'leoj@gmail.com',
          password_hash: await bcryptjs.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Marta Jota',
          email: 'martj@gmail.com',
          password_hash: await bcryptjs.hash('456789', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
