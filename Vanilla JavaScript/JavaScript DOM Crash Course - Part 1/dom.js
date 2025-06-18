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