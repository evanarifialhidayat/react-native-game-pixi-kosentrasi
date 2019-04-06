import React, { Component }  from 'react';
import { StyleSheet, Text, View ,Image ,TextInput,TouchableOpacity  ,Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AnimateLoadingButton from 'react-native-animate-loading-button';
import { getDataLogin , cekData} from '@pages/TypesAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { Permissions, Notifications } from 'expo';

  const config = {
		    apiKey: "AIzaSyBEZHRacMyXCQ0i64f9sGVmhIUib1aalK0",
		    authDomain: "rddk-2444f.firebaseapp.com",
		    databaseURL: "https://rddk-2444f.firebaseio.com",
		    projectId: "rddk-2444f",
		    storageBucket: "rddk-2444f.appspot.com",
		    messagingSenderId: "536153226232"
		  };

class Form extends Component<{}> {
   constructor(props){
    super(props)
    this.state = {
      username: '', 
      password: ''
    }
  }

componentWillMount(){
 	//  this.registerForPushNotificationsAsync();
}
  componentDidMount(){   
  	 // this.props.getDataLogin();
  	 //  this.props.cekData();    	 
  }
 
 async  registerForPushNotificationsAsync() {
		  const { status: existingStatus } = await Permissions.getAsync(
		    Permissions.NOTIFICATIONS
		  );
		  let finalStatus = existingStatus;
		  if (existingStatus !== 'granted') {
		    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
		    finalStatus = status;
		  }
		  if (finalStatus !== 'granted') {
		    return;
		  }

		  let token = await Notifications.getExpoPushTokenAsync();
		  console.log(token);        
		//    firebase.initializeApp(config);
		//    var key = firebase.database().ref('/notifikasi').push().key
        //    firebase.database().ref('/notifikasi').child(key).set({ 
        //    	id: token ,
        //    	name: 'Evan'
        //    });
           let tocall = 'ExponentPushToken[AtAqKCNHBpV1V7jl4n97bB]';
          // Alert.alert(token);
           return fetch('[https://exp.host/--/api/v2/push/send]', {
			    body: JSON.stringify({
			      to: token,
			      title: 'Evan Ganteng',
			      body: 'Bakwan Nya mana',
			     // data: { message: `${title} - ${body}` },
			    }),
			    headers: {
			      'Content-Type': 'application/json',
			    },
			    method: 'POST',
			  });
  }

clearDataLogin(){
	this.username.clear();
	this.password.clear();
	this.setState({
	    username: '',
	    password:''
	})
}
 login(){  
 	 this.props.getDataLogin(this.state.username,this.state.password);
 	 this.loadingButton.showLoading(true);
 	   setTimeout(() => {
	 	   	 if(this.props.randomPeople.loginsukses === '["Sukses"]'){
	 	   	 		 this.loadingButton.showLoading(false);
	 	   	 		  this.clearDataLogin();
		     	    //  Actions.Dasbord();
	 	   	 }else{
	 	   	 		 this.loadingButton.showLoading(false);
	 	   	 		 this.clearDataLogin();
	 	   	 }	       
	      }, 2000);
 	  	//console.log('Hi from React Native c'+this.props.randomPeople.tes);
 	  	 Actions.Dasbord();
  }
  render() {
    return (
      <View style={styles.container}> 
      <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        onChangeText={username => this.setState({username})}
        placeholder="Email"
        placeholderTextColor = "#ffffff"
        keyboardType="email-address"        
        onSubmitEditing={() => this.password.focus()}
        ref={(input) => this.username = input }
      />
      <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Password"
        onChangeText={password => this.setState({password})}
        secureTextEntry={true} 
        placeholderTextColor = "#ffffff"
        value = {this.state.password}
        ref={(input) => this.password = input } 
      />
      
    

      <AnimateLoadingButton
          ref={c => (this.loadingButton = c)}
          width={300}
          height={50}
          title="Login"
          titleFontSize={16}
          titleColor="rgb(255,255,255)"
          backgroundColor="#00b5ec"
          borderRadius={4}
          onPress={this.login.bind(this)}
        />
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems : 'center'
  },
  inputBox: {
    width : 300,
    height: 50,
    backgroundColor:'rgba(25,25,25,0.3)',
    borderRadius : 25,
    paddingHorizontal: 16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
});

const mapStateToProps = state => {
	return {
		randomPeople: state.loginValidasi
	};
}

export default  connect(mapStateToProps,{ getDataLogin , cekData })(Form);