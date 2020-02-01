import { DataTypes as DT } from 'sequelize';
import Base                from './Base';

class Menu extends Base {
  static tableName = 'menus'

  static options = {
        timestamps : false
    }

  static schema = {
        id        : { type: DT.INTEGER(11), allowNull: false, primaryKey: true, autoIncrement: true },
        parent_id : { type: DT.INTEGER(11), allowNull: false, defaultValue: '0' },
        type      : { type: DT.ENUM('base', 'sub', 'child'),allowNull: false },
        priority  : { type: DT.INTEGER(2), allowNull: false, defaultValue: '0' },
        name      : { type: DT.STRING(128), allowNull: false, defaultValue: '' },
        link      : { type: DT.STRING(2048), allowNull: false, defaultValue : '' },
        status    : { type: DT.ENUM('active', 'disabled', 'deleted'), allowNull: false, defaultValue: 'active'}
    }

  static initRelations() {

    }

}

export default Menu;
