import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Michael',
    lastName: 'Main'
};

const element = (
    <h1>
        Hello, { formatName(user) }!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

function tick() {
    const element = (
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('clock')
    );
}

setInterval(tick, 1000);