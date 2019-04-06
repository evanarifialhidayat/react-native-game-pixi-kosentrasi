import {
	FETCHING_PEOPLE_REQUEST,
	FETCHING_PEOPLE_REQUEST_suces,
	FETCHING_PEOPLE_REQUEST_eror,
	TT
} from '@pages/Types';
 
export const featchingPeaopleRequest = () => ({type: FETCHING_PEOPLE_REQUEST});

export const featchingPeaopleRequest_suc = json => ({
	type: FETCHING_PEOPLE_REQUEST_suces,
	text: json
});
export const featchingPeaopleRequest_ero = eror =>({
	type: FETCHING_PEOPLE_REQUEST_eror,
	text: eror
});
export const ceka = j => ({
	type: TT,
	playlod : j
})




export const getDataLogin = (user,pass) => {
	return async dispatch => {
		dispatch(featchingPeaopleRequest());
		try{
		    // let response = await fetch("https://api-mobile-evan.herokuapp.com/customers2/getlogin/adminApr/adminApr");
		    // let json  = await response.json();
		    // dispatch(featchingPeaopleRequest_suc(JSON.stringify(json.results)));		 
  					let response = await fetch("https://api-mobile-evan.herokuapp.com/customers2/getlogin/"+user+"/"+pass)
		     		.then( res => res.json())
		     		.then(
			     			(result) => {
			     				dispatch(featchingPeaopleRequest_suc(JSON.stringify(result)));
			     			},(error) => {
			     				dispatch(featchingPeaopleRequest_ero(JSON.stringify(error)));
			     			}               
		     		)	    	     

	 	 }catch(error){
	 	 		dispatch(featchingPeaopleRequest_ero(error));
		}	
	}
}

export const cekData = (ss) => {
	return dispatch => {
		dispatch(ceka("Evan Arifial Hidayat"));
	}
}
