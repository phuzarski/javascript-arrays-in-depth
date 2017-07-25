const items = [1, 2, 3, 4, 5];

const sum = items.reduce((prev, item) => {
    // console.log('prev ' + prev, 'item', item);
    return prev + item;
}, 0);

// fn (1,2) => 3
// fn (3,3) => 6
// fn (6,4) => 10
// fn (10, 5) => 15
// console.log(sum);

const albums = [
    {
        title: 'Holiday in Spain',
        images: ['01.jpg', '02.jpg']
    },
    {
        title: 'House renovation',
        images: ['03.jpg', '04.jpg', '05.jpg']
    }
]

const numItems = albums.reduce((prev, next) => {
    return prev + next.images.length;
}, 0)

const images = albums.reduce((prev, next) => {
    return prev.concat(next.images);
}, [])

console.log(numItems);
console.log(images);


const users = [
    {
        id: '01',
        name: 'shane'
    },
    {
        id: '02',
        name: 'sally'
    }
]

const newUser = users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
}, {})

console.log(newUser['02'].name);