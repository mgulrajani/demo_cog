console.log(document.getElementById("p1"));

//when i search by id - iget one html element on that document with that id
//document.getElementById 
//this method -returns only one element

const p1 =document.getElementById("p1");
p1.style.backgroundColor="#334";
p1.style.color="white";
p1.style.padding="10px";

//p1.textContent="new data added";
//p1.innerText="my new paragraph";
p1.innerHTML="<h1 style='color:red'>this is heading in p</h1>";

console.log(document.getElementsByClassName("p2"));
const p2Elements =  document.querySelectorAll(".p2");
console.log(p2Elements);

p2Elements.forEach((ele,index)=>{ele.style.backgroundColor="pink";});
//HTMLElments collection
//reference of one particular element which has id of p3
let p3 = document.getElementById("p3");


let nextSibling = p3.nextElementSibling;
//extracting the next siblings  
while(nextSibling){
    console.log(nextSibling);
    nextSibling= nextSibling.nextElementSibling;

}

let div1 =  document.getElementById("div1");

let firstChild = div1.firstChild.nodeName;
console.log(firstChild);


let lastChild =  div1.lastChild.nodeName;
console.log(lastChild);

let children=div1.children;
console.log(children)
