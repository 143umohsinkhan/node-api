const axios = require('axios');
const dataComposer = require('./datacomposer');


exports.getServicePoint1 = async function fetchdata() {
    return await axios.all([
        axios.get(`${process.env.BASE_URL}posts`),
        axios.get(`${process.env.BASE_URL}comments`)
    ]).then(axios.spread(function (posts, comments) {
        return dataComposer.getResponse(posts.data, comments.data)
    })).catch((error) => console.log(error));
}

exports.search = function searchComments(query) {
    return axios.get(`${process.env.BASE_URL}comments`).then(response => {
        return dataComposer.getSearchResult(query, response.data);
    }).catch((error) => { console.log(error) })
}
