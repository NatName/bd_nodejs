import Session  from '../../../models/Session';
import Base     from '../../Base';
import { data } from '../../../../config/config'
import jwt      from 'jsonwebtoken';
import uuid     from 'uuid/v4'



export default class SessionLogin extends Base {
    static validationRules = {
      token        : [ 'required', 'string' ],
      refreshToken : [ 'required', 'string' ]
    }

    async execute({token, refreshToken}) {
        const session = await Session.findOneOrFail({ where: { refreshToken } });
        const userId = session.userId;

        try {
          await jwt.verify(token, "NatName");
        } catch (e) {
          if(e.message === 'jwt expired') {
            token = jwt.sign({
              id: userId
            }, data.secret, {
              expiresIn: data.tokenLife
            });

            refreshToken = uuid();
            await session.destroy();
            await Session.create({
              userId,
              refreshToken,
            });
          }
        }
        return {
          token,
          refreshToken
        };
    }
}
