import React, { Component } from 'react';
import API from '../../utils/API';
import Container from '../Container';
import NavBar from '../NavBar';
import EmployeeInfo from '../EmployeeInfo'

class Home extends Component {
    state = {
        search: '',
        results: [],
    };

    loadEmployee(){
        API.userGen()
        .then(res => res.json)
        .then(data => {
            console.log(data);
        })
    };
    
    render(){
        return(
            <div>
                <p>search bar goes here</p>
                <p>button</p>
                <p>employees</p>
                <p>employees</p>
                <p>employees</p>
                <p>employees</p>
            </div>
        )
    }
};

export default Home;