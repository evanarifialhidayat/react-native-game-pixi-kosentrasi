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
  ScrollView,
  Dimensions
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Expo, {  AdMobBanner ,
 Constants ,AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';
export default class SKP extends Component<{}>{

	   constructor(props){
		    super(props)
		    this.state = {
		      cekdataparagarf: '', 
		      hasCameraPermission: null,
		      viewBardcode:false,
		      countstate: '',
		      statescan:'',
		      statescannipsearchbaru: '',
		      urlgame:'http://45.77.45.3:8080/konsentrasi/index.html?widthx='+Dimensions.get('window').width+'&heightx='+(Dimensions.get('window').height - 100),
		    }
		  }

componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
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
				backgroundColor: '#56554e'
			}
		}
}




	render(){	 
		return(							   
               <View style={this.styleViewParent()}>
                <AdMobBanner 
                			style={{ alignItems: 'center',marginTop: 20 , width:Dimensions.get('window').width}}
		                  bannerSize="banner"
		                  adUnitID="ca-app-pub-5882049283613214/8700231224"
		                  testDeviceID="EMULATOR"
		                  onDidFailToReceiveAdWithError={this.bannerError} />
                        <WebView
			                                ref={r => this.webview = r}
									        source={{uri: this.state.urlgame}}
									        style={{flex: 1}}
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

					 <AdMobBanner 
                			style={{ alignItems: 'center',width:Dimensions.get('window').width}}
		                  bannerSize="banner"
		                  adUnitID="ca-app-pub-5882049283613214/8157305740"
		                  testDeviceID="EMULATOR"
		                  onDidFailToReceiveAdWithError={this.bannerError} />	

		                   <AdMobBanner 
                			style={{ alignItems: 'center'}}
		                  bannerSize="banner"
		                  adUnitID="ca-app-pub-5882049283613214/4242999513"
		                  testDeviceID="EMULATOR"
		                  onDidFailToReceiveAdWithError={this.bannerError} />	

		                  <AdMobBanner 
                			style={{ alignItems: 'center'}}
		                  bannerSize="banner"
		                  adUnitID="ca-app-pub-5882049283613214/3668284445"
		                  testDeviceID="EMULATOR"
		                  onDidFailToReceiveAdWithError={this.bannerError} />

		                  <AdMobBanner 
                			style={{ alignItems: 'center'}}
		                  bannerSize="banner"
		                  adUnitID="ca-app-pub-5882049283613214/9168023137"
		                  testDeviceID="EMULATOR"
		                  onDidFailToReceiveAdWithError={this.bannerError} />	

		           <ActionButton buttonColor="rgba(231,76,60,1)">
			          <ActionButton.Item buttonColor='#3498db' title="Home" onPress={() => {this.backHome()}}>
			             <Image style={styles.avatar}  source={require('@images/house.png')}  style={styles.actionButtonIcon}  />
			          </ActionButton.Item>			         			         
			        </ActionButton>


			    </View>			)
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