import React, { Component } from 'react';
import {Actions  } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View ,
  TouchableOpacity,
  WebView,
  Image,
  ActivityIndicator,
  Alert,
  ScrollView
} from 'react-native';

import AnimateLoadingButton from 'react-native-animate-loading-button';
import ActionButton from 'react-native-action-button';
import { Constants, BarCodeScanner, Permissions } from 'expo';
export default class SKP extends Component<{}>{

	   constructor(props){
		    super(props)
		    this.state = {
		      cekdataparagarf: '', 
		      hasCameraPermission: null,
		      viewBardcode:false,
		      countstate: '',
		      statescan:'',
		      statescannipsearchbaru: ''
		    }
		  }

componentDidMount() {
  //  Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
  }

	backHome(){
		Actions.Dasbord();
	}

	ActivityIndicatorLoadingView() {
	    return (
	      <ActivityIndicator
	        color="#009688"
	        size="large"
	        style={styles.ActivityIndicatorStyle}
	      />
	    );
	  }

	  			        //<ActionButton buttonColor="rgba(231,76,60,1)">
//			          <ActionButton.Item buttonColor='#3498db' title="Home" onPress={() => {this.backHome()}}>
//			             <Image style={styles.avatar}  source={require('@images/house.png')}  style={styles.actionButtonIcon}  />
//			          </ActionButton.Item>
//			        </ActionButton>

styleViewParent = function(options) {	
		if(this.state.viewBardcode === true){
			return{
				flex:1, 
				backgroundColor: 'rgba(52, 52, 52, 0.8)'
			}
		}else{
			return{
				flex:1, 
				backgroundColor: '#01a8a8'
			}
		}
}




	render(){	   
		return(			
				   
               <View style={this.styleViewParent()}>
                        <WebView
			                                ref={r => this.webview = r}
									        source={{uri: 'http://45.77.45.3:8080/konsentrasi/'}}
									        style={{marginTop: 20 , flex: 1}}
									        javaScriptEnabled={true}
									         domStorageEnabled={true}
									         keyboardDisplayRequiresUserAction={false} //ios
										      autoFocus={true} //android
										      automaticallyAdjustContentInsets={false}
										      allowFileAccessFromFileURLs={true}									        
									         renderLoading={this.ActivityIndicatorLoadingView} 
									         startInLoadingState={true}  
									         javaScriptEnabledAndroid={true}	
									      />
						  

			    </View>
			)
	}
}

const styles = StyleSheet.create({
container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#efeff4",
  },
actionButtonIcon: {
    fontSize: 20,
    height: 40,
    width: 40,
    color: 'white',
  },
  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
});




// document.querySelector('#ceksukasuka').style.backgroundColor = 'blue'; 
// 							 document.querySelector('#nipsearch').focus();
//https://snack.expo.io/Skxzn6-5b