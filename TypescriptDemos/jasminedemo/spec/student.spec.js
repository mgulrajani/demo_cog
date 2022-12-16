//when using common js of type , old style of js we have to use below style of imports
const {Student,StudentDAO,StudentService}=require('../src/student')

//when using new ES modules ,we can use import 
//import { Student,StudentDAO,StudentService } from "../src/student";
let students;
let service;
let dao;
beforeEach(function(){

    console.log('initialising student array');
    let s1=new Student(111,'Rinku','rinku@gmail.com');
    let s2=new Student(112,'Mitali','mitali@gmail.com');
    let s3=new Student(113,'Nidhi','nidhi@gmail.com');
    let s4=new Student(114,'Parth','parth@gmail.com');
    let s5=new Student(115,'Arnav','arnav@gmail.com');

    students=[s1,s2,s3,s4,s5];
    
    dao=new StudentDAO();
    service=new StudentService(dao);
   console.log('created student ,dao and service objects')
})
describe("student service class being tested ,  ",function(){

  it("should delete the student data from the db or array or file whichever is the persistence mech",function(){
    
    let size = students.length;
    spyOn(dao,'delete').and.callFake(function(id){
       
      for(let i=0;i<students.length;i++){
         if(students[i].id===id){

            students.splice(i,1);
         }
         else{
            throw new Error("no such id");
         }

      }
      console.log(students.length);
      return students.length;
    });

    expect(service.delete(111)).toEqual(size-1);

  });


  it("should retrieve all students",function(){
 
     spyOn(dao,'findAll').and.returnValue(students);

     expect(service.findAll()).toEqual(students);


  });



});