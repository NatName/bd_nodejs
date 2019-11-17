import Product   from '../../../models/Product';
import Base      from '../../Base';

export default class ProductShow extends Base {
    static validationRules = {
        id : [ 'required', 'positive_integer' ]
    }

    async execute({ id }) {
        const product = await Product.findById(id);

        return {
            data : product
        };
    }
}
