// Array.proptype.slice()
var person = { name: 'Shane' }
var items = [1, person];
var copy = items.slice();

copy[1].name = 'Sally'

console.log(items);
console.log(copy);

console.log('-------------->');

var items2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

var copy2 = items2.slice(1, -1) // grab one item from the end

console.log(copy2);
console.log('-------------->');

var person = {
    name: 'shane-osbourne'
};

var filters = {
    'desdasd': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
};

var input = 'name | desdasd | uppercase'; // SHANE OSBOURNE

var sections = input.split('|').map(x => x.trim()); // [name, desdasd, uppercase]

var ref = person[sections[0]];

var output = sections
.slice(1)
.reduce((prev, next) => {
    if (filters[next]) {
        return filters[next].call(null, prev);
    }
    return prev
},ref)

console.log(output);