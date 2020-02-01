import express      from 'express';
import controllers  from './controllers/admin';

const router = express.Router();

//products
router.delete('/products/:id', controllers.products.delete);
router.post('/products', controllers.products.create);
router.patch('/products/:id', controllers.products.update);

//menus
router.delete('/menus/:id', controllers.menus.delete);
router.post('/menus', controllers.menus.create);
router.patch('/menus/:id', controllers.menus.update);
router.get('/menus', controllers.menus.list);
router.get('/menus/:id', controllers.menus.show);

//status
router.patch('/menus/status/:id', controllers.menus.status);

export default router;
