import React, {Component} from 'react';
import API from '../../utils/API';
import MapEmployees from '../Table';
import Search from '../Search';

class EmployeeInfo extends Component {
    // const [employees, setEmployees] = useState([]);
    // const [filterEmployees, setFilter] = useState([]);
    state = {
        employees: [],
        filterEmployees: []
    }

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
        console.log(filterValue);

        //form API call
        const filterEmp = this.state.employees.filter(employee => {
            let empValues = Object.values(employee).join('').toLowerCase();
            return empValues.indexOf(filterValue.toLowerCase()) !== -1;
        })
        console.log(filterEmp);
        this.setState({
            filterEmployees: filterEmp
        })
    };

    //handleSort employees.sort grab all names out this.state.employee. fn(a-b)return 1 or -1
    
    render(){
        return(
            <div
            className='empRow'
            >
                <Search handleSearch={this.handleSearch}/>
                <MapEmployees employees={this.state.filterEmployees}/>
                
            </div>
        )
    }
    
};

export default EmployeeInfo;