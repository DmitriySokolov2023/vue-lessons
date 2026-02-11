const products = [
	{
		id: 1,
		name: 'iPhone 14 Pro',
		category: 'Электроника',
		price: 999.99,
		inStock: true,
		rating: 4.8,
		description: 'Смартфон от Apple с камерой 48 Мп',
	},
	{
		id: 2,
		name: 'Ноутбук Dell XPS 13',
		category: 'Электроника',
		price: 1299.99,
		inStock: true,
		rating: 4.7,
		description: 'Ультрабук с дисплеем InfinityEdge',
	},
	{
		id: 3,
		name: 'Футболка хлопковая',
		category: 'Одежда',
		price: 24.99,
		inStock: true,
		rating: 4.5,
		description: 'Хлопковая футболка базового кроя',
	},
	{
		id: 4,
		name: "Джинсы Levi's 501",
		category: 'Одежда',
		price: 79.99,
		inStock: false,
		rating: 4.6,
		description: 'Классические прямые джинсы',
	},
	{
		id: 5,
		name: 'Кофеварка Delonghi',
		category: 'Бытовая техника',
		price: 299.99,
		inStock: true,
		rating: 4.4,
		description: 'Автоматическая кофемашина',
	},
	{
		id: 6,
		name: "Книга 'JavaScript для профессионалов'",
		category: 'Книги',
		price: 39.99,
		inStock: true,
		rating: 4.9,
		description: 'Подробное руководство по JavaScript',
	},
	{
		id: 7,
		name: 'Беговая дорожка',
		category: 'Спорт',
		price: 899.99,
		inStock: true,
		rating: 4.3,
		description: 'Электрическая беговая дорожка',
	},
	{
		id: 8,
		name: 'Наушники Sony WH-1000XM5',
		category: 'Электроника',
		price: 329.99,
		inStock: true,
		rating: 4.8,
		description: 'Беспроводные наушники с шумоподавлением',
	},
]

const groupProduct = products.reduce((acc, prod) => {
	if (!acc[prod.category]) {
		acc[prod.category] = []
	}
	acc[prod.category].push(prod)

	return acc
}, {})

console.log(groupProduct)
