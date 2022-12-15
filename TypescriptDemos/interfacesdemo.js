//in typescript what are two purposes served by interface 
//existing impl of the Logger
//if I add print method now at this stage to the existing workign interface
//it will break the code
//SOLID  -- Single Responsibility  , O open to extension close to modification, L -- LIskov's substitution  I -- interface segregation D Dependency Injection
var logger = {
    log: function (msg) {
        console.log(msg);
    },
    name: 'kiran',
    isValid: true,
    hasLoggedIn: true,
    log2: function () {
        console.log('log2 hello');
    }
};
logger.log('hello interface!');
logger.log2();
var p1 = {
    print: function () { return console.log('printing'); }
};
//calling print thru p1
p1.print();
var newPrint = {
    print: function () {
        console.log('printing from new print class');
        console.log("".concat(this.name, " ").concat(this.isValid, " ").concat(this.hasLoggedIn));
    },
    log: function (msg) {
        console.log('new print log');
    },
    name: "Nikhil",
    isValid: true,
    hasLoggedIn: false,
    log2: function () {
        console.log('Log2 from new print implementation');
    }
};
newPrint.log('hi there');
newPrint.log2();
newPrint.print();
