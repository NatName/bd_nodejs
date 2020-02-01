import Base from '../../../Base';
import Menu from '../../../../models/Menu';

export default class MenuUpdate extends Base {
    static validationRules = {
            id        : [ 'required', 'positive_integer' ],
            status    : [ 'required', 'string', { 'one_of': ['active', 'disabled', 'deleted'] } ]
    }

    async execute(data) {
        console.log(data);
        const menu = await Menu.findById(data.id);
        if(data.status === 'active') data.status = 'disabled';
        else data.status = 'active';
        await menu.update(data);

        return {
            data : menu
        };
    }
}
