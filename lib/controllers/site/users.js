import Show   from '../../services/site/users/Show';
import Create from '../../services/site/users/Create';
import Delete from '../../services/site/users/Delete';
import Update from '../../services/site/users/Update';
import chista from '../../chista.js';

export default {
    create : chista.makeServiceRunner(Create, req => ({ ...req.body }),      req => ({ ...req.cookies })),
    show   : chista.makeServiceRunner(Show, req => ({ id: req.params.id }),      req => ({ ...req.cookies })),
    /*update : chista.makeServiceRunner(Update, req => ({ ...req.body, id: req.params.id }),      req => ({ ...req.cookies })),*/
    delete : chista.makeServiceRunner(Delete, req => ({ id : req.params.id }),      req => ({ ...req.cookies }))
};
