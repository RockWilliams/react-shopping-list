import React, { Component } from 'react';
import store from '../Store';


store.dispatch({
	type: 'login',
	payload: {
		description: {
			username: 'pablo',
		}
	}
});

const user = store.getState();



console.log('this', user.user);

function landing() {
    return (
    <h1>This is the landing page {user.user.username}</h1>
    )
}

export default landing;