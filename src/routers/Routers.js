import React, { Component } from 'react';
import {Router, Stack , Scene  } from 'react-native-router-flux';

import { StyleSheet, View ,Text} from 'react-native';

import  Dasbord  from '@dasbord/Dasbord';
import  SKP  from '@pages/SKP';

export default class Routers extends Component<{}>{
	render(){
		return(			
				<Router  >
					<Stack key="root"   >
						<Scene key="Dasbord" component={Dasbord} title="Dasbord" initial={true} hideNavBar />	
						<Scene key="SKP" component={SKP} title="SKP"  hideNavBar />	
					</Stack>
				</Router>			
			)
	}
}
