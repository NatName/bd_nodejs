import { DataTypes as DT }  from 'sequelize';
import Base                 from './Base';

class Session extends Base {
    static tableName = 'sessions'

    static schema = {
      id           : { type: DT.BIGINT(11), primaryKey: true, autoIncrement: true },
      userId       : { type: DT.BIGINT(11), allowNull: false  },
      refreshToken : { type: DT.UUID, allowNull: false },
      fingerprint  : { type: DT.STRING },
      expiredIn    : { type: DT.BIGINT(11), allowNull: false, defaultValue: 60 },
      createdAt    : { type: DT.DATE, allowNull: false },
      updatedAt    : { type: DT.DATE, allowNull: false }
    }

}

export default Session;
