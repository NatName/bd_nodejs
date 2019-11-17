import Create from '../../services/admin/products/Create';
import Delete from '../../services/admin/products/Delete';
import Update from '../../services/admin/products/Update';
import chista from '../../chista.js';

export default {
    create : chista.makeServiceRunner(Create, req => ({ ...req.body })),
    update : chista.makeServiceRunner(Update, req => ({ ...req.body, id: req.params.id })),
    delete : chista.makeServiceRunner(Delete, req => ({ id : req.params.id }))
};
