import React from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incremrnt = this.incremrnt.bind(this);
        this.decremrnt = this.decremrnt.bind(this)
    }

    incremrnt() {
        this.setState({ count: this.state.count + 1 })
    }
    decremrnt() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <h1> {this.state.count} </h1>
                <button onClick={this.incremrnt} > Incremrnt </button>
                <button onClick={this.decremrnt} > Decremrnt </button>
            </div>
        )
    }
}

export default ClassCounter;