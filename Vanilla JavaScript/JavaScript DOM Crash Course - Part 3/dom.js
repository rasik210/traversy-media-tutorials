//EVENTS
// var button = document.getElementById('button').addEventListener(
//     'click', buttonClick
// );

var output = document.getElementById('output');
var button = document.getElementById('button');
var box = document.getElementById('box');
//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseover', runEvent);

// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseout', runEvent);

//  box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);

//select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit',runEvent);

function runEvent(e) {
    //fe.preventDefault();
    console.log('EVENT TYPE:' + e.type);
    console.log(e.target.value);
    //document.body.style.display = 'none';
    // output.innerHTML = '<h3>' + e.target.value + '</h3>';
    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3>';
    // box.style.backgroundColor = "rgb("+ e.offsetX+ ", " + e.offsetY + ",40)";
}

function buttonClick(e) {
    //console.log('button clicked');
    // document.getElementById('header-title').textContent = 'changed';
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4'
    //console.log(e);

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // output.innerHTML = '<h3>' + e.target.id + '</h3';
    // console.log(e.type);

    //console.log(e.clientX);
    //console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
}