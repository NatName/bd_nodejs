import Base    from '../../Base';
import Product from '../../../models/Product';

export default class MenuList extends Base {
    static validationRules = {
        limit  : [ 'positive_integer' ],
        order  : [ 'string', 'trim', 'to_uc', { 'one_of': [ 'ASC', 'DESC' ] } ],
        offset : [ 'positive_integer' ]
    };

    async execute({ limit = 20, order = 'DESC', offset = 0 }) {
        const products = await Product.findAll();

        return { data: products };
    }
}
