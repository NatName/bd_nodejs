import Login  from '../../services/site/sessions/Login';
import Logout from '../../services/site/sessions/Logout';
import Refresh  from '../../services/site/sessions/Refresh';
import chista from '../../chista.js';

export default {
    login   : chista.makeServiceRunner(Login, req => ({ ...req.body }), req => ({ ...req.cookies })),
    logout  : chista.makeServiceRunner(Logout, req => ({ ...req.body }), req => ({ ...req.cookies })),
    refresh : chista.makeServiceRunner(Refresh, req => ({ ...req.body }), req => ({ ...req.cookies }))
};
