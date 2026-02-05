const numbers = [1, 2, 3, 4, 5]

const sumNum = numbers.reduce((acc, num) => {
	return acc + num
})

const nums = [2, 3, 4]
const product = nums.reduce((acc, num) => acc * num, 2)

console.log(product)
