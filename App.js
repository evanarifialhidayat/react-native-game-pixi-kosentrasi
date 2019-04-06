import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routers from '@routers/Routers';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import globalReducerSatu from '@pages/TypesReducer';

const store = createStore(globalReducerSatu,applyMiddleware(thunk));
export default class App extends React.Component {
	 constructor(props){
	 	super(props)
   }
  render() {
    return (
    	<Provider store={store}>
        	<Routers />
        </Provider>
    );
  }
}

// https://www.bootdey.com/react-native-snippet/9/Login-form-ui-example
// https://www.npmjs.com/package/react-native-maps
// npm install react-native-picker-select
// npm install --save react-native-elements

//https://github.com/hectahertz/react-native-typography      font color

//https://facebook.github.io/react-native/docs/layout-props#flexbasis  layout

