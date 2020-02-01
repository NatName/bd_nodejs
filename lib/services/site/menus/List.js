import Base         from '../../Base';
import Menu         from '../../../models/Menu.js';

export default class MenuList extends Base {
    static validationRules = {
        limit    : [ 'positive_integer' ],
        order    : [ 'string', 'trim', 'to_uc', { 'one_of': [ 'ASC', 'DESC' ] } ],
        sortedBy : [ 'string', 'trim', { 'one_of': [ 'priority' ] } ],
        offset   : [ 'positive_integer' ],
        status   : [ 'string', 'trim', { 'one_of': [ 'active', 'disabled' ] } ]
    };

    async execute({ limit = 5, order = 'ASC', sortedBy = 'priority', offset = 0, status }) {
      const menus = await Menu.findAll({
            where : {
              status : 'active'
            },
            offset,
            order : [ [ sortedBy, order ] ]
        });


        return { data: menus };
    }
}
