let p=new Promise((resolve,reject)=>{

    let a=5;
    let b=3;
    let c= a+b;
    if(c===5){
        resolve('success in keeping the promise');
    }
    else{

        reject('failed to keep the promise');
    }

});


p.then((message)=>{console.log(message);})
.catch((message)=>console.log(message));

//creating a new Promise with resolve and reject callbacks
let promise = new Promise((study,play)=>{
  //conditions are being set 
    let watchingCartoons=true;
    let watchingMovies=false;
    let practiseCoding =false;


    if(watchingCartoons || watchingMovies){

      play('watched  movies');
    }
    else if(practiseCoding){
        study('completed the course');
    }

});

//checking the status of Promise
promise.then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)});
