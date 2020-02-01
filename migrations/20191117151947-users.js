'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('users',
        {
            id           : { type: Sequelize.BIGINT(11), primaryKey: true, autoIncrement: true },
            firstName    : { type: Sequelize.STRING, allowNull: false },
            secondName   : { type: Sequelize.STRING, allowNull: false },
            email        : { type: Sequelize.STRING, allowNull: false, unique: true },
            passwordHash : { type: Sequelize.STRING, allowNull: false },
            createdAt    : { type: Sequelize.DATE, allowNull: false },
            updatedAt    : { type: Sequelize.DATE, allowNull: false },
            deletedAt    : { type: Sequelize.DATE }
        },
        {
            charset : 'utf8mb4'
        })
  },

  down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
  }
};
