// import './App.css';
// import ValidationSample from "./ValidationSample";
//
// function App() {
//     const name = 'zz'
//     return (
//             <>
//                 <ValidationSample/>
//             </>
//     )
// }
//
// export default App;


import React, {Component} from 'react';
import './App.css';
import ValidationSample from "./ValidationSample";
import CreateRef from "./createRef";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";


class App extends Component {

    state = {
        color: '#000000'
    }

    getRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

    handleClick = () => {
        this.setState({
            color: this.getRandomColor()
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color = {this.state.color}/>
                </ErrorBoundary>

                {/*<ScrollBox ref={(ref) => this.scroll = ref}/>*/}
                {/*<button onClick={() => this.scroll.scrollToBottom()}>*/}
                {/*    맨 밑으로*/}
                {/*</button>*/}
            </>
        );
    }
}

export default App;