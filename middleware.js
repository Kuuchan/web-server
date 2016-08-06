/**
 * Created by Rodman on 8/6/2016.
 */

var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('private route hit!');
        next();
    },
    logger: function (req, res, next) {
        console.log('Request: ' + req.method + ' ' + req.originalUrl +  ' ' + new Date().toString());
        next();
    }
};

module.exports = middleware;