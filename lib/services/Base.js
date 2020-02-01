import ServiceBase     from '../../template/ServiceBase.js';
import ModelBase       from '../models/Base';

class Base extends ServiceBase {

    constructor(args) {
        super(args);

        ModelBase.context.lang = this.context.lang || 'ua';
    }

    checkPermissions() {
        const { ALLOWED_ROLES } = this.constructor;
        if (ALLOWED_ROLES) {
            const { userRole } = this.context;

        }
    }
}

export default Base;
