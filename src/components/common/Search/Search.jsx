import React from 'react';

export function Search(props) {
    function onInputHandler(event) {
        props.onSearchChange(event.target.value)
    }
        return (
            <>
                <input onInput={onInputHandler}/>
            </>
        )
}


export default Search;