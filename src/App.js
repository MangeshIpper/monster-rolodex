import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  render() {
    const filteredMonster = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          type="search"
          className="serch-box"
          placeholder="Search monsters"
          onChange={(e) => {
            const searchField = e.target.value.toLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        <p>Hello {this.state.name}.</p>
        <button onClick={() => this.setState({ name: "Sangesh" })}>
          click
        </button>
        {filteredMonster.map((item, index) => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
