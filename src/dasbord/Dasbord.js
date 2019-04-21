import React, { Component } from 'react';
import {  StyleSheet,Text,  View,Image , TouchableOpacity,Alert,BackHandler 
	,ImageBackground,Dimensions } from 'react-native';
import Grid from 'react-native-grid-component'; 

import { Actions } from 'react-native-router-flux';
import Expo, {  AdMobBanner ,
 Constants ,AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';
const items = [
  { thumbnail: {  uri : require('@images/circle1.png'   ) , mulai: 'Lavel 1'   ,warna:'#199b01',buuton:'Lavel 1'} },
  { thumbnail: {  uri : require('@images/circle2.png'   ) , mulai: 'Lavel 2'   ,warna:'#299b02',buuton:'Lavel 2'} },
  { thumbnail: {  uri : require('@images/circle3.png'   ) , mulai: 'Lavel 3'   ,warna:'#399b03',buuton:'Lavel 3'} },
  { thumbnail: {  uri : require('@images/circle4.png'   ) , mulai: 'Lavel 4'   ,warna:'#499b04',buuton:'Lavel 4'}},
  { thumbnail: {  uri : require('@images/circle5.png'   ) , mulai: 'Lavel 5'   ,warna:'#599b05',buuton:'Lavel 5'}},
  { thumbnail: {  uri : require('@images/circle6.png'   ) , mulai: 'Lavel 6'   ,warna:'#699b06',buuton:'Lavel 6'}},
  { thumbnail: {  uri : require('@images/circle7.png'   ) , mulai: 'Lavel 7'   ,warna:'#799b07',buuton:'Lavel 7'}},
  { thumbnail: {  uri : require('@images/circle8.png'   ) , mulai: 'Lavel 8'   ,warna:'#899b08',buuton:'Lavel 8'}} ,
  { thumbnail: {  uri : require('@images/circle9.png'   ) , mulai: 'Lavel 9'   ,warna:'#799b09',buuton:'Lavel 9'}},
  { thumbnail: {  uri : require('@images/circle10.png'   ) , mulai: 'Lavel 10' ,warna:'#799b10',buuton:'Lavel 10'}}
];



export default class Dasbord extends Component { 
   state = {
    modalVisible: false,
  };
    constructor(props) {
    super(props); 
    }

 componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT); 
   BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) 
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) 
  }

  backAndroid () {
    if (Actions.state.index === 0) {
      return false;
    }
   Actions.Dasbord();
    return true; 
  }

  _renderItem = (data, i) =>  
    { 
         return(  
           <TouchableOpacity style={styles.item} key={i}   onPress={this._eventLavel.bind(this, data.thumbnail.mulai)}>
                        <View style={{flex:4,justifyContent: 'center',  alignItems: 'center',}}>
                            <Image source = { data.thumbnail.uri } style = { styles.menuImage }/>                                                   
						            </View>
                         <View style={{flex:1,backgroundColor: data.thumbnail.warna}}>
                                <Text style={styles.footButton} >{ data.thumbnail.buuton }</Text>
                         </View>    
            </TouchableOpacity>
          );
   }
 
 async _eventLavel(item){
      if(item === 'Lavel 1'){
         Actions.Lavel1(); 
      } 
      if(item === 'Lavel 2'){
         Actions.Lavel2(); 
      } 
      if(item === 'Lavel 3'){
         Actions.Lavel3(); 
      } 
      if(item === 'Lavel 4'){
        Actions.Lavel4(); 
      } 
      if(item === 'Lavel 5'){
        Actions.Lavel5(); 
      } 
      if(item === 'Lavel 6'){
        Actions.Lavel6(); 
      } 
      if(item === 'Lavel 7'){
         Actions.Lavel7(); 
      } 
      if(item === 'Lavel 8'){
         Actions.Lavel8(); 
      } 
      if(item === 'Lavel 9'){
         Actions.Lavel9(); 
      } 
      if(item === 'Lavel 10'){
         Actions.Lavel10(); 
      } 
      
  }
 
 

  render() {
    return (
    <ImageBackground   style={styles.container} >   
            <View style={styles.headerContent}>             
                    <TouchableOpacity onPress={this.backAndroid}> 
                      <Image style={styles.avatar}  source={require('@images/logo.png')}  />
                      </TouchableOpacity>
                    <Text style={styles.name}>
                      Konsentrasi
                    </Text>                
            </View>   
    		       
        <View style={styles.signupInput}>
              <Grid
                style={styles.list}
                renderItem={this._renderItem}               
                data={items}
                itemsPerRow={5}
              />
        </View>
        <AdMobBanner 
                			style={{ alignItems: 'center',marginTop: 20 }}
		                  bannerSize="banner"
		                  adUnitID="ca-app-pub-5882049283613214/8700231224"
		                  testDeviceID="EMULATOR"
		                  onDidFailToReceiveAdWithError={this.bannerError} />

         <AdMobBanner 
                			style={{ alignItems: 'center'}}
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

     </ImageBackground>
    );
  }
}
const wi = Dimensions.get('window').width / 3;
const hi = Dimensions.get('window').height / 6;
const styles = StyleSheet.create({
  headerContent:{
    padding:10,
    alignItems: 'center',
    backgroundColor: "#01a8a8",
  },
  avatar: {
    width: wi,
    height: hi,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#ffffff",
    marginBottom:5,
  },
  name:{
    fontSize:22,
    color:"#ffffff",
    fontWeight:'600',
  },
  container: {
     flex: 1,
    backgroundColor: '#E6E6E6',
    
  },
  signupInput: {
     flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row'
  },
  item: {
    flex: 1,
    height: 95,
    width:95,
    margin: 1,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    justifyContent: 'center',
  },
  list: {
      flex: 1,
      backgroundColor:'rgba(25,25,25,0.3)',
     
  },
  blurImage:
    {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        resizeMode: 'cover'
    }, 
    menuImage:
    {
        top: 0,
        bottom: 0, 
        left: 0,
        right: 0,
        width: 50, 
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
   footButton: {
    textAlign: 'center', 
    fontWeight: 'bold',
    marginTop: 0,
   alignItems: 'center',
     justifyContent: 'center',
     color : 'white',
  }
});
