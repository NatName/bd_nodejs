import Login from '../../services/site/sessions/Login';

import chista from '../../chista.js';

export default {
    session : chista.makeServiceRunner(Login, req => ({ ...req.body }),      req => ({ ...req.cookies }))
};
