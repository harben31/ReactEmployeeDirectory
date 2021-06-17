import React from 'react';

const MapEmployees = ( props ) => {
    return (
        <div>
            <table id="empTable">
                <thead>
                    <tr>
                        <th>Image</th>
                    </tr>
                    <tr>
                        <th>Name</th>
                    </tr>
                    <tr>
                        <th>Email</th>
                    </tr>
                    <tr>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map(employee => {
                        return(
                            <tr key={employee.login.uuid}>
                                <td><img src={employee.picture.thumbnail}></img></td>
                                <td>{employee.name.first} {employee.name.last}</td>
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


export default MapEmployees;