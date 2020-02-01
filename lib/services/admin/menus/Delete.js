import Base from '../../Base';
import Menu from '../../../models/Menu';

export default class MenuDelete extends Base {
    static validationRules = {
        id : [ 'required', 'positive_integer' ]
    }

    async execute({ id }) {
        const menu = await Menu.findById(id);

        await menu.destroy();

        return {
            id
        };
    }
}
