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
  Alert
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

	backHome(){
		Actions.Dasbord();
	}
	logout(){
		Actions.Login();
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

	 
 onNavigationStateChange(navState) {
    var event = navState.url.split('#')[1]
    var data = navState.title   
  }



  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
  	const ce = JSON.stringify(data);  	
  	const ceparse = JSON.parse(ce);

	if(this.state.statescan === ''){
		this.setState({   viewBardcode: false, statescan: ceparse.data, countstate:'1'}); 	    
	}else if(this.state.statescannipsearchbaru === ''){
		 this.setState({   viewBardcode: false, statescannipsearchbaru: ceparse.data, countstate:'2' });  
	}else{
		Alert.alert("NUMBER NOT FOUND");    
	    this.setState({  viewBardcode: false, });
	}  
  };

_hendleViewBardcode(){
	this.setState({  viewBardcode: true, });	 
}
componentDidMount() {
    this._requestCameraPermission();
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
				backgroundColor: '#01a8a8'
			}
		}
}
clearState(){
	this.setState({   
		      cekdataparagarf: '', 
		      viewBardcode:false,
		      countstate: '',
		      statescan:'',
		      statescannipsearchbaru: ''
	});
}
	render(){
		let Script1 = `
					    document.getElementById("nipsearch").addEventListener("focus", function() {  
					      var data = {
					          type: "1",
					          message : document.getElementById('nipsearch').value
					      };
					      window.postMessage(JSON.stringify(data),"*");						     
					    });	

					    document.getElementById("nipsearchbaru").addEventListener("focus", function() {  
					      var databaru = {
					          type: "2",
					          message : document.getElementById('nipsearchbaru').value
					      };
					      window.postMessage(JSON.stringify(databaru),"*");						     
					    });	

					    document.getElementById('nipsearch').value = '${this.state.statescan}'; 
					    document.getElementById('nipsearchbaru').value = '${this.state.statescannipsearchbaru}';


					    if('${this.state.countstate}' === '1'){
					    	document.getElementById('nipsearchbaru').focus();
					    }else if('${this.state.countstate}' === '2'){
					    	document.getElementById('nipsearch').focus();
					    }
		    `;
		   
		return(				   
               <View style={this.styleViewParent()}>
                  {
	                  	this.state.viewBardcode === true ?
	                  		this.state.hasCameraPermission === null ?
				          			<Text>Requesting for camera permission</Text> :
				          	this.state.hasCameraPermission === false ?
				            		<Text>Camera permission is not granted</Text> :
				            		<View style={{flex: 1, paddingTop: 15,}}>
				            			<View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center', }}>
				            				<BarCodeScanner  onBarCodeRead={this._handleBarCodeRead}  
				            						style={{ height: 200, width: 200 }}   
				             					/>
				             			</View>
      								</View>
				         : false
			        }
			        {
			        	this.state.viewBardcode === false ?
			                  <WebView
			                                ref={r => this.webview = r}
									        source={{uri: 'http://45.77.45.3:8080/KemTek/pages/tesAndroid.html'}}
									        style={{marginTop: 20 , flex: 1}}
									        javaScriptEnabled={true}
									         domStorageEnabled={true}
									         keyboardDisplayRequiresUserAction={false} //ios
										      autoFocus={true} //android
										      automaticallyAdjustContentInsets={false}
										      allowFileAccessFromFileURLs={true}									        
									         renderLoading={this.ActivityIndicatorLoadingView} 
									         startInLoadingState={true}  
									         injectedJavaScript={Script1}
									         javaScriptEnabledAndroid={true}
									         onNavigationStateChange={ this.onNavigationStateChange.bind(this) }						        
									         onMessage={
									          	event => 
									          	   {
									          	       const ce = event.nativeEvent.data;
  													   const ceparse = JSON.parse(ce);						          	      
													   this._hendleViewBardcode();											
												   }
											  }
									      />
						     : true
						  }
			        <ActionButton buttonColor="rgba(231,76,60,1)">
			          <ActionButton.Item buttonColor='#3498db' title="Home" onPress={() => {this.backHome()}}>
			             <Image style={styles.avatar}  source={require('@images/house.png')}  style={styles.actionButtonIcon}  />
			          </ActionButton.Item>
			          <ActionButton.Item buttonColor='#8e2600' title="Keluar" onPress={() => {this.logout()}}>
			             <Image style={styles.avatar}  source={require('@images/signaling.png')}  style={styles.actionButtonIcon}  />
			          </ActionButton.Item>
			           <ActionButton.Item buttonColor='#8e2600' title="Bardcode" onPress={() => {this.setState({ viewBardcode: false });}}>
			             <Image style={styles.avatar}  source={require('@images/signaling.png')}  style={styles.actionButtonIcon}  />
			          </ActionButton.Item>			         
			        </ActionButton>
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
  textContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  button: {
		  flex: 1,
		    justifyContent: 'flex-end',
		    marginBottom: 36
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
  containerBardcode: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});




// document.querySelector('#ceksukasuka').style.backgroundColor = 'blue'; 
// 							 document.querySelector('#nipsearch').focus();
//https://snack.expo.io/Skxzn6-5b