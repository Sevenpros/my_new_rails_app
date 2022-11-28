// Entry point for the build script in your package.json
import "./controllers"
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App'
import { fetchGreeting } from './redux/greeting';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchGreeting());
root.render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
       </Provider>
    </BrowserRouter>
);