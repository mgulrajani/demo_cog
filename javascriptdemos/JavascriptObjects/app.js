let empty={};

let person={
    id:111,
    'first name':'john'
};

//display  person's name
//console.log(person.first name);


//another way to display the name
console.log(person["first name"]);

person['first name']='jack';

console.log(person);


//add a newproperty

person.age =  25;
console.log(person);

delete person.age;
console.log(person);

//to check whether person has address property or not
console.log('address' in person);
console.log('age' in  person);

let user={
  firstName:'john',
  lastName:'Mcclain',
  age:23,

  get yearOfBirth(){
    return 2022 - 23 ;
  },


  get fullName(){
    return `${this.firstName} ${this.lastName}`;

  },

  set fullName(val){
    [this.firstName,this.lastName]=val.split(" ");
  }
};
//get -accessor
//set mutators
//setter 

user.fullName='john gary';
console.log(user.fullName);


function User(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}

let amit = new User('amit','sharma',23);

console.log(amit);

let sunita =  new User('sunita','tiwari',22);

console.log(sunita);






