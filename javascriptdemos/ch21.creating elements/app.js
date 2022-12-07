let list1 =  document.getElementById("list1");

list1.insertAdjacentHTML('beforebegin','<h2>web technologies</h2>');
list1.insertAdjacentHTML('afterbegin','<li>CSS</li>');
list1.insertAdjacentHTML('beforeend','<li>TypeScript</li>');
list1.insertAdjacentHTML('afterend','<p>Above web technologies are very popular</p>');


let li = document.createElement('li');

li.textContent='Mysql';

list1.replaceChild(li,list1.firstElementChild);

list1.removeChild(list1.lastElementChild);


while(list1.firstChild){
    list1.removeChild(list1.firstChild);
}
console.log('removed all list items')