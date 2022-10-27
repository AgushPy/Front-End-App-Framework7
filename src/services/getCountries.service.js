import { API_COUNTRY } from '../constants/ApiCountry';

class GetCountry{
    async getAllCountries(){
        const response = await fetch(API_COUNTRY.ALLCOUNTRYS());
        return response.json();
    }

    async searchFlag(country){
        return API_COUNTRY.SEARCHFLAG(country);
    }
}

export default new GetCountry();