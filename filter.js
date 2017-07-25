// Array.prototype.filter();

var items = [1, 2, 3, 4, 5];
var filtered = items.filter(x => x > 3);

console.log(typeof(filtered));

var people = [
    {
        name: 'shane',
        pets: ['cat', 'dog']
    },
    {
        name: 'simon',
        pets: ['horse']
    },
    {
        name: 'ben',
        pets: []
    }
];

var filtered2 = people.filter(x => x.pets.length);

console.log(filtered2);

console.log('---------');

var lessons = [
    {
        title: 'javascript',
        views: 960,
        tags: ['array', 'join']
    },
    {
        title: 'concat',
        views: 1050,
        tags: ['array', 'concat']
    },
    {
        title: 'slice',
        views: 2503,
        tags: ['array', 'slice']
    },
    {
        title: 'bind',
        views: 2500,
        tags: ['functions', 'bind']
    }
]

var minViews = 1000;
var searchTerm = 'array';
var filteredLessons = lessons
    .filter(x => x.tags.indexOf(searchTerm) > -1)
    .filter(x => x.views > minViews)
    .sort((a,b) => b.views - a.views)
    .map(x => `<li>${x.title}</li>`)
    .join('\n');

    console.log(`<ul>${filteredLessons}</ul>`);