const empForm=document.getElementById("empForm");
const empList = document.getElementById("empList");
const emps=[];
loadEventListeners();

function loadEventListeners(){

    document.addEventListener('DOMContentLoaded',getEmps);

    empForm.addEventListener("submit",addEmp);

    


}

function getEmps(){

    let emps;
    if(localStorage.getItem("emps")===null){
        emps=[];
    }
    else{

        emps=JSON.parse(localStorage.getItem("emps"));

    }
    emps.forEach(function(emp){


        let li=document.createElement("li");
  
        li.appendChild(document.createTextNode(emp));

        const link = document.createElement('a');

        li.appendChild(link);

        empList.appendChild(li);


    })
}

function addEmp(e){

    let empname = document.empForm.empname.value;
    let id = document.empForm.id.value;
  
    const emp={
        id:id,
        empname:empname
    };
    

   storeEmpInLocalStorage(emp);
   e.preventDefault();

}


function storeEmpInLocalStorage(emp) {
    let emps;
    if (localStorage.getItem("emps") === null) {
        emps = [];
    } else {
        emps = JSON.parse(localStorage.getItem("emps"));
    }
    emps.push(emp);
    localStorage.setItem("emps", JSON.stringify(emp));
}
