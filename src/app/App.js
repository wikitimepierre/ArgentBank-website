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
      <Open />
      <Reasons />
      <SignIn />
      <Welcome />
      <Edit />
      <Accounts />
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
