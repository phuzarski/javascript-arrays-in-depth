// Array.prototype.concat();

var items = [1, 2];

var names = ['Ozzy', 'Osbourne'];

console.log(names.join(' - '))

console.log('------------->');

var help = [
    'Usage',
    ' foo-app <input>'
];

if (process.argv[2] === 'help') {
    console.log(help.join('\n'));
}

var name = 'Ozzy Osbourne'
var upper = name.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');

console.log(upper);