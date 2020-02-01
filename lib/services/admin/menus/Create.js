import Menu from '../../../models/Menu';
import Base  from '../../Base';

export default class MenusCreate extends Base {
    static validationRules = {
        name      : [ 'required', 'string', { 'max_length': 255 } ],
        parent_id : [ 'required', 'integer', { 'min_number': 0 } ],
        type      : [ 'required', { 'one_of': ['base', 'sub', 'child'] } ],
        link      : [ 'not_empty' ],
        priority  : [ 'required', {'max_number': 99}, {'min_number': 0} ]
    }

    async execute(data) {
      console.log(data);
        const menu = await Menu.create(data);

        return {
            data : menu
        };
    }
}
