export const API_STATES ={
    url : "http://localhost:8081/api/provincia",

    ALLSTATES : function(){
        return `${this.url}/all`
    } ,
    ALLSTATEFORPAIS : function(idPais){
        return `${this.url}/pais/${idPais}`
    },
    CREATESTATE : function({idPais,nombreProvincia}) {
        return `${this.url}/crear/api/${idPais}/${nombreProvincia}`
    }
}