let numbers = [23,3,34,3345,34,56,67]

let nechet = 0
let chet = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        nechet++
    }else{
        chet++
    }
}


console.log(nechet);
console.log(chet)


const Shumkar = {
    name: 'Shumkar',
    age: 14,
    friends:{
        Azat:{
            name: 'Azat',
            age:78,
        },
        tima:{
            name: 'Timur',
            age:15,

        }
    }
}

console.log(Shumkar.name)
console.log(Shumkar.friends.Azat)
console.log(Shumkar.friends.tima);