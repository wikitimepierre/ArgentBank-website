import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import Open from '../components/Open';
import SignIn from '../components/SignIn';
import Edit from '../components/Edit';
import Accounts from '../components/Accounts';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<> <Open /> </>} />
        <Route path="/sign-in" element={<> <SignIn /> </>} />
        <Route path="/edit" element={<> < Edit /> </>} />
        <Route path="/user" element={<> <Accounts /> </>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

//The `Provider` component makes the Redux store available to nested components
//import { store } from './store';
//import { Provider } from 'react-redux';
//    <Provider store={store}>
//      insert all components inside the Provider component
//    </Provider>

//TODO: a 404 page ?
//<Route path="/*" element={<Page404 />} />
