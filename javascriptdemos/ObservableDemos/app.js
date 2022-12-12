import {Observable} from 'rxjs';
const obs = new Observable(
    subscriber=>{
        subscriber.next(5);
        subscriber.next(10);
        subscriber.next(90);
        setTimeout(()=>{
            subscriber.next(89);
            subscriber.complete();

        },2000);

    });
     console.log('before subscription');
    obs.subscribe({
        next(i){console.log(i)},
        error(e){console.log(e)},
        complete(){console.log('all values received')}


    });

    console.log('after subscription');

    //either i will receive the data --next 
    //complete -- 
    //error


    //to execute this code  use the following command
    //node --experimental-modules app.js

    //create folder -- npm init -y
    //npm install rxjs --save-dev
    //in package.json 