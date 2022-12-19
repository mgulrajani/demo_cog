//what is a method returning -a Promise

//a Promise can be in one of the 3 states
//pending -- fulfilled or rejected

fetch("https://jsonplaceholder.typicode.com/users")
//convert the data into json ,calling json method on res
.then(res =>res.json())
//logging the data to the  console
.then(res=>{console.log(res);
res.map(user=>console.log(`${user.name}`));}
)
   //res.json().map(user=>console.log(`${user.first_name}`)))
//logging the error , if in case there is one
.catch(function(err){console.log(err)});




async function fetch2(){

let response = await fetch("https://jsonplaceholder.typicode.com/users");
let data = await response.json();
console.log(data);

}

fetch2();


// data to be sent to the POST request
let _data = {
    title: "javascript tech",
    body: "is very popular", 
    userId:1
  }

  let postdata2 = {
    title: "java",
    body: "is very robust", 
    userId:1
  }
  //default method of fetch --GET  
  //javascript object --method POST body 
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err));


  async function postData(){
    try{
  let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(postdata2),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  });

  let data = await response.json();
  console.log(data);
    }
    catch(err){console.log(err);}

  }

  postData();


  //https://jsonplaceholder.typicode.com/posts --method delete 
  //complete coll delete from posts 

  //https://jsonplaceholder.typicode.com/posts/111
  //deleteALlPost()
  //deleteById(111)