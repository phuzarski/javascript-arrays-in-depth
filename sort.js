var items = [10, 20, 30, 50, 10, 2, 11]

items.sort((a,b) => a - b);
console.log(items);

var lessons = [
    {
        title: 'Javascript Arrays',
        views: 1000
    },
    {
        title: 'Slice cos tam',
        views: 1050
    },
    {
        title: 'Join',
        views: 1025
    }
]

var list = lessons 
            .sort((a,b) => b.views - a.views)
            .map(x => `<li>${x.title} (${x.views})</li>`)
            .join('\n');

var output = `<ul>\n${list}\n</ul>`;
console.log(output);