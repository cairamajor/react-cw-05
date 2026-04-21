import React, { Component } from 'react';
import { DropdownButton, DropdownItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      type: 'All'
    };
  }

  onSearch = (e) => {
    this.setState({ search: e.target.value.toLowerCase() });
  };

  onFilter = (eventKey) => {
    this.setState({ type: eventKey });
  };

  filterItem = (item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(this.state.search);

    const matchesType =
      this.state.type === 'All' || item.type === this.state.type;

    return matchesSearch && matchesType;
  };

  render() {
    const filteredItems = this.props.items.filter(this.filterItem);

    return (
      <div className="task-card">
        <h2>Filtered List</h2>

        <input
          type="text"
          placeholder="Search..."
          onChange={this.onSearch}
        />

        <DropdownButton
          title={this.state.type}
          onSelect={this.onFilter}
          className="mb-3"
        >
          <DropdownItem eventKey="All">All</DropdownItem>
          <DropdownItem eventKey="Fruit">Fruit</DropdownItem>
          <DropdownItem eventKey="Vegetable">Vegetable</DropdownItem>
        </DropdownButton>

        <List items={filteredItems} />
      </div>
    );
  }
}

export default FilteredList;