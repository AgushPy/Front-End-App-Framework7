export const API_COUNTRY ={
    url : "http://localhost:8081/api/pais",
    flags : "https://countryflagsapi.com/png",
    ALLCOUNTRYS : function(){
        return `${this.url}/all`
    },
    SEARCHFLAG : function(country){
        return `${this.flags}/${country}`
    }
}