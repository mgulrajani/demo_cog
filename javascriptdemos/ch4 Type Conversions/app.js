let val;
//Number to a String
val=String(555);
console.log(val)
console.log(typeof val);
//boolean to String
val=String(true);
console.log(val)
console.log(typeof val);

//to a string
val = (500).toString();
console.log(val)
console.log(typeof val);

val =true.toString();
console.log(val)
console.log(typeof val);

//String to a Number
//Number constructor
val = Number("44545hello");
console.log(val);

val = Number([1,2,3,4]);
console.log(val);

val = Number("5");
console.log(val);

val = parseInt("100.90");
console.log(val);

val=parseFloat("100.9099");
console.log(val.toFixed(1));

const val2 = "50";
const val3 = 60;

const sum =val3+val2;

console.log(sum);
console.log(typeof sum);



