//var superAgent = require('superagent');
//var config = require('./SuperAgentMockConfig.js');
//var superagentMock = require('superagent-mock')(superAgent, config);
var InfluencersSource = require('../src/sources/InfluencersSource.js');

describe('InfluencersSource', function () {
    describe('getInfluencers', function () {
      it("returns influencers", function(done){
        var testInfluencers = function (influencers) {
          expect(influencers).toEqual(jasmine.any(Array));
        }
        InfluencersSource.getInfluencers()
				.then(testInfluencers).then(done);
      });
    });
});

//superagentMock.unset();
