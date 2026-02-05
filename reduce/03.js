const products = [
	{ category: 'fruit', name: 'apple', price: 10 },
	{ category: 'fruit', name: 'banana', price: 5 },
	{ category: 'vegetable', name: 'carrot', price: 3 },
	{ category: 'fruit', name: 'orange', price: 8 },
	{ category: 'vegetable', name: 'potato', price: 2 },
]

const groupedByCategory = products.reduce((acc, product) => {
	if (!acc[product.category]) {
		acc[product.category] = []
	}
	acc[product.category].push(product)

	return acc
}, {})

console.log(groupedByCategory)
// {
//   fruit: [
//     { category: 'fruit', name: 'apple', price: 10 },
//     { category: 'fruit', name: 'banana', price: 5 },
//     { category: 'fruit', name: 'orange', price: 8 }
//   ],
//   vegetable: [
//     { category: 'vegetable', name: 'carrot', price: 3 },
//     { category: 'vegetable', name: 'potato', price: 2 }
//   ]
// }
