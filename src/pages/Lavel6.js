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
export default class Lavel6 extends Component<{}>{

	   constructor(props){
		    super(props)
		    this.state = {
		      cekdataparagarf: '', 
		      hasCameraPermission: null,
		      viewBardcode:false,
		      countstate: '',
		      statescan:'',
		      statescannipsearchbaru: '',
		      urlgame:'http://45.77.45.3:8080/konsentrasi/lavel6.html?widthx='+Dimensions.get('window').width+'&heightx='+(Dimensions.get('window').height - 100),
		    }
		  }

componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
        AdMobInterstitial.setTestDeviceID('EMULATOR');
        AdMobInterstitial.setAdUnitID('ca-app-pub-5882049283613214/3064761160'); 
       // AdMobInterstitial.addEventListener('interstitialDidLoad', () => this.ActivityIndicatorLoadingView() ); 
        AdMobInterstitial.addEventListener('interstitialDidFailToLoad',() => Actions.Lavel7() ); 
       // AdMobInterstitial.addEventListener('interstitialDidOpen', () => console.log('interstitialDidOpen') );
        AdMobInterstitial.addEventListener('interstitialDidClose',() =>  Actions.Lavel7() );
        AdMobInterstitial.addEventListener('interstitialWillLeaveApplication',() => Actions.Lavel7() );

  }
    componentWillUnmount() {
        AdMobInterstitial.removeAllListeners();
    }
    async showInterstitial() {
       await AdMobInterstitial.requestAdAsync();
	   await AdMobInterstitial.showAdAsync();
    }

  bannerError() {
    console.log("An error");
    return;
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
									         onMessage={
									          	event => 
									          	   {
									          	       const ce = event.nativeEvent.data;
  													   const ceparse = JSON.parse(ce); 

  													   const cee = JSON.stringify(ceparse);  	
  													   const search = JSON.parse(cee);  													  
  													   if(search.lavel == 'next'){
  													   	    this.showInterstitial();
  													   }													  											
												    }
											  }		
									      />	
					<AdMobBanner 
                			style={{ alignItems: 'center'}}
		                  bannerSize="banner"
		                  adUnitID="ca-app-pub-5882049283613214/8157305740"
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
