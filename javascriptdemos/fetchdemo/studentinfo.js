let map=new Map();
class Student{
    constructor(id,name,city,clearedExam){
        this.id=id;
        this.name=name;
        this.city =city;
        this.clearedExam=clearedExam;
    }
}/* 
async function loadStudents() {
    const response = await fetch('./assets/students.json');
    const students = await response.json();
    console.log(students); 

     
    
    Array.from(students).forEach(element => {
        map.set(element,[10])
    });
  

    console.log(map);

}
 */
class Map1{
  constructor(map){this.map=map;}
  
  addMarks=(student,mark)=>{


    this.map.forEach((v,k)=>{
        if(k===student){
  
        this.map.set(k,[...v,...mark])

        }
        else{
            this.map.set(k,v);
        }


    })


}
    
}
  //loadStudents();

  let tia=new Student(999,'tia','pune',true);
 
  let nidhi=new Student(333,'nidhi','mumbai',true);
 
  let rishi=new Student(6666,'rishi','simla',true);
 
  let nisha=new Student(5555,'nisha','bangalore',true);
  
  map.set(nisha,[]);
  map.set(nidhi,[56,78,88]);
  map.set(tia,[]);
  map.set(rishi,[56,78,88]);
  
  let map1=new Map1(map);



  console.log(map1.addMarks(nisha,[12,23,34]));


  map1.addMarks(nisha,[67,78,99]);
  map1.addMarks(rishi,[45,56,74]);
  map1.addMarks(tia,[50,90,90]);
  map1.addMarks(nidhi,[12,32,34]);
  map1.addMarks(rishi,[99]);


  console.log(map1.map)