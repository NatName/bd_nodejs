import Base from '../../Base';
import Menu from '../../../models/Menu';

export default class MenuUpdate extends Base {
    static validationRules = {
            id        : [ 'required', 'positive_integer' ],
            name      : [ 'required', 'string', { 'max_length': 255 } ],
            parent_id : [ 'required', 'integer', { 'min_number': 0 } ],
            type      : [ 'required', { 'one_of': ['base', 'sub', 'child'] } ],
            link      : [ 'not_empty' ],
            priority  : [ 'required', {'max_number': 99}, {'min_number': 0} ]
    }

    async execute(data) {
        const menu = await Menu.findById(data.id);

        await menu.update(data);

        return {
            data : menu
        };
    }
}
