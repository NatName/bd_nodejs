import express      from 'express';
import controllers  from './controllers/admin';

const router = express.Router();

router.delete('/products/:id', controllers.products.delete);
router.post('/products', controllers.products.create);
router.patch('/products/:id', controllers.products.update);

export default router;
