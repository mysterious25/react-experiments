import React from 'react';
import { List } from '../List/List';
import { Search } from '../Search/Search';

export class ListWrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        searchValue: ''
      }
    }

    updateSearchValue = searchValue => {
      this.setState({
        searchValue: searchValue
      });
    };

  render () {
    return (
      <div>
        <Search onSearchChange={this.updateSearchValue}/>
        <List searchValue={this.state.searchValue}/>
      </div>
    )
  }
}


export default ListWrapper;