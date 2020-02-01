import Session from '../../../models/Session';
import Base    from '../../Base';

export default class SessionLogin extends Base {
    static validationRules = {
      refreshToken : [ 'required', 'string' ]
    }

    async execute({refreshToken}) {
        const session = await Session.findOneOrFail({ where: { refreshToken } });

        await session.destroy();

        return {
          message: 'User is logged out from current session.'
        };
    }
}
