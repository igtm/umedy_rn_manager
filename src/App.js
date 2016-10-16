import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

export default class App extends Component {
    componentWillMount(){
/*
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyBiqpNHVCOv2rCwoGstgBZDEVlpy7YC--s",
            authDomain: "manager-ad5b7.firebaseapp.com",
            databaseURL: "https://manager-ad5b7.firebaseio.com",
            storageBucket: "manager-ad5b7.appspot.com",
            messagingSenderId: "388122284782"
        };
        firebase.initializeApp(config);
*/

/*        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', 'http://google.com', true);
        httpRequest.onreadystatechange = function() {
            console.log('onreadystatechange');
            console.log(httpRequest.readyState);
            console.log(httpRequest.status);
            console.log(httpRequest.responseText);
            if(httpRequest.readyState == 4) {
                if(httpRequest.status == 200) {
                    console.log('200!!!!');
                }
            }
        };
        httpRequest.send(null);*/
    }
    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); // storeEnhancer
        return (
          <Provider store={store}>
            <Router />
          </Provider>
        );
    }
}