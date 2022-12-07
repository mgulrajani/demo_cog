let btn=document.getElementById("btn");


//function expression

let f1 = function(event){
    console.log('button is clicked');
    console.log(event.type);
    console.log(event.bubbles , event.cancelable);
    console.log(event.currentTarget);
    event.preventDefault();
    console.log(event.target);
    console.log(event.stopPropagation());
    console.log(event.bubbles , event.cancelable);
    //console.log(event.preventDefault());
    console.log(this.id);
    console.log(this.name);
}

btn.addEventListener('click',f1);


//if you want to remove the  click event handler of the btn

let removeAlert =  function(){

    console.log('click event on button removed');
}
btn.removeEventListener('click',removeAlert);


let link=document.getElementById("a1");

link.addEventListener('click',function(event){
    console.log('hyperlink is clicked');
    event.preventDefault();

});

let btn2=  document.getElementById('btn2');

let f2 =  function(event){
    console.log('in event handler of btn2');

btn.onclick = null;
console.log('removed click event handler')
}
btn2.addEventListener('click',f2);
