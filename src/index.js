import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from "./Store/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom"


ReactDOM.render(
        <BrowserRouter>
        <Provider store={Store}>
            <App/>
        </Provider>

    </BrowserRouter>
   

        

,document.getElementById('root'));


serviceWorker.unregister();
