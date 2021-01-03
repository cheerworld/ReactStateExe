import React, { Component } from "react";
import Item from "./item";
import PropTypes from "prop-types";

class ItemList extends Component {
  render() {
    return (
      <div>
        <p className="items">Items</p>
        <ol className="item-list">
          {this.props.items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ol>
      </div>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
