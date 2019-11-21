import User   from '../../../models/User';
import Base   from '../../Base';
import bcrypt from 'bcryptjs';
import jwt    from 'jsonwebtoken'
import uuid   from 'uuid/v4'

export default class SessionLogin extends Base {
    static validationRules = {
      email      : [ 'required', 'email' ],
      password   : [ 'required', { min_length: 6 } ]
    }

    async execute({email, password}) {
        let token;
        const session = await User.findOneOrFail({ where: { email } });

        if(session && bcrypt.compare(password, session.password)) {
          token = jwt.sign({
            id: session.id
          }, "NatName");
        }

        const refreshToken = uuid();

        if (!token) throwError('NOT EXISTED TOKEN', { entity: 'users' });

        return {
            token,
            refreshToken
        };
    }
}
