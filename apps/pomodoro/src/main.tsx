import { StrictMode } from 'react';
import App from './app/app';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { persistor, store } from "./app/state/store";
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={process.env['PUBLIC_URL']}>
          <App/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
