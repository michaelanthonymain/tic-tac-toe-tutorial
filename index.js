import React from 'react';
import ReactDOM from 'react-dom';

const element = (
    <Welcome name="Sara" />
);

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(
    element,
    document.getElementById('root')
);