
class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	};

	//добавляет новый звонок в коллекцию существующих
	addClock(time, func, id) {
		if (!id) throw new Error('Параметр id не передан в метод addClock()');

		if (this.alarmCollection.some(item => item.id === id)) {
			console.error(`Звонок с данным id ${id} уже зарегестрирован!`);
			return;
		};
		this.alarmCollection.push({ id, time, func });
	};

	//удаляет определённый звонок по id
	removeClock(id) {
		let arrLength1 = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
		let arrLength2 = this.alarmCollection.length;
		return arrLength1 === arrLength2;

	};

	// возвращает текущее время в строковом формате HH:MM
	getCurrentFormattedTime(_time) {
		const currentDate = _time ? _time : new Date();
		const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
		const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
		return `${hours}:${minutes}`;
	};

	//запускает все звонки
	start() {
		let checkAlarm = checkClock.bind(this);
		function checkClock(alarm) {
			if (alarm.time === this.getCurrentFormattedTime()) alarm.func();
		}
		if (!this.timerId) this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkAlarm(item)),
			1000);
	};

	//останавливает выполнение всех звонков
	stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		};
	};

	//печатает все звонки
	printAlarms() {
		this.alarmCollection.forEach(item => console.log(`id = ${item.id} time = ${item.time}`));
	};

	//удаляет все звонки
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	};
};




function testCase() {
	let clock = new AlarmClock();
	clock.addClock(clock.getCurrentFormattedTime(), () => console.log('Пора вставать!'), 55);
	let currentDate = new Date();
	currentDate.setMinutes(currentDate.getMinutes() + 1);
	clock.addClock(clock.getCurrentFormattedTime(currentDate), () => { console.log('Давно Пора встать!'); clock.removeClock(215) }, 215);
	currentDate = new Date();
	currentDate.setMinutes(currentDate.getMinutes() + 2);
	clock.addClock(clock.getCurrentFormattedTime(currentDate),
		() => { console.log('Давно Давно Пора уже встать!'); clock.stop(); clock.clearAlarms() }, 2785);
	clock.printAlarms();
	clock.start();
};