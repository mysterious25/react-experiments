import React from 'react';
import { names } from './names';

export function List(props) {
  return (
    <ul>
      {names
        .filter((menu) => menu.toLowerCase().includes(props.searchValue.toLowerCase()))
        .map((name, i) => {
      return (
      <li key={i}>
        {name}
      </li>

      )
        })}
    </ul>
  )
}
