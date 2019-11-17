import express      from 'express';
import controllers  from './controllers/site';

const router = express.Router();

router.get('/products',     controllers.products.list);
router.get('/products/:id', controllers.products.show);

export default router;
