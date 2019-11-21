import Base from '../../Base';
import User from '../../../models/User';

export default class ProductDelete extends Base {
    static validationRules = {
        id : [ 'required', 'positive_integer' ]
    }

    async execute({ id }) {
        const user = await User.findById(id);

        await user.destroy();

        return {
            id
        };
    }
}
