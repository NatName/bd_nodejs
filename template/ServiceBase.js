import LIVR from 'livr';
import Exception from './Exception';

export default class ServiceBase {
    constructor(args) {
        if (!args.context) throw new Error('CONTEXT_REQUIRED');
        this.context = args.context;
    }

    async run(params) {
      console.log("function run ");
      console.log(params);
        if (typeof this.checkPermissions === 'function') {
            await this.checkPermissions();
        }

        const cleanParams = await this.validate(params);
        console.log("----------run----cleanParams");
        console.log(cleanParams);
        return this.execute(cleanParams);
    }

    validate(data) {
        // Feel free to override this method if you need dynamic validation
        console.log("function validate");
        console.log(data);
        const validator = this.constructor.cachedValidator
            || new LIVR.Validator(this.constructor.validationRules).prepare();
            console.log(validator);

        /* eslint-disable-next-line */
        this.constructor.cachedValidator = validator;

        return this._doValidationWithValidator(data, validator);
    }

    doValidation(data, rules) {
        // You can use this in overriden "validate" method
        const validator = new LIVR.Validator(rules).prepare();

        return this._doValidationWithValidator(data, validator);
    }

    async _doValidationWithValidator(data, validator) {
        const result = validator.validate(data);
        console.log("_doValidationWithValidator result\n");
        console.log(result);
        if (!result) {
            const exception = new Exception({
                code   : 'FORMAT_ERROR',
                fields : validator.getErrors()
            });

            throw exception;
        }
        return result;
    }
}
