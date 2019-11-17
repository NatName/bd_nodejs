import { inspect } from 'util';
import Exception from './Exception';
import consoleLogger from './consoleLogger';

async function runService(serviceClass, { context = {}, params = {}, logger = consoleLogger }) {
  console.log("function tunService -ServiceUtils");
  console.log("params ");
  console.log(params);
    function logRequest(type, result, startTime) {
        console.log("function logRequest");
        console.log(result);
        logger(type, {
            service : serviceClass.name,
            runtime : Date.now() - startTime,
            params  : inspect(params, { showHidden: false, depth: null }),
            result
        });
    }
    const startTime = Date.now();

    try {
        const result = await new serviceClass({ context }).run(params);
        console.log("result " + result);
        logRequest('info', JSON.stringify(result), startTime);

        return result;
    } catch (error) {
        const type = error instanceof Exception ? 'info' : 'error';

        logRequest(type, error, startTime);

        throw error;
    }
}


function makeServiceRunner(serviceClass, paramsBuilder, contexBuilder, logger = consoleLogger) {
  console.log("function -- makeServiceRunner ServiceUtils");
    return async function serviceRunner(req, res) {
      console.log("function -- makeServiceRunner ServiceUtils serviceRunner");

        const resultPromise = runService(serviceClass, {
            logger,
            params  : paramsBuilder(req, res),
            context : contexBuilder(req, res)
        });
        return renderPromiseAsJson(req, res, resultPromise, logger);
    };
}


async function renderPromiseAsJson(req, res, promise, logger = consoleLogger) {
    try {
        const data = await promise;

        data.status = 1;

        return res.send(data);
    } catch (error) {
        /* istanbul ignore next */
        if (error instanceof Exception) {
            res.send({
                status : 0,
                error  : error.toHash()
            });
        } else {
            logger(
                'error',
                {
                    'REQUEST_URL'    : req.url,
                    'REQUEST_PARAMS' : req.params,
                    'REQUEST_BODY'   : req.body,
                    'ERROR_STACK'    : error.stack
                }
            );

            res.send({
                status : 0,
                error  : {
                    code    : 'SERVER_ERROR',
                    message : 'Please, contact your system administartor!'
                }
            });
        }
    }
}


export default {
    makeServiceRunner,
    runService,
    renderPromiseAsJson
};
