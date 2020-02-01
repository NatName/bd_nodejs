import Base from '../../Base';
import User from '../../../models/User';

export default class UserDelete extends Base {
    static validationRules = {
        id    : [ 'required', 'positive_integer' ],
        token : [ 'required', 'string' ]
    }

    async execute(user) {
        const user = await User.findById(id);

        await user.destroy();

        return {
          id: user.id
        };
    }
}
