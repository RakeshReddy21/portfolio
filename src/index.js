import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Portfolio from './portfolio';
// import Component from './tasks/Components';
// import Parent from './tasks/loginpage';
// import Counter from './tasks/counter'
// import Toggle from './tasks/counter';
// import Todo from './tasks/form';
// import Tables from './Tables'
// import Counter from './tasks/hooks'
// import Hello from './tasks/task'
// import Calculator from './tasks/cals';
// import Form from './tasks/formevents';
import Resume from './Resume/resume';
import Navbar from './Resume/navbar';
import Header from './Resume/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Tables/>
    <Portfolio/>
    <Component/>  
    <Parent/>
    <Counter/>
    <Toggle/>
    <Todo/>
    <Counter/>
    <Hello/>
    <Calculator/>
    <Form/> */}
    <Navbar/>
    <Header/>
    <Resume/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

