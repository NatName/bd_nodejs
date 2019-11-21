import express      from 'express';
import controllers  from './controllers/site';
import jwt          from 'express-jwt'

const router = express.Router();

//products
router.get('/products',     controllers.products.list);
router.get('/products/:id', controllers.products.show);

//users
router.post('/users',                                controllers.users.create);
router.delete('/users/:id',jwt({secret: 'NatName'}), controllers.users.delete);
router.get('/users/:id',                          controllers.users.show);

//sessions
router.post('/sessions', controllers.sessions.session);

export default router;
