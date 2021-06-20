import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import EmployeeInfo from './components/EmployeeInfo';

function App() {
    return(
            <div>
                <Header/>
                <EmployeeInfo />
            </div>
    );
};

export default App;