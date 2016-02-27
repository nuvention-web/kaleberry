var React = require('React');

var SearchField = React.createClass({

  getInitialState: function() {
    return { value: ""};
  },

  onChange: function(e) {
    var val = e.target.value;
      this.setState({value: e.target.value});
  },

  render: function(){
    return(
      <div className = "col-md-2">
        <div className="form-group form-group-lg">
          <input type="text" className="form-control" placeholder={this.props.name} onChange={this.onChange} value = {this.state.value}/>
        </div>
      </div>
    );
  }
});

var LandingPage = React.createClass({

  onSubmit: function(e){
    e.preventDefault();
    console.log("clicked");
    var searchParamaters = {
      location: this.refs.location.state.value,
      industry: this.refs.industry.state.value
    };
    //link here to search results page?
  },

  render: function(){
    var titleStyle = {
        fontWeight: "bold"
    };

    var btnStyle = {
      borderColor: "#ED005F"
    };

    return(
      <div className = "container contentContainer"  id = "topContainer">
      <br />
      <br />
      <br />

   	    <div className ="row" id = "topRow">
          <div className = "col-md-5"></div>
   		     <div className = "col-md-6">
   			     <h1 style = {titleStyle}> Locals Love It </h1>
   			      <p className = "lead" > Connecting small businesses with local level influencers </p>
            </div>
        </div>

        <div className ="row">
          <div className = "col-md-5"></div>
          <SearchField name = {"Location"} ref = "location" />
          <SearchField name = {"Industry"} ref = "industry" />
          <br/>
          <br/>
    	 </div>

       <div className = "row">
        <div className = "col-md-3 col-md-offset-6">
          <a className="btn btn-default btn-lg btn-block" style = {btnStyle} href="#" role="button" id = "findInfluencers" onClick = {this.props.onSubmit}>Find me influencers!</a>
        </div>
       </div>
      </div>

    );
  }
});


module.exports = LandingPage;
