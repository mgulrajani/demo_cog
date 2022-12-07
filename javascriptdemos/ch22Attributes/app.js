let username =  document.querySelector("#username");
//for standard html attributes can be accessed with attributes 
for(let attr of username.attributes){

    console.log(`${attr.name}=${attr.value}`);
}


let check1 = document.getElementById("check1");

if(check1.checked){
    console.log('Done is checked')
}

//NamedNodeMap -- key and value pair
//getAttribute(name)
//setAttribute(name,value)
//hasAttribute(name)
//removeAttribute(name)

//element.attributes

let pwd =  document.getElementById("pwd");

let styleAttribute =  pwd.getAttribute('style');

console.log(styleAttribute);
if(pwd.hasAttribute('style')){
pwd.removeAttribute('style');
console.log('style removed from pwd')
}
let div1=document.getElementById("div1");
//data-* will be accessed
//data-* custom html attributes 
//standard attributes
console.log(div1.dataset);


let p1 = document.getElementById("p1");
p1.style.cssText+='color:red;border:1px solid green;background-color:yellow';


let p2 = document.getElementById("p2");
p2.style.color='blue';

function css(e,styles){

    for(const property in styles){
        e.style[property]=styles[property];
    }
    
}

css(p2,{backgroundColor:'green',border:'1px dashed red'});


//to access the classnames applied to div
let maindiv = document.getElementById("maindiv");
let classNames =  maindiv.className;

console.log(classNames);

maindiv.className += " p5 ";

classNames =  maindiv.className;

console.log(classNames);


//create a div 
//apply some classes to it
//you will add one more class to it 
//first you access the already applied classes to the div
//then you apply one more class 

//button click , add one more class to that div
//button click , remove that class
