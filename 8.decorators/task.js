function cachingDecoratorNew(func) {
  let cashe = [];
  let counter =0;

  function wrapper(...args) {

    const hash = args.join(',');

    if (hash in cashe) {
      return "Из кэша: " + cashe[hash];
  }
  if (counter >= 5) {
      delete cashe[Object.keys(cashe)[0]];
  }
  counter++;
  cashe[hash] = func(...args);
  return "Вычисляем: " + cashe[hash];
}

return wrapper;
}



function debounceDecoratorNew(func, ms) {
  let isThrottled = false;
	let timeout;

	function wrapper(...args) {
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			isThrottled = false;
			func.apply(this, args);
		}, ms);

		if (isThrottled) return;

		func.apply(this, args);
		isThrottled = true;
	};
	return wrapper;
  
}

function debounceDecorator2(func) {
  let isThrottled = false;
	let timeout;
	wrapper.count = 0;

	function wrapper(...args) {

		clearTimeout(timeout);

		timeout = setTimeout(() => {
			isThrottled = false;
			func.apply(this, args);
			wrapper.count++;
		}, ms);

		if (isThrottled) {
			return;
		};

		func.apply(this, args);
		wrapper.count++;
		isThrottled = true;

		console.log(wrapper.count);
	};
	return wrapper;
}
