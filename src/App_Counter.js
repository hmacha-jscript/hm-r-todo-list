import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 0
    }

    handleClick = (evt) => {
        const name = evt.target.name;
        let count = this.state.count;
        console.log(count)
        this.setState((state, props) => {
            console.log(this.props.amount, this.state.count)
            return { count: state.count + 1 }
        },
            () => {
                console.log("from callback1", this.state.count)
            }
        );
        this.setState((state, props) => {
            console.log(this.props.amount, this.state.count)
            return { count: state.count + 1 }
        },
            () => {
                console.log("from callback2", this.state.count)
            }
        );
        // await this.setState((state) => ({ count: state.count + 2 }))
        console.log(this.state.count)
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <button type="button" name="increase" onClick={this.handleClick}>increase</button>
                    <span>count: {this.state.count}</span>
                    <button type="button" name="decrease" onClick={this.handleClick}>decrease</button>
                </div>
            </React.Fragment>
        )
    }

}

const App = () => {
    return (
        <Counter amount="2" />
    )
}

export default App;