'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('sessions',
        {
            id           : { type: Sequelize.BIGINT(11), primaryKey: true, autoIncrement: true },
            userId       : { type: Sequelize.BIGINT(11), references: { model: 'users', key: 'id' }, allowNull: false  },
            refreshToken : { type: Sequelize.UUID,   allowNull: false },
            fingerprint  : { type: Sequelize.STRING },
            expiredIn    : { type: Sequelize.BIGINT(11), allowNull: false, defaultValue: 60 },
            createdAt    : { type: Sequelize.DATE, allowNull: false },
            updatedAt    : { type: Sequelize.DATE, allowNull: false }
        },
        {
            charset : 'utf8mb4'
        })
  },

  down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('sessions');
  }
};
