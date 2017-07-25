// const items = [
//     {
//         firstname: 'shane',
//         lastname: 'osbourne'
//     },
//     {
//         firstname: 'sally',
//         lastname: 'osbourne'
//     }
// ];

const items = [1, 2, 3, 4, 5]
const items2 = ['1', '2', '3', '4', '5']
// items.forEach(person => {
//     console.log(person.firstname + ' ' + person.lastname);
// })

const mapped = items.map(item => item * 2)
const mapped2 = items2.map(item => Number(item));

console.log(items);
console.log(items2);
console.log(mapped);
console.log(mapped2);

const items3 = ['  shane', 'sally ']
const mapped3 = items3.map(x => x.trim());

console.log(mapped3);

const items4 = [
    {
        firstname: 'Shane',
        lastname: 'Osbourne'
    },
    {
        firstname: 'sally',
        lastname: 'osbourne'
    }
];

const mapped4 = items4.map(x => {
    return {
        firstname: x.firstname,
        lastname: x.lastname,
        fullname: x.firstname + ' ' + x.lastname
    };
})

mapped4.forEach(person => console.log(person.fullname))