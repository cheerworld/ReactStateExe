import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateNewItem from './CreateNewItem';
import DeleteItem from './DeleteItem';
import ItemList from './ItemList';


class App extends React.Component {
  state = {
    items: []
  }

  updateItems = (inputValue) => {
    this.setState(oldState => ({
      items: [...oldState.items, inputValue],
    }));
  }

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: prevState.items.slice(0, -1)}));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateNewItem
        updateItems={this.updateItems}
        />
        <DeleteItem
        deleteLastItem={this.deleteLastItem}
        noItemsFound={this.noItemsFound}
        />
        <ItemList
        items={this.state.items}
        />
      </div>
    );
  }
}

export default App;
