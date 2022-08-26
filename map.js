const numbers = [2, 8, 4, 6, 3]

const output = []
for (const number of numbers) {
    output.push(number*2)
}
console.log(output)

const makeDirect = numbers.map(x => x * 2)
 console.log(makeDirect)