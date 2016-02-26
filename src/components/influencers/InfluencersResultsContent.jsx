var React = require('react');
var InfluencersResultsRow = require('./InfluencersResultsProfile.jsx');

var InfluencersResultsContent = React.createClass({

  render: function(){

    return(
      <div className = "container">
        <InfluencersResultsRow />
      </div>
    );
  }
});

module.exports = InfluencersResultsContent;
