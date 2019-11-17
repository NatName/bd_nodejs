import Base    from '../../Base';
import Product from '../../../models/Product';

export default class ProductUpdate extends Base {
    static validationRules = {
            id   : [ 'required', 'positive_integer' ],
            name : [ 'required', 'string', { 'max_length': 255 } ]
    }

    async execute(data) {
        const product = await Product.findById(data.id);

        await product.update(data);

        return {
            data : product
        };
    }
}
