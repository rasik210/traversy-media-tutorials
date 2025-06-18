
//START: JavaScript DOM Crash Course - Part 1



//Examine the document object//

// console.dir(document);
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


//GETELEMENTBYID //

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello'; //pays no attention to styling
// headerTitle.innerText = 'GoodBye'; //pays attention to styling
// console.log(headerTitle.innerText); //pays attention to styling. Won't show a hidden element in Dev console.
// headerTitle.innerHTML = '<h3>Hello</h3>'; //can insert HTML tags as children
//headerTitle.style.borderBottom = '1px solid red';



//GETELEMENTSBYCLASSNAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontweight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (let index = 0; index < items.length; index++) {
//     items[index].style.backgroundColor = '#f4f4f4';
    
// }



//GETELEMENTSBYTAGNAME //

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontweight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for (let index = 0; index < li.length; index++) {
//     li[index].style.backgroundColor = '#f4f4f4';
    
// }



// QUERYSELECTOR //Selects only the first element in case of multiple elments qualifying the input criterion

// var header = document.querySelector('#main-header')
// header.style.borderBottom = '5px solid red';

// var input = document.querySelector('input')
// input.value = 'Hello World';

// var input = document.querySelector('input[type="submit"]')
// input.value = 'Hello Submit';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';


// QUERYSELECTORALL

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for (let index = 0; index < odd.length; index++) {
//     const element = odd[index];
//     element.style.backgroundColor = '#f4f4f4'
//     even[index].style.backgroundColor = 'red';
    

// }

//END: JavaScript DOM Crash Course - Part 1

//START: JavaScript DOM Crash Course - Part 2

var itemList = document.querySelector('#items');
//parent Node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parent element
//  console.log(itemList.parentElement);
//  itemList.parentElement.style.backgroundColor = '#f4f4f4';
//  console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = 'yellow';
// //firstchild
// console.log(itemList.firstChild);
// //firstelementchild
// console.log(itemList.firstElementChild);

// itemList.firstElementChild.textContent = 'Hello 1';

// //lastchild
// console.log(itemList.lastChild);
// //lastelementchild
// itemList.lastElementChild.textContent = 'Hello 4';

// //nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//createElement

// //create a div
// var newDiv = document.createElement('div');
// //add CSS class
// newDiv.className = 'hello';
// //add id
// newDiv.id = 'hello1';

// //add attr
// newDiv.setAttribute('title', 'hello div title');

// //create text node
// var newDivText = document.createTextNode('Hello World');

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);

//END: JavaScript DOM Crash Course - Part 2