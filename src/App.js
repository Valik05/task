import React from 'react';
import { Provider } from 'react-redux';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { ModalProvider } from './context/ModalContext';
import store from './store';

const App = () => {

  return (
    <Provider store={store}>
      <ModalProvider>
        <Header />
        <Main />
        </ModalProvider>
    </Provider>
   

  );
};

export default App;
