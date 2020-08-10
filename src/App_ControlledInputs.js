import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    people: []
  }

  handleChange = (evt) => {
    const textVal = evt.target.value;
    // if (evt.target.name === "firstname")
    //   this.setState({ firstName: evt.target.value })
    // else
    //   this.setState({ lastName: textVal })
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    if (firstName.length > 0 && lastName.length > 0) {
      const person = `${firstName} ${lastName}`;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: ""
      })
    }
  }
  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <label>FirstName:
              <input type="text"
                name="firstName"
                placeholder="firstname"
                value={this.state.firstName}
                onChange={this.handleChange} />
            </label>
            <label>LastName:
              <input type="text"
                name="lastName"
                placeholder="lastname"
                value={this.state.lastname}
                onChange={this.handleChange} />
            </label>
            <button>Submit</button>
          </form>
        </article>
        <article>
          <h1>People</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
