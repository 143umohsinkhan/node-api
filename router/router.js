const routes = require('express').Router();
const servicePoint = require('./apicontainer');

routes.get('/All', async (req, res) => {
    let result = await servicePoint.getServicePoint1();
    res.json(result);
});

routes.post('/search', async (req, res) => {
    let filterResult = await servicePoint.search(req.body);
    res.json(filterResult);
});

module.exports = routes;