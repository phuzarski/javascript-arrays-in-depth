const pets = [ 'cat', 'dog']
const wishlist = ['hamster', 'horse', 'snake']

pets.push.apply(pets,wishlist)

console.log(pets);