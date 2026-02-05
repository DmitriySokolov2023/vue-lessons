const text = 'hello world'
const textArr = text.split('')

const charCount = textArr.reduce((acc, char) => {
	if (char != ' ') {
		acc[char] = (acc[char] || 0) + 1
	}

	return acc
}, {})

console.log(charCount)
