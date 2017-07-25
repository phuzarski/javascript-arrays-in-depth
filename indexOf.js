// Array.prototype.indexOf();

var family = ['Shane', 'Sally', 'Isaac', 'Kittie'];

var kittieExist = family.indexOf('Kittie') > -1;
console.log(kittieExist);
console.log(family.indexOf('Kittie')); // -1 if search failed!

var SallyExist = family.indexOf('Sally', 1)

console.log(SallyExist);
console.log('-----------');

var shane = {
    name: 'Shane'
}
var sally = {
    name: 'Sally'
}
var kittie = {
    name: 'Kittie'
}

var family = [shane, sally, kittie];
console.log(family.indexOf(kittie));

console.log('-----------');

var whitelist = ['.css', '.js'];

var events = [
    {
        file: 'css/core.css'
    },
    {
        file: 'js/app.js'
    },
    {
        file: 'index.html'
    }
];

 var filtered = events.filter(event => {
     var ext = require('path').extname(event.file);
     return whitelist.indexOf(ext) > -1
 })

 console.log(filtered);