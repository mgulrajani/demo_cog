var storage = window.localStorage;
function save(){
    //first form of the html document
form1=document.forms[0];
//in the form1 -element username , that ref i am storing in username
username = form1.elements["username"]; 

//username.value is assigned to user
user=username.value;

//that is being set in the session storage as avalue of key 'user'
storage.setItem('user',user);

console.log(user);}