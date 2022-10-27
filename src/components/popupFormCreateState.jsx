import { Icon, ListInput,List, Button,f7 } from 'framework7-react'
import React,{useEffect,useState} from 'react'
import getCountriesService from '../services/getCountries.service';
import getStatesService from '../services/getStates.service';

const PopupFormCreateState = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        getCountriesService.getAllCountries()
            .then((data) => { setCountry(data); })
            .catch((err) => console.log(err));
    }, [country])

    const onSubmit = async(e)=>{
        // e.currentTarget
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = await getStatesService.createState({
            idPais : parseInt(formData.get("idPais")),
            nombreProvincia : formData.get("nombreProvincia")
        })
        if(data.status == 200){
            f7.dialog.alert("The state was created success","Response")
        }else{
            f7.dialog.alert("Failed proccess of create state","Response")
        }
        console.log(data.status);
        console.log( formData.get("idPais"))
        console.log(formData.get("nombreProvincia"))

    }

            
  return (
    <form onSubmit={(e) =>{onSubmit(e)}}>
    <List inlineLabels noHairlinesMd>

      <ListInput
      name='idPais'
    label="Country"
    type="select"
    defaultValue="Argentina"
    placeholder="Please choose...">
    <Icon icon="demo-list-icon" slot="media"/>
    {country.map((country) =>
                    <option value={country.id} key={country.id}>{country.nombre}</option>
                )}
  </ListInput>

  <ListInput
    name='nombreProvincia'
    label="Name"
    type="text"
    placeholder="Buenos Aires"
    clearButton
  >
    <Icon icon="demo-list-icon" slot="media"/>
  </ListInput>

  <Button className='open-alert' fill type='submit' >Create State</Button>
        
    </List>
    
    </form>
  )
}
export default PopupFormCreateState
