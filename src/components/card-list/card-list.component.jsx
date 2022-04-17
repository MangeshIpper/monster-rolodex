import React, { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((item, index) => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
