// Variables
let input0 = document.getElementById('i0'); let input1 = document.getElementById('i1');

if (localStorage.getItem('color0') == null /*|| localStorage.getItem('color1') == null*/) {
    localStorage.setItem('color0', '#ff8585');
    localStorage.setItem('color1', '#91b7ff');
}

document.documentElement.style.setProperty('--c_color0', (localStorage.getItem('color0')));
document.documentElement.style.setProperty('--c_color1', (localStorage.getItem('color1')));

input0.setAttribute('value', localStorage.getItem('color0'))
input1.setAttribute('value', localStorage.getItem('color1'))

updateLoop();

function updateLoop() {
    document.documentElement.style.setProperty('--c_color0', input0.value);
    document.documentElement.style.setProperty('--c_color1', input1.value);
    localStorage.setItem('color0', input0.value);
    localStorage.setItem('color1', input1.value);
    setTimeout(function() {updateLoop()}, 10)
}