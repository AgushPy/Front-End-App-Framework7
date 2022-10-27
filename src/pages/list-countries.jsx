import React, { useEffect, useState } from 'react'
import { List, ListItem } from 'framework7-react';
import getCountriesService from '../services/getCountries.service';

const ListCountries = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        getCountriesService.getAllCountries()
            .then((data) => { setCountry(data); })
            .catch((err) => console.log(err));
    }, [country])

    return (
        <div>
            <List>
                {
                    country.map(c => {
                        
                    })
                }
                {country.map((country) =>
                    <ListItem routeProps={{ country: country }}
                        link="/country-details/"
                        title={country.nombre} key={country.id}  />
                )}
            </List>

        </div>
    )
}

export default ListCountries;
