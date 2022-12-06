const person={
  firstName:'Amit',
  lastName:'Sharma',
  age:30,
  email:'amitsharma@gmail.com',
  address:{

    street:'mgm',
    city:'mumbai',
    pincode:400001
  },
  hobbies:['reading','writing'],

  getBirthYear:function(){
  
    return 2022 - this.age;


  }
  
}

let val = person;
console.log(val);

val =person.firstName;
console.log(val);

val=person.address.city;
console.log(val);

val =  person.getBirthYear();

console.log(val);


const employees=[
    {id:112 ,name:'amit',salary:343444},
    { id:113 ,name:'sunita',salary:334344},
    { id:114,name:'anita',salary:343455 } ];
const people = [

   { name:'meeta',age:23  },
   {name:'tia',age:22},
   {name:'hemant',age:23},
   {name:'rishi',age:24}
];

for(let i=0;i<people.length;i++){

    console.log(`Person details are as : ${people[i].name} ${people[i].age}`);
}