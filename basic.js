var counterVal = 0;

function tickUp() {
	counterVal += 1;
	document.getElementById("counter").innerText = counterVal;
}

function tickDown() {
	if(counterVal > 0) {
		counterVal -= 1;
		document.getElementById("counter").innerText = counterVal;
	}
}

function runForLoop() {
	let result = "";
	let i = 0;
	
	for(i; i < counterVal; i++) {
		result += i + ", ";
	}
	result += i;
	document.getElementById("forLoopResult").innerText = result;
}

function showOddNumbers() {
	let oddResult = "";
	let i = 0;
	
	for(i; i <= counterVal; i++) {
		if(i%2 == 1) {
			oddResult += i + ", ";
		}
	}
	
	document.getElementById("oddNumberResult").innerText = oddResult;
}

function addMultiplesToArray() {
	const multiples = [];
	const gather = [];
	let y = 0;
	for(let i = 1; i <= counterVal; i++) {
		if(i%5 == 0)
		{
			gather.push(i);
		}
	}
	for(let i = gather.length - 1; i >= 0; i--) {
		multiples[y] = gather[i];
		y++;
	}
	console.log(multiples);
}

function printCarObject() {
	const Car = {
		cType: document.getElementById("carType").value ,
		cMPG: document.getElementById("carMPG").value ,
		cColor: document.getElementById("carColor").value
	}
	console.log(Car);
}

function loadCar(num) {
	switch(num) {
		case 1: 
			document.getElementById("carType").value = carObject1.cType;
			document.getElementById("carMPG").value = carObject1.cMPG;
			document.getElementById("carColor").value = carObject1.cColor;
			break;
		case 2: 
			document.getElementById("carType").value = carObject2.cType;
			document.getElementById("carMPG").value = carObject2.cMPG;
			document.getElementById("carColor").value = carObject2.cColor;
			break;
		case 3: 
			document.getElementById("carType").value = carObject3.cType;
			document.getElementById("carMPG").value = carObject3.cMPG;
			document.getElementById("carColor").value = carObject3.cColor;
	}
}

function changeColor(num) {
	switch(num) {
		case 1: 
			document.getElementById("styleParagraph").style.color = "red";
			break;
		case 2: 
			document.getElementById("styleParagraph").style.color = "green";
			break;
		case 3: 
			document.getElementById("styleParagraph").style.color = "blue";
	}
}