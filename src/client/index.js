// import App from './components/App';
import {Link, Router} from "@reach/router";
import React from 'react';
import {render} from 'react-dom';


const App = ({children}) => (
	<div>
		<nav>
			<Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
		</nav>
		<Router>
			<Home path="/" />
			<Dashboard path="dashboard" />
		</Router>
	</div>
);

const Home = () => (
	<div>
		<h2>Welcome</h2>
	</div>
);

const Dashboard = () => (
	<div>
		<h2>Dashboard</h2>
	</div>
);

render(<App />, document.getElementById("root"));