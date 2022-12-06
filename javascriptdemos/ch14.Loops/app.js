const cars = ["Lambhorgini","Audi","Ferari","Aston Martin","McLarren"];

//traditional for loop to iterate thru the array
/*  for(let i=0;i<cars.length;i++){
    console.log(cars[i]);

}
 

//for each for arrays

cars.forEach((c,i)=>{console.log(c,i);});
 */
cars.forEach(function(car,index,arr){
    console.log(car,index);
    console.log(arr);
})

cars.forEach(function(c){
    console.log(c);
})



const employees=[
    {id:112 ,name:'amit',salary:80000},
    { id:113 ,name:'sunita',salary:75000},
    { id:114,name:'anita',salary:100000 } ];

    employees.map(function(emp){console.log(emp.id);});

    //using map  -- callback to display the annual salary of the emp along with their names

    employees.map(( empl )=> { 

          console.log(`${empl.name} annual salary ${empl.salary *12}`);
    } );

    
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

      //FOR  In -- there is no array iteration  or  a collection iteration
      //for in , is for iterating through the data members of that object


      for (let i in person){

        
           if (i === 'address'){
            for(let j in person[i]){
                console.log(`${j}: ${person[i][j]}`);
            }
        }
        else{

            console.log(`${i} : ${person[i]}`);
        }

        

      }


//assignment to practise FOR IN
      //create  a employee object
      //department --- employee has a department
      //employee has  a project (id , title ,startdate,duration)

      //using for in

      
