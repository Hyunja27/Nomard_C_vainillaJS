alert("Hello!");

const spark = 100;

const yjung = 10;

const skim = "zerg jonna errorure....";

let x = spark + yjung;

console.log("skim :" + skim);
console.log(spark + yjung);
console.log(spark + yjung + skim);
console.log(x);

x = x + spark;

console.log(x);


const amIHandsome = true;
let butAmIBegger = false;
let Money;

console.log(amIHandsome);
console.log(butAmIBegger);
console.log(Money);
Money = "this is spark's money";

console.log(Money);

let people = [spark, yjung, skim];

console.log(people);

people.push(undefined);

console.log(people);
console.log(people[2]);

const sskim = {
    zergLevel : 100,
    protossLevel : 0,
    terranLevel : 0,
    jonnaLevel : 9999
};

function skkim() {
    console.log("skim");
}

const sspark = {
    zergLevel : 99,
    protossLevel : 99999,
    terranLevel : 99,
    jonnaLevel : 0,
    sayHello: function(Person) {
        console.log("Hello! " + Person);
    },
};

console.log(sskim);
console.log(sspark);

sskim.zergLevel = 9999;
sskim.protossLevel = 99999;
sskim.terranLevel = 99;
sskim.jonnaLevel = 0;
sskim.mouseControlLevel = 99999;


// sskim = sspark;

console.log(sskim);
console.log(sspark);

sspark.sayHello("spark")