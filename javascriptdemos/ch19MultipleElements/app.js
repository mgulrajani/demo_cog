
let list1  = document.querySelector("#list1");

let arr = ["spring","hibernate","angular","react","js","ts"];

let nodes = arr.map(
    e=>{
       let listitem =  document.createElement('li');
       listitem.textContent= e;
       return listitem;

    }

);


list1.append(...nodes);

