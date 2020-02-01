import express      from 'express';
import router       from './lib/router.js';
import adminRouter  from './lib/adminRouter.js';
import bodyParser   from 'body-parser';
import initModels   from './lib/models/initModels';
import config       from './config/config.json';
import cookieParser from 'cookie-parser';
import cors         from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

initModels(config[process.env.MODE] || config.development);

app.use('/site-api/v1', router);
app.use('/admin-api/v1', adminRouter);

if (!process.env.LAMBDA && process.env.MODE !== 'test') {
    app.listen(3001, () => {
        console.log(`APP STARTING AT PORT 3001`);
    });
}
