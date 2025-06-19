var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var buttons = document.querySelectorAll('button');

for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener('click', removeItem);
}

form.addEventListener('submit', addItem);

function removeItem(e){
    if(confirm('Are You Sure?')){
        e.target.parentNode.remove()
    }
}

//add item
function addItem(e){
    e.preventDefault();
    var input = document.getElementById('item');
    var listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    var textNode = document.createTextNode(input.value);
    listItem.appendChild(textNode);
    var button = document.createElement('button');
    button.className = "btn btn-danger btn-sm float-right delete";
    button.innerText = 'X';
    button.addEventListener('click', removeItem);
    listItem.appendChild(button);
    itemList.appendChild(listItem);
}