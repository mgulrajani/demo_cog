//we have to fetch students from students.json
//using fetch api

//what is the default method of fetch -- Get

async function loadStudents(){


    //http request method is default "GET"
    //internal to my project , i am referring to students.json ,which is in the assets folder of my project
      const response =  await fetch('./assets/students.json');

      const students =await response.json();

      console.log(students);

}

loadStudents();