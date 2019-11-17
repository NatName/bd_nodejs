import Product   from '../../../models/Product';
import Base      from '../../Base';

export default class ProductCreate extends Base {
    static validationRules = {
        name   : [ 'required', 'string', { 'max_length': 255 } ]
    }

    async execute(data) {
        const product = await Product.create(data);

        return {
            data : product
        };
    }
}
