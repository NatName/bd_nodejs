import Sequelize           from 'sequelize';

const sequelize = new Sequelize('bd', 'root', 'password', {
    host   :'localhost',
    port   : '3306',
    dialect: 'mysql',
    logging        : false,
    dialectOptions : {
        connectTimeout : 10000
    },
    pool : {
        min     : 0,
        max     : 10,
        idle    : 10000, // The maximum time, in milliseconds, that a connection can be idle before being released.
        acquire : 30000 // ..., that pool will try to get connection before throwing error
    },
    retry : { // Set of flags that control when a query is automatically retried.
        match : [
            /SequelizeConnectionError/,
            /SequelizeConnectionRefusedError/,
            /SequelizeHostNotFoundError/,
            /SequelizeHostNotReachableError/,
            /SequelizeInvalidConnectionError/,
            /SequelizeConnectionTimedOutError/,
            /TimeoutError/
        ],
        max : 4 // How many times a failing query is automatically retried.
    }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.Op = Sequelize.Op;

export default sequelize;
