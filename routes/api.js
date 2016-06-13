'use strict';

const access = require('../middleware/access');
const api = {
    auth     : require('../api/v1/authorize'),
    balance  : require('../api/v1/balance'),
    contracts: require('../api/v1/contracts'),
    profile  : require('../api/v1/profile'),
    periods  : require('../api/v1/periods'),
    services : require('../api/v1/services'),
    transits : require('../api/v1/transits'),
    news     : require('../api/v1/news')
};

module.exports = function (app) {

    app.use(access);

    app.use('/api/v1/account/authorize', api.auth);
    app.use('/api/v1/account/balance', api.balance);
    app.use('/api/v1/account/contracts', api.contracts);
    app.use('/api/v1/account/profile', api.profile);
    app.use('/api/v1/account/periods', api.periods);
    app.use('/api/v1/account/services', api.services);
    app.use('/api/v1/transits/', api.transits);
    app.use('/api/v1/news/', api.news);

};