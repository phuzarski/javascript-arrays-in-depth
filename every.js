const items = ['1','2', '3', '4', '5']
const result = items.every(x => typeof x === 'string');

console.log(result);

const fields = [
    {
        field: 'email',
        value: 'shane@example.pl',
        errors: []
    },
    {
        field: 'name',
        value: '',
        errors: ['no name provided']
    }
]

const isValid = fields.filter(x => x.errors.length === 0);

console.log(isValid);

const videos = [
    {
        title: 'array methods concat',
        length: 310,
        viewed: 310
    },
    {
        title: 'arrays join',
        length: 420,
        viewed: 360
    }
]

const isComplete = videos.every(x => x.viewed === x.length )