import { DataTypes as DT } from 'sequelize';
import Base      from './Base';

class Product extends Base {
  static tableName = 'products'

  static options = {
        timestamps : false
    }

  static schema = {
        id         : { type: DT.BIGINT(11), primaryKey: true, autoIncrement: true },
        name       : { type: DT.STRING, allowNull: false },
    }

}

export default Product;
