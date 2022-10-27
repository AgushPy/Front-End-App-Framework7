import React, { useState, useEffect } from 'react';
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';
import getStatesService from '../services/getStates.service';

const CountryDetails = (props) => {

  const [states, setStates] = useState([]);
  useEffect(() => {
    getStatesService.getAllStatesByPais(props.country.id)
      .then((data) => { setStates(data); console.log(data) })
      .catch((err) => console.log(err));
  }, [states])

  return (
    // <div className={props.theme?'dark':''}>
    <Page>
      <Navbar title={props.country?.nombre} backLink="Back" />
      <BlockTitle>States:</BlockTitle>
      <List>
        {states.map((state) => <ListItem link="/about/"
          title={state.nombre} key={state.id} routeProps={{ country: props?.country }} />
        )}
      </List>

    </Page>
    // </div>
  );
};

export default CountryDetails;
