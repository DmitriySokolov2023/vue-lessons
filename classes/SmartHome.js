// ===================== Базовый класс Устройство =====================
class Device {
	// Приватное поле (доступно только внутри класса)
	#powerConsumption // потребление в ваттах

	constructor(name, powerConsumption) {
		this.name = name // публичное свойство
		this.isOn = false // выключено по умолчанию
		this.#powerConsumption = powerConsumption
	}

	// Метод включения
	turnOn() {
		this.isOn = true
		console.log(`${this.name} включено.`)
	}

	// Метод выключения
	turnOff() {
		this.isOn = false
		console.log(`${this.name} выключено.`)
	}

	// Геттер для приватного поля (только чтение)
	get power() {
		return this.#powerConsumption
	}

	// Сеттер для приватного поля (с проверкой)
	set power(value) {
		if (value > 0) {
			this.#powerConsumption = value
		} else {
			console.log('Потребление должно быть положительным числом')
		}
	}

	// Метод получения статуса
	getStatus() {
		return `${this.name}: ${this.isOn ? 'вкл' : 'выкл'}, потребление: ${this.power} Вт`
	}

	// Статический метод — принадлежит самому классу, а не объектам
	static version() {
		return '1.0'
	}
}

// ===================== Класс Лампочка (наследует Device) =====================
class Light extends Device {
	constructor(name, powerConsumption, color = 'белый') {
		super(name, powerConsumption) // вызываем конструктор родителя
		this.color = color
		this.brightness = 100 // яркость в процентах
	}

	// Специфичный метод для лампочки
	setBrightness(percent) {
		if (percent >= 0 && percent <= 100) {
			this.brightness = percent
			console.log(`${this.name} яркость установлена на ${percent}%`)
		}
	}

	// Переопределяем метод getStatus (полиморфизм)
	getStatus() {
		return `${super.getStatus()}, цвет: ${this.color}, яркость: ${this.brightness}%`
	}
}

// ===================== Класс Умный дом =====================
class SmartHome {
	constructor(name) {
		this.name = name
		this.devices = [] // массив устройств
	}

	// Добавить устройство
	addDevice(device) {
		this.devices.push(device)
		console.log(`Устройство ${device.name} добавлено в дом "${this.name}".`)
	}

	// Удалить устройство по имени
	removeDevice(deviceName) {
		const index = this.devices.findIndex(d => d.name === deviceName)
		if (index !== -1) {
			const removed = this.devices.splice(index, 1)
			console.log(`Устройство ${removed[0].name} удалено.`)
		}
	}

	// Включить все устройства
	turnAllOn() {
		this.devices.forEach(device => device.turnOn())
	}

	// Выключить все устройства
	turnAllOff() {
		this.devices.forEach(device => device.turnOff())
	}

	// Суммарное потребление всех включённых устройств
	getTotalPower() {
		return this.devices
			.filter(device => device.isOn)
			.reduce((total, device) => total + device.power, 0)
	}

	// Показать статус всех устройств
	showStatus() {
		console.log(`\n--- Состояние дома "${this.name}" ---`)
		this.devices.forEach(device => console.log(device.getStatus()))
		console.log(`Общая мощность: ${this.getTotalPower()} Вт\n`)
	}
}

// ===================== ПРИМЕР ИСПОЛЬЗОВАНИЯ =====================

// 1. Создаём устройства
const lamp = new Light('Лампа на кухне', 60, 'тёплый')
const tv = new Device('Телевизор', 120)
const kettle = new Device('Чайник', 2000)

// 2. Создаём умный дом
const myHome = new SmartHome('Моя квартира')

// 3. Добавляем устройства
myHome.addDevice(lamp)
myHome.addDevice(tv)
myHome.addDevice(kettle)

// 4. Управляем устройствами
lamp.turnOn()
tv.turnOn()
lamp.setBrightness(75) // метод только у Light

// 5. Меняем потребление через сеттер (проверка приватного поля)
tv.power = 130 // корректное изменение
tv.power = -10 // ошибка, значение не изменится

// 6. Смотрим общий статус
myHome.showStatus()

// 7. Выключаем всё
myHome.turnAllOff()
myHome.showStatus()

// 8. Удаляем устройство
myHome.removeDevice('Чайник')

// 9. Статический метод вызывается без создания объекта
console.log('Версия классов устройств:', Device.version())
