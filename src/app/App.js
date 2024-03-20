import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '../features/header/Header';
import { Open } from '../features/open/Open';
import { Reasons } from '../features/reasons/Reasons';
import { SignIn } from '../features/signIn/SignIn';
import { Welcome } from '../features/welcome/Welcome';
import { Edit } from '../features/edit/Edit';
import { Accounts } from '../features/accounts/Accounts';
import { Footer } from '../features/footer/Footer';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Open /><Reasons />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<Welcome /><Accounts />} />
        <Route path="/edit" element={<Edit />} />
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
