let arr1 = "10 5 20 100 50 300";


let rsult = arr1.split(" ");
rsult.forEach((e) => {
    if (e < 20) {
        
        console.log(e)
    }
})
console.log(rsult)


let caracters = "os1 os10 os12 os8 os6s";
let caractersRg = /os[5-9]s/ig;
console.log(caracters.match(caractersRg));


let letter = "aAbBcCdD122#h$%^@#";
let just = /[a-z]/ig;
console.log(letter.match(just));

let mail = "@@@.com hg.org jh&4.com kjhg#@%.io khhk.org";
let valid = /.com/ig;
console.log(mail.match(valid))

let names = "hi good food";
let re = /(good|od)/ig;
console.log(names.match(re));


let serials = "s100s s3000s s50000s s950000s";
let one = /s\d\d\ds/ig;
let two = /s(\d\d\d\d|\d\d\d\d\d)s/ig;
let three = /s\d\d\d\d+s/ig;
    
    
console.log(serials.match(one));
console.log(serials.match(two));
console.log(serials.match(three));

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
console.log(ip.match(/2001:db8:3333:4444:5555:6666:7777:8888/i));

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialRe = /\bos(\d+)?o\b/ig;
console.log(specialNames.match(specialRe))
// Output
// ['Os10O', 'OsO', 'Os100O']

let phone = "+(995)-123 (4567)";
let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;
console.log(phone.match(phoneRe));

let rre = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// /https?   => protocol and charcter ? it maen posible found or no
// : \/\/    => just tell to divice this charcters it,s mine
// (?: [-\w] +\.) ? =>tell the broser posibel found character one or more
// ([-\w] +) =.
// \.\w + (?: \.\w +)? posible to find a ?: and dot and letter or not
// \/?.*   => finially you can find /?. once or more


let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let Re = /\d+(\/|\s\-\s|\s)?\d+(\/|\s\-\s|\s)?\d+/g; 
console.log(date1.match(Re)); // "25/10/1982"
console.log(date2.match(Re)); // "25 - 10 - 1982"
console.log(date3.match(Re)); // "25 10 1982"
console.log(date4.match(Re)); // "25 10 82"


let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let Rre = /(http|https)?:\/\/?(\w{3})?.?\w+.\w+/; 

console.log(url1.match(Rre));
console.log(url2.match(Rre));
console.log(url3.match(Rre));
console.log(url4.match(Rre));
console.log(url5.match(Rre));