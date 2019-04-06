import React, { Component }  from 'react';
import { StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AnimateLoadingButton from 'react-native-animate-loading-button';
import RNPickerSelect from 'react-native-picker-select';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Signup extends Component<{}> {
   constructor(props){
    super(props);
    this.inputRefs = {};
    this.state = {
      username   : '',
      password: '',
      favColor: undefined,
            favSport: undefined,
            items2: [
                {
                    label: 'Penjual',
                    value: 'Penjual',
                },
                {
                    label: 'Pembeli',
                    value: 'Pembeli', 
                },
            ],
    }
  }
   componentDidMount(){     	
   	setTimeout(() => {
            this.setState({
                favColor: 'red',
            });
        }, 1000);      
   }


  
 login(){
      this.loadingButton.showLoading(true);
        Actions.refresh(); 
        Actions.pop({});   
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="User Name"           
               value = {this.props.randomPeople.buh}   
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View> 
       <View style={styles.inputContainer}>
        <RNPickerSelect
                    placeholder={{
                        label: 'Select Your Jobs...',
                        value: null,
                        color: '#9EA0A4',
                    }}
                    items={this.state.items2}
                    onValueChange={(value) => {
                        this.setState({
                            favSport: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();  
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favSport}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                    useNativeAndroidPickerStyle={false}
                />
        </View>
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
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:310,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
    inputAndroid: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 30,
        backgroundColor: 'white',
        color: 'black', 
        width:310,
      	height:45,
      	marginBottom:20,
      	justifyContent: 'center',
    },
});
 

const mapStateTo = state => {
  return {
    	randomPeople: state.x
  };
}

export default  connect(mapStateTo)(Signup);
