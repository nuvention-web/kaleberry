var React = require('react');

var BadgeList = React.createClass({
  render: function(){
    return(
      this.props.tags.map(function(name){
        return <span className = "badge">{name}</span>
      })
    );
  }
});

var InfluencersResultsProfile = React.createClass({
  render: function(){

    var panelStyle = {
      padding: 0,
    }

    var nameStyle = {
      textDecoration: "none",
      textAlign: "center"
    }

    return(
      <div className = "col-md-3">
        <div className="panel panel-default">
          <div className="panel-body" style = {panelStyle}>
            <a href = "profile.html"><img src={this.props.imageLink} className="img-responsive"/></a>
          </div>
          <div className="panel-footer">
            <a href = "profile.html" style = {nameStyle}><h3>{this.props.name}</h3></a>
            <ul>
              <li><a href = "https://twitter.com/DansReview">195k Twitter</a></li>
            </ul>

          </div>
        </div>
      </div>
    );
  }
});

var InfluencersResultsRow = React.createClass({
  getInitialState: function(){
    var influencerList = {};
    return { influencers: influencerList };
  },

  render: function(){

    var createInfluencerProfile = function(infName, link){
      return <InfluencersResultsProfile name = {infName} imageLink = {link} />;
    };

    return (
      <div className = "row">
          <InfluencersResultsProfile name = {"Spike"} imageLink = {"#"}/>
      </div>
    );
  }

});

module.exports = InfluencersResultsRow;
