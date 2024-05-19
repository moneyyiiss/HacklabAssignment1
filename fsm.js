let currentState = 'red';
let timer;

const lights = {
    red: document.getElementById('red'),
    yellow: document.getElementById('yellow'),
    green: document.getElementById('green')
};

function transition(state) {
    clearTimeout(timer);
    setState(state);
}

function setState(state) {
    for (let light in lights) {
        lights[light].style.backgroundColor = (light === state) ? light : 'black';
    }
    currentState = state;

    switch(state) {
        case 'red':
            timer = setTimeout(() => setState('green'), 20000);
            break;
        case 'yellow':
            timer = setTimeout(() => setState('red'), 5000);
            break;
        case 'green':
            timer = setTimeout(() => setState('yellow'), 15000);
            break;
    }
}

window.onload = () => setState(currentState);
