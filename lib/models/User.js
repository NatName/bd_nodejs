import { DataTypes as DT }  from 'sequelize';
import Base                 from './Base';
import bcrypt               from 'bcryptjs';

class User extends Base {
    static tableName = 'users'

    static schema = {
        id             : { type: DT.BIGINT(11), primaryKey: true, autoIncrement: true },
        email          : { type: DT.STRING, allowNull: false, unique: true },
        firstName      : { type: DT.STRING, defaultValue: '' },
        secondName     : { type: DT.STRING, defaultValue: '' },
        password       : { type: DT.STRING, field: 'passwordHash'},
        createdAt      : { type: DT.DATE, allowNull: false },
        updatedAt      : { type: DT.DATE, allowNull: false }
    }

    static initHooks() {
      this.beforeCreate(async (user, options) => {
        return bcrypt.hash(user.password, 10)
            .then(hash => {
                user.password = hash;
            })
      });
    }
}



export default User;
