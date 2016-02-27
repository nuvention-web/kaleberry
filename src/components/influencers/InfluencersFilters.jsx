var React = require('react');

var DropDownFormGroup = require('../common/DropDownFormGroup.jsx');
var ButtonGroup = require('../common/ButtonGroup.jsx');

var InfluencersFilters = React.createClass({
  render: function(){
    return (

        <div className = "row">
            <ButtonGroup title = {"Type of Promotion "} items = {["Review", "Photo & Comment", "Sale for Fans"]}/>
            <hr />
            <ButtonGroup title = {"Frequency "} itmes ={["One-Time Shoutout", "On-going relationship"]} />
            <hr />
            <ButtonGroup title = {"Personality "} items = {["Quirky", "Witty", "Bubbly", "Sassy", "Conservative"]} />
            <hr />
            <DropDownFormGroup title = {"Budget"} items = {["$0-$10", "$10-$30", "$30-$50", "$50-$75", "$75-$100", "$100+"]} />
        </div>
    );
  }
});


module.exports = InfluencersFilters;
