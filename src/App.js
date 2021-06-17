import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import EmployeeInfo from './components/EmployeeInfo';

function App() {
    return(
        <Router>
            <div>
                <NavBar/>
                <EmployeeInfo />
            </div>
        </Router>
    );
};

export default App;