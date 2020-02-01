module.exports = {
    up : async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Menus',
            {
                id : {
                    type       : Sequelize.INTEGER(11),
                    allowNull  : false,
                    primaryKey : true,
                    autoIncrement: true 
                },
                parent_id : {
                    type         : Sequelize.INTEGER(11),
                    allowNull    : false,
                    defaultValue : '0'
                },
                type : {
                    type      : Sequelize.ENUM('base', 'sub', 'child'),
                    allowNull : false
                },
                priority : {
                    type         : Sequelize.INTEGER(2),
                    allowNull    : false,
                    defaultValue : '0'
                },
                name : {
                    type         : Sequelize.STRING(128),
                    allowNull    : false,
                    defaultValue : ''
                },
                link : {
                    type         : Sequelize.STRING(2048),
                    allowNull    : false,
                    defaultValue : ''
                },
                status : {
                    type         : Sequelize.ENUM('active', 'disabled', 'deleted'),
                    allowNull    : false,
                    defaultValue : 'active'
                }
            },
            {
                charset : 'utf8mb4'
            }
        );
    },

    down : async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Menus');
    }
};
