import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import DebugMenu from '../components/DebugMenu';
import Header from '../components/Header';
import Open from '../components/Open';
import SignIn from '../components/SignIn';
import Edit from '../components/Edit';
import Accounts from '../components/Accounts';
import Mockup from '../components/Mockup';
import Footer from '../components/Footer';
import Error from '../components/Error';

function App() {
  return (
    <Provider store={store}>

      <DebugMenu />
      <Header />

      <Routes>
        <Route path="/" element={<> <Open /> </>} />
        <Route path="/sign-in" element={<> <SignIn /> </>} />
        <Route path="/edit" element={<> < Edit /> </>} />
        <Route path="/user" element={<> < Accounts /> </>} />
        <Route path="/mockup" element={<> < Mockup /> </>} />
        <Route path="/error" element={<> < Error /> </>} />
      </Routes>

      <Footer />

    </Provider>
  );
}

export default App;

//The `Provider` component makes the Redux store available to nested components
