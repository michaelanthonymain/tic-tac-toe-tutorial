import React from 'react';
import ReactDOM from 'react-dom';

const element = (
    <Welcome name="Sara" />
);

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Megan" />
            <Welcome name="Brian" />
            <Welcome name="Michael" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);