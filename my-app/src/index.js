import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Counter from './counterClass';
import {One} from './counterFun';
// import App from './regForm';
import Sign from './Login';
import {State_con} from './hook';
import {EgState} from './hook_component/useState';
import {EgEffect} from './hook_component/useEffect';
import App from './App'
// import {Egcontext_2} from './hook_component/useContext';
// import {Egcontext_3} from './hook_component/useContext';



ReactDOM.render(<App/> ,document.getElementById('root'));