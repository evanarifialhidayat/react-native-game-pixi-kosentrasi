import React, { Component } from 'react';
import {  StyleSheet,Text,  View,Image , TouchableOpacity,Alert,BackHandler ,ImageBackground } from 'react-native';
import Grid from 'react-native-grid-component'; 
import Expo, {  AdMobBanner , Constants } from 'expo';
import { Actions } from 'react-native-router-flux';
import Logo from '@pages/Logo';

const items = [
  { thumbnail: {  uri : require('@images/notes.png'   ) , mulai: 'Spk' ,warna:'#499b86',buuton:'Spk'} },
  { thumbnail: {  uri : require('@images/cutter.png'    ) , mulai: 'Cutter',warna:'#ce3968',buuton:'Cutter'} },
  { thumbnail: {  uri : require('@images/pencil.png'      ) , mulai: 'Pecil',warna:'#a0833b',buuton:'Pecil'} },
  { thumbnail: {  uri : require('@images/bar-chart.png' ) , mulai: 'Chart' ,warna:'#fe3161',buuton:'Chart'}},
  { thumbnail: {  uri : require('@images/signaling.png' ) , mulai: 'Keluar' ,warna:'#ac888e',buuton:'Keluar'}}
 
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
      if(item === 'Spk'){
         Actions.SKP(); 
      }   
      
  }
 
 

  render() {
    return (
    <ImageBackground   style={styles.container} >   
            <View style={styles.headerContent}>             
                    <TouchableOpacity onPress={this.backAndroid}> 
                      <Image style={styles.avatar}  source={require('@images/kemenlogo.png')}  />
                      </TouchableOpacity>
                    <Text style={styles.name}>
                      Kementrian Desa
                    </Text>                
            </View>   
    		       
        <View style={styles.signupInput}>
              <Grid
                style={styles.list}
                renderItem={this._renderItem}               
                data={items}
                itemsPerRow={4}
              />
        </View>
     </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerContent:{
    padding:30,
    alignItems: 'center',
    backgroundColor: "#01a8a8",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#ffffff",
    marginBottom:10,
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
