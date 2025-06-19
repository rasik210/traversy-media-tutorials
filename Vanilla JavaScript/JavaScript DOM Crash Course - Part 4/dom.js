var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);
var itemList = document.getElementById('items');
var buttons = document.querySelectorAll('button');
for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener('click', removeItem);
}

var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);

function filterItems(e){
    var searchText = e.target.value;
    var childNodes = itemList.children;
    for (let index = 0; index < childNodes.length; index++) {
        const element = childNodes[index];
        if (searchText == '') {
            element.style.display = 'block';
        }
        else {
            if (!element.childNodes[0].textContent.includes(searchText)) {
                element.style.display = 'none';
            }
        }
    }
}

function removeItem(e){
    if(confirm('Are You Sure?')){
        e.target.parentNode.remove()
    }
}

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