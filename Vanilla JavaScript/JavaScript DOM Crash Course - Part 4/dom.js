var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var buttons = document.querySelectorAll('button');

for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener('click', removeItem);
}

form.addEventListener('submit', addItem);

function removeItem(e){
    e.target.parentNode.remove()
}

//add item
function addItem(e){
    e.preventDefault();
    var input = document.getElementById('item');
    var newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    newItem.innerHTML = input.value + '<button class="btn btn-danger btn-sm float-right delete">X</button>';
    itemList.appendChild(newItem);
}