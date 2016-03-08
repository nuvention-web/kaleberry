var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var BrowserHistory=require('react-router/lib/browserHistory');

var Index = require('./components/Index.jsx');
var InfluencersResults = require('./components/influencers/InfluencersResults.jsx');
var LandingPage = require('./components/LandingPage.jsx');
var InfluencerProfile = require('./components/influencers/InfluencerProfile.jsx');

var Routes = (
	<Router history = {BrowserHistory}>
		<Route path="/" component={Index} >
			<IndexRoute component={InfluencerProfile} />
			<Route path = "influencerresults" component = {InfluencersResults} />
			<Route path = "influencerprofile" component = {InfluencerProfile} />
		</Route>
	</Router>
);
/*
          <Route path = "/index" component = {Index} />

          <!--Route path = "/influencersresults" component = {InfluencersResults} /! -->
          */
module.exports = Routes;
