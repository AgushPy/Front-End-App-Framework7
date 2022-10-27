import React, { useState, useEffect ,useRef} from 'react';

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter,
  Button
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';
import PopupFormCreateState from './popupFormCreateState';

const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme]= useState(true);
  // Framework7 Parameters
  const f7params = {
    name: 'ListCheck', // App name
      // theme: 'auto', // Automatic theme detection
      theme: 'auto', // Automatic theme detection



      // App store
      store: store,
      // App routes
      routes: routes,
  };
  const alertLoginData = () => {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }
  f7ready(() => {


    // Call F7 APIs here
  });
  
  
  return (
    <App { ...f7params } className={theme?'':'dark'}>
        
        {/* Left panel with cover effect*/}
        <Panel left cover dark>
          <View>
            <Page>
              <Navbar title="Left Panel"/>
              <Block>Left panel content goes here</Block>
            </Page>
          </View>
        </Panel>


        {/* Right panel with reveal effect*/}
        <Panel right reveal dark>
          <View>
            <Page>
              <Navbar title="Option's Menu"/>
              <Block>What do you need?</Block>
              <Button fill popupOpen=".demo-popup-swipe" >Create State</Button>
              <br/>
              <Toolbar bottom>
              <Button style={{'text-align':'center'}} onClick={() =>{setTheme(!theme)}}><i className="f7-icons">sun_max_fill</i></Button>
              </Toolbar>
            </Page>
          </View>
        </Panel>

        {/* <PopupFormCreateState reouterProps={{popupOpened}}/> */}
        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />

      {/* Popup */}
      <Popup className="demo-popup-swipe" swipeToClose>
        <View>
          <Page>
            <Navbar title="Create State">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Complete this field's for cretae a State</p>
              
              <PopupFormCreateState/>
            </Block>
          </Page>
        </View>
      </Popup>

      <LoginScreen id="my-login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput
                type="text"
                name="username"
                placeholder="Your username"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
              ></ListInput>
              <ListInput
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              ></ListInput>
            </List>
            <List>
              <ListButton title="Sign In" onClick={() => alertLoginData()} />
              <BlockFooter>
                Some text about login information.<br />Click "Sign In" to close Login Screen
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
  )
}
export default MyApp;