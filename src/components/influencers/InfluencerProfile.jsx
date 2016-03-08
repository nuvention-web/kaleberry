var React = require('react');

var PricingResult = React.createClass({
  render: function(){
    return(
      <div className = "row">
        <div className = "col-md-10">
          <div className = "input-group">
            <input type="text" className="form-control" id="Price" placeholder={this.props.value} />
            <div className="input-group-addon">{this.props.name}</div>
          </div>
        </div>
      </div>
    );
  }
});

var PricingContainer = React.createClass ({
  getInitialState: function() {
      return {
        price: 0,
        posts: 0,
        impressions: 0,

      };
  },

  addPrice: function(e){
    this.setState({
      price: this.state.price+200,
      posts: ((this.state.price+200)/(this.props.numFollowers*.10)),
      impressions: ((this.state.posts+1)*(this.props.numFollowers*.75))
    });
  },

  decreasePrice: function(e){
    this.setState({
      price: this.state.price-200,
      posts: ((this.state.price-200)/(this.props.numFollowers*.10)),
      impressions: ((this.state.posts-1)*(this.props.numFollowers*.75))
    });

  },

  render: function(){
    var NoPadLeft = {
      paddingLeft: 0,
    }

    return(
      <div>
      <h4> Pricing </h4>
        <div className = "row">
          <div className = "col-md-3 col-md-offset-1">
            <div className = "form-group">
              <br />
              <div className="input-group">
                <div className="input-group-addon">$</div>
                <input type="text" id="price" className="form-control" id="Price" placeholder={this.state.price}/>
              </div>
            </div>
          </div>
          <div className = "col-md-2" style = {NoPadLeft}>
            <div className="btn-group btn-group-vertical">
              <button className="btn btn-info" onClick = {this.addPrice} > + </button>
              <button className="btn btn-info" onClick = {this.decreasePrice}> - </button>
            </div>
          </div>
          <div className = "col-md-6">
            <PricingResult name = {'Posts'} value = {this.state.posts} />
            <PricingResult name = {'Impressions'} value = {this.state.impressions} />
          </div>
      </div>
    </div>
    );
  }
});

var BadgeList = React.createClass({
  render: function(){

    var badgeStyle = {

      background: "#4FBBDB",
      marginRight: 2
    }

    var createBadge = function(tagName){
      return <span style = {badgeStyle} className = "badge">{tagName}</span> ;
    };

    return(
      <div> {this.props.tags.map(createBadge)} </div>
    );
  }

});


var Star = React.createClass({
  getInitialState: function() {
    console.log(this.props.full)
    if (this.props.full == 'true'){
      return {
        class: "glyphicon glyphicon-star"
      }
    } else {
      return {
        class: "glyphicon glyphicon-star-empty"
      }
    }
  },

    render: function(){
      return(
        <span className = {this.state.class} aria-hidden = "true"></span>
      );
    }
});

var Review = React.createClass ({
  getInitialState: function() {
    var StarArray = Array(5).fill('true');

    for(i = 0; i < 5; i++){
      if (this.props.stars < i) {
        StarArray[i] = 'false';
      }
    }

    return {StarArray: StarArray}
  },
  render: function(){
    return(
      <div>
      <div className = "row">
        <div className = "col-md-2 col-md-offset-1">
          <img src = "http://www.rockclimbing.com/images/global/icons/stars-5-5.gif"  className = "img-responsive" />
        </div>
        <div className = "col-md-8">
          {this.props.text}
        </div>
      </div>
      <div className = "row">
        <div className = "col-md-10 col-md-offset-1">
          <hr />
        </div>
      </div>
      </div>

    );

  }

});

var ReviewList = React.createClass({
  render:function(){

    var createReview = function(review){
      return <Review stars ={review.stars} text = {review.text} />;
    };

    return(
      <div>
        <h4>Reviews</h4>
        {this.props.reviews.map(createReview)}
      </div>
    );
  }
});

var ProfileSidebar = React.createClass({
  render: function(){
    var tempReviews = [
      {
        stars: 5,
        text: "Lisa is friendly and personable.  Delivered on time!  I was impressed. "
      },
      {
        stars: 4,
        text: "This influencer rocks! They're so super cool and I would work with them again!"
      },

      {stars: 5,
      text: "This influencer is the best!" }
    ];

    var colStyle ={
      marginTop: 10
    };

    return(
      <div className = "col-md-6" style = {colStyle}>
        <div className="panel panel-default" >
          <div className="panel-body">
            <div className = "row">
              <div className = "col-md-10"><h3> {this.props.name} </h3></div>
              <div className = "col-md-2"><SocialMedIcon numFollowers = {2000}/></div>
            </div>
            <hr />
            <div> {this.props.bio} </div>
            <br />
            <BadgeList tags = {this.props.tags}/>
            <hr />
            <PricingContainer numFollowers = {this.props.numFollowers} />
            <hr />
            <ReviewList reviews = {tempReviews}/>
          </div>
        </div>
      </div>
    );
  }
});

var SocialMedIcon = React.createClass({
  render: function(){
    return (
      <div className = "col-md-2">
        <div className = "row">
          <img height="30" width="30" src = "https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" className = "img-responsive" />
        </div>
        <div className = "row">
          {this.props.numFollowers}
        </div>
      </div>
    );
  }
});

var Profile = React.createClass({
render: function(){

  var contentStyle = {

    marginTop: 70
  };

  var colStyle ={
    marginTop: 10
  };

  var imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  };


  return (
    <div style = {contentStyle} className = "container contentContainer">
      <div className = "row">
        <ProfileSidebar name = "Lisa" numFollowers = {2000} bio = "MBA Student // Foodie // Musician // Traveler // Fashionista" tags = {["Quirky", "Funny", "Bubbly"]}/>
        <div className = "col-md-6" style = {colStyle}>
          <div className="panel panel-default" >
            <div className="panel-body">
              <div className = "row">
                <img style = {imageStyle} src="https://pbs.twimg.com/profile_images/612817346814541824/VcD4MmIk.png" className="img-responsive" />

              </div>

              <div className = "row">
                <div className = "col-md-2 col-md-offset-3" style = {colStyle}>
                  <input className="btn btn-info btn-lg" type="submit" value="Message Influencer!" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


});

module.exports = Profile;
