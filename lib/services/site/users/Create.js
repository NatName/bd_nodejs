import User from '../../../models/User';
import Base from '../../Base';

export default class UserCreate extends Base {
    static validationRules = {
        firstName  : [ 'required', 'string', { 'max_length': 255 } ],
        secondName : [ 'required', 'string', { 'max_length': 255 } ],
        email      : [ 'required', 'email' ],
        password   : [ 'required', { min_length: 6 } ]
    }

    async execute(data) {

        const user = await User.create(data);

        return {
            data : user
        };
    }
}
