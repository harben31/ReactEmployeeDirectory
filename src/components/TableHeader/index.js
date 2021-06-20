import React from 'react';
// import EmployeeInfo from '../EmployeeInfo';
import './style.css'

const TableHeader = ( props ) => {
    console.log('tableheader', props);
    return (
        <thead>
            <th>Image</th>
            <th className='sortable' onClick={(event) => props.handleSort(event)}>First Name</th>
            <th className='sortable' onClick={(event) => props.handleSort(event)}>Last Name</th>
            <th className='sortable' onClick={(event) => props.handleSort(event)}>Email</th>
            <th className='sortable' onClick={(event) => props.handleSort(event)}>Age</th>
            <th className='sortable' onClick={(event) => props.handleSort(event)}>Phone Number</th>
        </thead>
    );
};

export default TableHeader;