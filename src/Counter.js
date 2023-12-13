import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            number:0,
            other: 0,
        }
    }

    render() {
        const {number, other} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h1>{other}</h1>
                <button onClick={ () => {
                    this.setState({
                        number: number+1,
                        other: other+2,
                    }, () => {
                        console.log('setState called')
                    })
                }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;