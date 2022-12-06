//WINDOW METHODS
/* 
alert('some new methods');

const input = prompt('enter some data');
alert(input);

if(confirm("are you sure ?")){
    console.log('YES');
}
else{
    console.log('NO');
}
 */
let val;

val = window.outerWidth;
console.log(val);

val=window.innerWidth;
console.log(val);

val = window.scrollX;
console.log(val);

val=window.scrollY;
console.log(val);

val = window.location;
console.log('location',val);


console.log('href',val);
val=window.location.host;
console.log('host',val);
val=window.location.port;
console.log('port',val);


val =window.history.length;
console.log('length of history object',val);

let hist;
hist=window.history;
history.go(-2);


//details of your browser
val= window.navigator;
console.log(val);


