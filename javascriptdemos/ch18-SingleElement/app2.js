let div =document.createElement('div');
div.id='maindiv';
div.className='div1';
//creating a text node
let str=document.createTextNode('div with create element demo');
//adding textnode to div
div.appendChild(str);

//
//div.innerHTML='<p>Good Morning</p>';
//Assignment 1 :add h2 to the div text content
//before you add div to the document body, add h2 to the div
document.body.appendChild(div);

//Assignment :2 create a unordered list and add it to the document body
//HOme Products  AboutUs ContactUs


//appendChild method of NOde 

//add a node to the end of the list of nodes of that parent


//ul  ==

//want to get to the first element child


let div2= document.getElementById('div2');
console.log(div2.textContent);


let div3= document.getElementById('div2');
console.log(div2.innerText);

const h1 =  document.createElement('h1');
h1.innerText='Javascript DOM after  demo';


//Assignment 3
//you will add a list before h1 --using before method

div2.after(h1);
