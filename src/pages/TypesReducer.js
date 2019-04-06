import {
	FETCHING_PEOPLE_REQUEST,
	FETCHING_PEOPLE_REQUEST_suces,
	FETCHING_PEOPLE_REQUEST_eror,
	TT
} from '@pages/Types';

import { combineReducers } from "redux";

const initialState = {
	isFeaatching : false,
	logingagal: '',
	loginsukses : ''
};
const initialStateNew = { 
	isFeaatchingw : false,
	buh : ''
};

const loginValidasi = (state = initialState , action) => {
	switch(action.type){
		case FETCHING_PEOPLE_REQUEST:
			return { ...state, isFeaatching:true }
		case FETCHING_PEOPLE_REQUEST_suces:
			return { ...state, isFeaatching: false, loginsukses: action.text };
		case FETCHING_PEOPLE_REQUEST_eror:
			return { ...state, isFeaatching: false, logingagal: action.text }
		default:
			return state;
	}
};

const tesx = (state = initialStateNew , action) => {
	switch(action.type){
		case TT:
			return { ...state, isFeaatchingw : false, buh: action.playlod }		
		default:
			return state;
	}
};

const globalReducerSatu = combineReducers({  
  loginValidasi: loginValidasi,
  x: tesx
});

export default globalReducerSatu;