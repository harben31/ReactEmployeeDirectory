import React from 'react';
import './style.css';
import TableHeader from '../TableHeader';

const Table = ( props ) => {
    console.log('table', props);
    return (
        <div>
            <table id="empTable">
                <TableHeader handleSort={props.handleSort}/>
                <tbody>
                    {props.employees.map(employee => {
                        return(
                            <tr key={employee.login.uuid}>
                                <td><img src={employee.picture.thumbnail}></img></td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.dob.age}</td>
                                <td>{employee.phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default Table;