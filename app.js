import express      from 'express';
import router      from './lib/router.js';
import adminRouter from './lib/adminRouter.js';
import bodyParser  from 'body-parser';
import initModels  from './lib/models/initModels';
import config      from './config/config.js';

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json())

initModels(config[process.env.MODE] || config.development);
app.use('/site-api/v1', router);
app.use('/admin-api/v1', adminRouter);

if (!process.env.LAMBDA) {
    app.listen(3000, () => {
        console.log(`APP STARTING AT PORT 3000`);
    });
}
