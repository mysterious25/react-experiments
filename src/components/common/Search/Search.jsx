import React from 'react';
import './search.css';

export function Search(props) {
  function onInputHandler(event) {
    props.onSearchChange(event.target.value)
  }

  return (
    <>
      <input className="search" onInput={onInputHandler}/>
    </>
  )
}


export default Search;