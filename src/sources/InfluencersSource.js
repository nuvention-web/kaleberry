var INFLUENCERS_ENDPOINT = require('../constants/api_endpoints.js').INFLUENCERS;
var request = require('superagent');


var InfluencersSource = {
  getInfluencers: function () {
    return new Promise(function (resolve, reject) {
      request
        .get(INFLUENCERS_ENDPOINT)
        .set('Accept', 'application/json')
        .end(function (err, res) {
          err ? reject(err) : resolve(res.body.influencers);
        });
    });
  },
};

module.exports = InfluencersSource;
