// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, hashHistory } from 'react-router'



// Include the Components
var Main = require('./Components/Main')
var Search = require('./Components/Children/Search')
var Saved = require('./Components/Children/Saved')

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="/search" component={Search}/>
			<Route path="/saved" component={Saved}/>

{/*			<IndexRoute component={Search}/>*/}
		</Route>
{/*		<Main />*/}
	</Router>
	), document.getElementById('app')
)