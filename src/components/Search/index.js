import React from 'react';
import './style.css'

const Search = (props) => {
    return(
        <div className='searchWrap'>
            <h3>Search</h3>
            <input name="employeeSearch" type="search" onChange={event => props.handleSearch(event)}/>
        </div>
    )
};

export default Search;