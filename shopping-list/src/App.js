import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Route, Switch} from 'react-router-dom';
import landing from './pages/landing'
import register from './pages/register'
import store from './Store';

console.log(store);

store.dispatch({
	type: 'login',
	payload: {
		description: {
			username: 'pablo',
		}
	}
});

console.log(store.getState());

function App() {
	return(
		<Switch>
			<Route exact path='/' component={landing}/>
			<Route path='/register' component={register}/>
		</Switch>
	);
}

export default App;
