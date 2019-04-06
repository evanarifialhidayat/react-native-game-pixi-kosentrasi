import React, { Component }  from 'react';
import { StyleSheet, Text, View ,
Image ,TouchableOpacity , Animated , Easing } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Logo extends Component<{}>{
  constructor(){
    super()
    this.spinValue = new Animated.Value(0);
  }
  goBack(){
    Actions.pop();
  }
  componentDidMount(){
    this.spin()
  }
  spin(){
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linier
        }
      ).start(() => this.spin());
  }
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg','360deg']
    })
    return (
      <View >
        <TouchableOpacity onPress={this.goBack}> 
          <Animated.Image style={{width:150,height:150, marginVertical: 15,
            transform: [{rotate: spin}]
          }}
          source={require('@images/logoLogin4.png')}/>
        </TouchableOpacity>
    
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  logoText : {
    marginVertical: 5,
    fontSize : 18 ,
    color : 'rgba(0,0,0,0.7)'
  }
});

 //  <Text style={styles.logoText}>Welcome To My App</Text>