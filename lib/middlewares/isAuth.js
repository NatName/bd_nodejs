import jwt     from 'jsonwebtoken'
import { data }  from '../../config/config'

export default function (req, res, next) {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    if (!token)
        res.send({
            status : 0,
            error  : {
                code : 'ACCESS_DENIED'
            }
        });

    try {
      //if can verify the token, set req.user and pass to next middleware
      jwt.verify(token, data.secret);
      return next();
    } catch (err) {
        res.send({
            status : 0,
            error  : {
                code : 'INVALID_TOKEN'
            }
        });
    }
}
