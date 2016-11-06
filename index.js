import React from 'react';
import ReactDOM from 'react-dom';

const element = (
    <Welcome name="Sara" />
);

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render () {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Welcome name="Megan" />
            <Welcome name="Brian" />
            <Welcome name="Michael" />
            <Clock />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

setInterval(tick, 1000);