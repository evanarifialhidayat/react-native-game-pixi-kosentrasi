import React, { Component } from 'react';
import {Router, Stack , Scene  } from 'react-native-router-flux';

import { StyleSheet, View ,Text} from 'react-native';


import  Login  from '@pages/Login';
import { connect } from 'react-redux';
import  Signup  from '@signup/Signup';
import  Dasbord  from '@dasbord/Dasbord';
import  SKP  from '@pages/SKP';

export default class Routers extends Component<{}>{
	render(){
		return(			
				<Router  >
					<Stack key="root"   >
						<Scene key="Login" component={Login} title="Login" initial={true} hideNavBar />	
						<Scene key="Map" component={Map} title="Map" hideNavBar />	
						<Scene key="Signup" component={Signup} title="Signup" hideNavBar />	
						<Scene key="Dasbord" component={Dasbord} title="Dasbord" hideNavBar />	
						<Scene key="SKP" component={SKP} title="SKP" hideNavBar />	
					</Stack>
				</Router>			
			)
	}
}
