import Sequelize from 'sequelize';
import X         from '../../template/Exception.js';

class Base extends Sequelize.Model {
    static context = { lang: 'ua' };

    static init(sequelize, options = {}) {

        super.init(this.schema, {
            tableName  : this.tableName,
            timestamps : true,
            ...options,
            sequelize,
            ...this.options
        });
    }

    static initRelationsAndHooks(sequelize, models) {
        if (this.initRelations) this.initRelations(sequelize, models);
        if (this.initHooks) this.initHooks();
    }

    static async findById(id, transaction) {
      console.log("--byId----");
      console.log(id, transaction);
        const entity = await this.findOne({ where: { id }, transaction });
        console.log(entity);
        if (!entity) {
            throw new X({
                code   : 'WRONG_ID',
                fields : { id: 'WRONG_ID' }
            });
        }

        return entity;
    }

    static async findOneOrFail(data = {}, fields = null) {
        const entity = await this.findOne(data);

        if (!entity) {
            throw new X({
                code   : `${this.options.name.singular.toUpperCase()}_NOT_FOUND`,
                fields : fields || data.where || {}
            });
        }

        return entity;
    }

    static getIncludeMap(includesList) {
        const includeMap = {};

        includesList.forEach(item => {
            if (!this.whiteIncludeList[item]) return;
            if (includeMap[item]) return;

            includeMap[item] = this.whiteIncludeList[item];
        });

        return includeMap;
    }
}

export default Base;
