import Base         from '../../Base';
import Menu         from '../../../models/Menu.js';

export default class MenuList extends Base {
    static validationRules = {
        limit    : [ 'positive_integer' ],
        order    : [ 'string', 'trim', 'to_uc', { 'one_of': [ 'ASC', 'DESC' ] } ],
        sortedBy : [ 'string', 'trim', { 'one_of': [ 'priority' ] } ],
        offset   : [ 'positive_integer' ]
    };

    async execute({ limit = 20, order = 'ASC', sortedBy = 'priority', offset = 0 }) {
      const menus = await Menu.findAll({
            limit,
            offset,
            order : [ [ sortedBy, order ] ]
        });

        return { data: menus };
    }
}
