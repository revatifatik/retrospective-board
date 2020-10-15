import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducerIndex from './reducers/reducerIndex';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import RetrospectiveContainer from "./components/retrospectiveContainer"

const store = createStore(
  reducerIndex
);

const App = () => {
  return (
    <Provider store={store}>
      <RetrospectiveContainer />
    </Provider>
  );
}

export default App;
