import React, {Component} from 'react';
import API from '../../utils/API';
import Table from '../Table';
import Search from '../Search';
import './style.css';

class EmployeeInfo extends Component {
    state = {
        employees: [],
        filterEmployees: [],
    };

    componentDidMount(){
        API.userGen().then(res => {
            this.setState({
                employees: res.data.results,
                filterEmployees: res.data.results
            })
        })
    };

    handleSearch = event => {
        //input value
        const filterValue = event.target.value;

        //from API call
        const filterEmp = this.state.employees.filter(employee => {
            let empValues = Object.values(employee).join('').toLowerCase();
            return empValues.indexOf(filterValue.toLowerCase()) !== -1;
        });
       
        this.setState({
            filterEmployees: filterEmp
        });
    };

    handleSort = event => { 
        
        this.state.employees.sort((a, b) => {
            let empA;
            let empB;

            switch(event.target.textContent) {
                case 'First Name':
                    empA = a.name.first;
                    empB = b.name.first;
                    break;
                case 'Last Name':
                    empA = a.name.last;
                    empB = b.name.last;
                    break;
                case 'Email':
                    empA = a.email;
                    empB = b.email;
                    break;
                case 'Age':
                    empA = a.dob.age;
                    empB = b.dob.age;
                    break;
                case 'Phone Number':
                    empA = a.phone;
                    empB = b.phone;
                    break;
                default:
                    empA = a.name.first;
                    empB = b.name.first;
            }

            if(empA < empB) return -1
            // if(empA > empB) return 1
            return 1
        });

        this.setState({
            filterEmployees: this.state.employees
        });
    };


    render(){
        return(
            <div
            className='empRow'
            >
                <Search handleSearch={this.handleSearch}/>
                <Table employees={this.state.filterEmployees} handleSort={this.handleSort}/>
                
            </div>
        );
    };
    
};

export default EmployeeInfo;