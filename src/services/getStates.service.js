import { API_STATES } from './../constants/ApiStates';

class GetStates{
    async getAllStatesByPais(countryId){
        const response = await fetch(API_STATES.ALLSTATEFORPAIS(countryId));
        return response.json();
    }

    async createState(data){
        let body = JSON.stringify(data);
        console.log(body)
        const response =  await fetch(API_STATES.CREATESTATE(data),{
            headers:{
                'content-type' : 'application/json'                 
            },
            mode : 'cors',
            method: 'POST',
            // body
        })
        return response;
    }
}

export default new GetStates();