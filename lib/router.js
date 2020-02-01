import express      from 'express';
import controllers  from './controllers/site';
import isAuth       from './middlewares/isAuth';

const router = express.Router();

//products
router.get('/products',     controllers.products.list);
router.get('/products/:id', controllers.products.show);

//users
router.post('/signin',              controllers.users.create);
router.delete('/users/:id', isAuth, controllers.users.delete);
router.get('/users/:id',    isAuth, controllers.users.show);

//products
router.get('/menus', controllers.menus.list);

//sessions
router.post('/login',           controllers.sessions.login);
router.post('/logout', isAuth,  controllers.sessions.logout);
router.post('/refreshToken',    controllers.sessions.refresh);

export default router;
