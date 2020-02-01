import List   from '../../services/site/menus/List';
import chista from '../../chista.js';

export default {
    list : chista.makeServiceRunner(List, req => ({ ...req.query }))
};
