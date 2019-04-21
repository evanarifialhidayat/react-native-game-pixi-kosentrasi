import React, { Component } from 'react';
import {Router, Stack , Scene  } from 'react-native-router-flux';

import { StyleSheet, View ,Text} from 'react-native';

import  Dasbord  from '@dasbord/Dasbord';
import  SKP  from '@pages/SKP';
import Lavel1 from '@pages/Lavel1';
import Lavel2 from '@pages/Lavel2';
import Lavel3 from '@pages/Lavel3';
import Lavel4 from '@pages/Lavel4';
import Lavel5 from '@pages/Lavel5';
import Lavel6 from '@pages/Lavel6';
import Lavel7 from '@pages/Lavel7';
import Lavel8 from '@pages/Lavel8';
import Lavel9 from '@pages/Lavel9';
import Lavel10 from '@pages/Lavel10';

export default class Routers extends Component<{}>{
	render(){
		return(			
				<Router  >
					<Stack key="root"   >
						<Scene key="Dasbord" component={Dasbord} title="Dasbord" initial={true} hideNavBar />	
						<Scene key="Lavel1" component={Lavel1} title="Lavel1"  hideNavBar />	
						<Scene key="Lavel2" component={Lavel2} title="Lavel2"  hideNavBar />
						<Scene key="Lavel3" component={Lavel3} title="Lavel3"  hideNavBar />
						<Scene key="Lavel4" component={Lavel4} title="Lavel4"  hideNavBar />
						<Scene key="Lavel5" component={Lavel5} title="Lavel5"  hideNavBar />
						<Scene key="Lavel6" component={Lavel6} title="Lavel6"  hideNavBar />
						<Scene key="Lavel7" component={Lavel7} title="Lavel7"  hideNavBar />
						<Scene key="Lavel8" component={Lavel8} title="Lavel8"  hideNavBar />
						<Scene key="Lavel9" component={Lavel9} title="Lavel9"  hideNavBar />
						<Scene key="Lavel10" component={Lavel10} title="Lavel10"  hideNavBar />
						<Scene key="SKP" component={SKP} title="SKP"  hideNavBar />	
					</Stack>
				</Router>			
			)
	}
}
