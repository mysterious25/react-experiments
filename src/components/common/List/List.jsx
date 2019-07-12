import React from 'react';
import {names} from './names';
import './list.css';

export function List(props) {
  return (
    <ul className="list">
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
