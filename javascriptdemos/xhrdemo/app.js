let btn = document.getElementById("btn");

btn.addEventListener('click',loadData);

function loadData(){
    //creating a xhr object
    const xhr = new XMLHttpRequest();

    //open data.txt 
    xhr.open('GET','data.txt',true);

    xhr.onprogress = function(){
        console.log('ready state',xhr.readyState);
    }

    //when the readyState is ==4 means request is complete
   //onload triggers on xhr
    xhr.onload = function(){
        console.log('readystate',xhr.readyState);
        if(this.status === 200){
            document.getElementById('output').innerHTML =
            `<h1>${this.responseText}</h1>`;

        }
    }

    xhr.onerror = function(){
        console.log('Request has some errors');
    }


    xhr.send();

    /*
    0 request not initialised
    1  request just set and server connection established
    2   request is send by the client and recd by the server
    3   server is processing the request
    4  --request is complete and response is ready


    //HTTP status 
    200 --
    201



    */

}