import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import $ from 'jquery'

const theme = createMuiTheme()

const store = createStore(todoApp)

$("body").on("touchmove",(event)=>{
    event.preventDefault
}, false)

ReactDOM.render(
    <Provider store = {store}>
	<MuiThemeProvider theme={ theme } >
	    <App />
	</MuiThemeProvider>
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
