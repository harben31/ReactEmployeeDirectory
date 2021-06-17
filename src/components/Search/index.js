import React from 'react';

const Search = (props) => {
    return(
        <>
        <input name="employeeSearch" type="search" onChange={event => props.handleSearch(event)}/>
        </>
    )
};

export default Search;