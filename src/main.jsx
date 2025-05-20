import { createRoot } from 'react-dom/client';
import { Fragment } from 'react';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

createRoot(document.getElementById('root')).render(
  <Fragment>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Fragment>
);
