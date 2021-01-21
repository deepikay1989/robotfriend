import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className = 'pa3'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='serach for robots' 
                onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;