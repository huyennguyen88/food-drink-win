import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { createStore} from 'redux';
import {Provider} from 'react-redux';
import myReducer from './reducers/index'
const store = createStore(myReducer)
ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));
=======
import {createStore,compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import myReducer from './reducers/index'
import thunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    myReducer,
    composeEnhancer(applyMiddleware(thunk)),

)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
>>>>>>> a72008939325ea3e9cbecc3fa41fc32bb2189e83

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
