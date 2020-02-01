import Create       from '../../services/admin/menus/Create';
import Delete       from '../../services/admin/menus/Delete';
import Update       from '../../services/admin/menus/Update';
import UpdateStatus from '../../services/admin/menus/Status/Update';
import List         from '../../services/admin/menus/List';
import Show         from '../../services/admin/menus/Show';
import chista       from '../../chista.js';

export default {
    create : chista.makeServiceRunner(Create,       req => ({ ...req.body })),
    update : chista.makeServiceRunner(Update,       req => ({ ...req.body, id: req.params.id })),
    status : chista.makeServiceRunner(UpdateStatus, req => ({ ...req.body, id: req.params.id })),
    delete : chista.makeServiceRunner(Delete,       req => ({ id : req.params.id })),
    list   : chista.makeServiceRunner(List,         req => ({ ...req.query })),
    show   : chista.makeServiceRunner(Show,         req => ({ id: req.params.id }))
};
