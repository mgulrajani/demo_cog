let map=new Map();
class Student{
    constructor(id,name,city,clearedExam){
        this.id=id;
        this.name=name;
        this.city =city;
        this.clearedExam=clearedExam;
    }
}
async function loadStudents() {
    const response = await fetch('./assets/students.json');
    const students = await response.json();
    console.log(students); 

     
    
    Array.from(students).forEach(element => {
        map.set(element,[10])
    });
  

    console.log(map);

}

addMarks=(student,...mark)=>{

    if(map.has(student))
      {
        
         map.set(student,[...map.get(student),mark]);
      }
      else{
        map.set(student,[mark]);
      }
      return map.get(student);

};

  loadStudents();

  let nisha=new Student(999,'nisha','bangalore',true);
  console.log(addMarks(nisha,[12,23,34]));
