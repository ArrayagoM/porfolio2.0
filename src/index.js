import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/react';  // Agrega el proveedor de Chakra UI

//axios.defaults.baseURL = 'http://localhost:3001/';

axios.defaults.baseURL = 'https://back-porfolio-production.up.railway.app/';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);





// axios.defaults.baseURL = 'http://loacalhost:3001';
