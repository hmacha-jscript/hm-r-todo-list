import React, { Component } from 'react';

class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        people: []
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        const name = this.refs.myName.value;
        const email = this.refs.email.value;
        const btn = this.refs.button;
        btn.style.background = "red"
        console.log(name, email, btn)
    }

    render() {
        return (
            <section>
                <article>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" ref="myName" />
                        <input type="email" ref="email" />
                        <button ref="button">Submit</button>
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

const App = () => {
    return (
        <Form />
    )
}

export default App;