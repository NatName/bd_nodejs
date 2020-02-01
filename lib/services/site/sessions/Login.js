import User    from '../../../models/User';
import Session from '../../../models/Session';
import Base    from '../../Base';
import X       from '../../../../template/Exception.js';
import bcrypt  from 'bcryptjs';
import jwt     from 'jsonwebtoken'
import uuid    from 'uuid/v4'
import { data }  from '../../../../config/config'

export default class SessionLogin extends Base {
    static validationRules = {
      email      : [ 'required', 'email' ],
      password   : [ 'required', { min_length: 6 } ]
    }

    async execute({email, password}) {
        let token, refreshToken;
        const user = await User.findOne({ where: { email } });
        const auth = await bcrypt.compare(password, user.password);

        if(!auth || !user)
          throw new X({
              code   : 'WRONG_PASSWORD_OR_EMAIL',
              fields : { password: 'WRONG_PASSWORD',
                        email    : 'WRONG_EMAIL'
                      }
          });

          token = jwt.sign({
            id: user.id
          }, data.secret, {
            expiresIn: data.tokenLife
          });
          refreshToken = uuid();

          await Session.create({
            userId: user.id,
            refreshToken,
          });

        return {
            userId: user.id,
            name:user.firstName,
            token,
            refreshToken
        };
    }
}
