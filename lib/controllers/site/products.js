import Show   from '../../services/site/products/Show';
import List   from '../../services/site/products/List';
import chista from '../../chista.js';

export default {
    show : chista.makeServiceRunner(Show, req => ({ id: req.params.id })),
    list : chista.makeServiceRunner(List, req => ({ ...req.query }))
};
