const routes = require('express').Router();
const servicePoint = require('./apicontainer');
const cacheStore = require("./store");

routes.get('/All', async (req, res) => {
    let result;
    if (!cacheStore['all']) {
        result = await servicePoint.getServicePoint1();
        cacheStore['all'] = result;
    }
    else {
        result = cacheStore['all'];
    }
    res.json(result);
});

routes.post('/search', async (req, res) => {
    let filterResult;
    if (!cacheStore[req.body]) {
        filterResult = await servicePoint.search(req.body);
        cacheStore[req.body] = filterResult;
    }
    else {
        filterResult = cacheStore[req.body]
    }
    res.json(filterResult);
});

module.exports = routes;