var storage = window.localStorage;
function save(){
form1=document.forms[0];
username = form1.elements["username"]; 
user=username.value;
storage.setItem('user',user);

console.log(user);}