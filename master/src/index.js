import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import MyInfo from "./components/MyInfo.js"
// import Footer from "./components/Footer.js"
// import AppTwo from './components/AppTwo'
//import AppThree from './components/AppThree.js';
// import AppFour from "./components/AppFour.js";
// import AppFive from "./components/AppFive.js";
// import AppSix from "./components/AppSix.js";
// import AppSeven from "./components/AppSeven.js";
// import AppEight from "./components/AppEight.js";
import AppGen from "./components/MemeGenerator/AppGen.js";

// var element = React.createElement('h1',{className: 'greating'},'Hello, World!');
// ReactDOM.render(element, document.getElementById('root'));
// ReactDom takes 2 arguments (what do i want to render, where do i want to render it)

// ReactDOM.render(<Footer/>, document.getElementById('footer'));
// ReactDOM.render(<MyInfo/>, document.getElementById('placeHere'));
ReactDOM.render(<AppGen/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 