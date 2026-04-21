import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import FilteredList from './components/FilteredList';
import './App.css';

const produce = [
  { name: 'Apple', type: 'Fruit' },
  { name: 'Banana', type: 'Fruit' },
  { name: 'Carrot', type: 'Vegetable' },
  { name: 'Mango', type: 'Fruit' },
  { name: 'Broccoli', type: 'Vegetable' },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <Counter />
        <FilteredList items={produce} />
      </div>
    );
  }
}

export default App;