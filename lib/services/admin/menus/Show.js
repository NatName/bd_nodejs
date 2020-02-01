import Menu from '../../../models/Menu';
import Base from '../../Base';

export default class MenuShow extends Base {
    static validationRules = {
        id : [ 'required', 'positive_integer' ]
    }

    async execute({ id }) {
        const menu = await Menu.findById(id);

        return {
            data : menu
        };
    }
}
