import React,{useState,useEffect} from 'react';
import ListCountries from './list-countries';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react';

const HomePage = () => {

  return(
    
  <Page name="home" >
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavTitle sliding>ListCheck</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      <NavTitleLarge>Country Check</NavTitleLarge>
    </Navbar>
    {/* Toolbar */}
    <Toolbar bottom>
      {/* <Link>Left Link</Link>
      <Link>Right Link</Link> */}
      <p>This tool develop for Agush </p> </Toolbar>
    {/* Page content */}
    <Block strong>
      <p>Here you select the country for see your states</p>
    </Block>
    <BlockTitle>Countries</BlockTitle>
    <ListCountries ></ListCountries>
    
  </Page>
  );
};
export default HomePage;