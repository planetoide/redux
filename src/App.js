import React from 'react'
import './App.css'
// import CakeContainer from './components/CakeContainer'
// import HooksCakecontainer from './components/HooksCakecontainer'
// import IceCreamContainer from './components/IceCreamContainer'
// import NewCakeContainer from './components/NewCakeContainer'
// import ItemContainer from './components/ItemContainer'
import {Provider} from 'react-redux';
import store from './redux/store';
import UserContainer from './components/UserContainer'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <ItemContainer cake hola="hola basura" />
      <ItemContainer />
      <CakeContainer />
      <IceCreamContainer />
      <HooksCakecontainer />
      <NewCakeContainer /> */}
      <UserContainer></UserContainer>
    </div>
    </Provider>
  );
}

export default App;
