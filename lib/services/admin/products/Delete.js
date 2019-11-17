import Base           from '../../Base';
import Product        from '../../../models/Product';

export default class ProductDelete extends Base {
    static validationRules = {
        id : [ 'required', 'positive_integer' ]
    }

    async execute({ id }) {
        const product = await Product.findById(id);

        await product.destroy();

        return {
            id
        };
    }
}
