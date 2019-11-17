import path   from 'path';
import Chista from '../template/Chista.js';
import logger from './logger.js';

/* istanbul ignore next */
function getLogger() {
    if (process.env.DEV || process.env.LAMBDA) return; // UGLY.
    console.log("function --getLogger chista.js");
    if (process.env.MODE === 'test') {
        logger.init({
            directory : path.join(__dirname, '../logs'),
            name      : 'modern-node-be'
        });
        console.log("\n" + logger[type](data));
        return (type, data) => logger[type](data);
    }
}

export default new Chista({
    defaultLogger : getLogger()
});
