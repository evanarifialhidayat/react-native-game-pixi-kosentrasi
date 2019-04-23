import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routers from '@routers/Routers';
//import { createStore , applyMiddleware } from 'redux';
//import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
//import globalReducerSatu from '@pages/TypesReducer';

//const store = createStore(globalReducerSatu,applyMiddleware(thunk));
export default class App extends React.Component {
	 constructor(props){
	 	super(props)
   }
  render() {
    return (
  //  	<Provider store={store}>
        	<Routers />
  //      </Provider>
    );
  }
}

 //"@expo/vector-icons": "^9.0.0",
 //   "expo": "^27.1.1",
 //   "expo-asset": "^2.0.0",
 //   "expo-constants": "^2.0.1",
 //   "expo-core": "^2.0.0",
 //   "expo-file-system": "^2.0.0",
 //   "expo-font": "^2.0.0",
 //   "expo-react-native-adapter": "^2.0.0",
 //   "firebase": "^5.8.3",
 //   "react": "^16.3.1",
 //   "react-native": "^0.55.4",
 //   "react-native-action-button": "^2.8.5",
 //   "react-native-animate-loading-button": "^1.0.3",
 //   "react-native-enhance-webview": "0.0.2",
 //   "react-native-grid-component": "^1.1.0",
 //   "react-native-picker-select": "^5.2.4",
 //   "react-native-router-flux": "^4.0.1",
 //   "react-native-vector-icons": "^6.2.0",
 //   "react-redux": "^5.0.7",
 //   "react-thunk": "^1.0.0",
//    "redux-thunk": "^2.3.0"


// https://www.bootdey.com/react-native-snippet/9/Login-form-ui-example
// https://www.npmjs.com/package/react-native-maps
// npm install react-native-picker-select
// npm install --save react-native-elements
//https://github.com/hectahertz/react-native-typography      font color
//https://facebook.github.io/react-native/docs/layout-props#flexbasis  layout
//http://www.online-image-editor.com/
//https://www.flaticon.com/free-icon/circle_312246

