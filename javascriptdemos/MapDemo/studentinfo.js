import {fetch} from 'node-fetch';
async function loadStudents() {
    const response = await fetch('./assets/student.json');
    const names = await response.json();
    console.log(names); 
    
  }
  loadStudents();