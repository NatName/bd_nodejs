import User from '../../../models/User';
import Base from '../../Base';

export default class ProductShow extends Base {
    static validationRules = {
        id : [ 'required', 'positive_integer' ]
    }

    async execute({ id }) {
        const user = await User.findById(id);

        return {
            data : user
        };
    }
}
