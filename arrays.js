var items = [1, 2];
var newItems = items.concat([3, 100], [[0, 1], 15], 'string', undefined, null);

console.log(newItems);

var people = [
    {
        name: "shane"
    },
    {
    name: "sally"
    }
]

var people2 = [
    {
        name: "shane"
    },
    {
    name: "sally"
    }
]

people.forEach(person => {
    console.log(person.name);
})

console.log("-------------");

people.concat(people2).forEach(person => {
    console.log(person.name);
})