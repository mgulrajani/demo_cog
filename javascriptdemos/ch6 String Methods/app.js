const firstName = "Mike";
const lastName= "Neil Johnson";
const elements = " paragraph , table , list , anchor , image"
const message = "Good morning everyone";
let val;
val = firstName +" "+ lastName;
console.log(val);

val=`Hi ${firstName} ${lastName} Good Morning`;
console.log(val);

val=firstName.charAt(3);
console.log(val);

val = firstName.substring(2);
console.log(val);

val =lastName.slice(0,3);
console.log(val);

val=elements.split(",");

for(let i=0;i<val.length;i++){
     let element = val[i];
     if(element.charAt(0)==" "){
        val[i]=element.replace(" ","");
        console.log(val[i]);
     }

}


val =  message.includes('Hello');

console.log(val);

