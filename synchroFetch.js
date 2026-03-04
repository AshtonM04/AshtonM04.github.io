var searchedForPokemon = 0;



async function test() {
	let data = localStorage.getItem("key");
	if(data != null) {
		console.log("You have the data!");
		console.log(data);
	}
	else {
		console.log("You don't have the data!");
		localStorage.setItem("key", "This is the key item hopefully in cache");
	}
	
}





async function fetchPokemon() {
	if(localStorage.getItem(document.getElementById("pokeSearch").value) != null) {
		console.log("This pokemon is in the cache!");
		let data = localStorage.getItem(document.getElementById("pokeSearch").value);
	}
	else {
		let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + document.getElementById("pokeSearch").value);
		let data = await response.json();
		localStorage.setItem(data.name, JSON.stringify(data));
		localStorage.setItem(data.id, JSON.stringify(data));
	}
	
	let grabedPoke = localStorage.getItem(document.getElementById("pokeSearch").value);
	let data = JSON.parse(grabedPoke);
	console.log(data);
	
	document.getElementById("pokeImage").src = data.sprites.front_default;
	document.getElementById("pokeCry").src = data.cries.latest;
	
	for(let i = 1; i <= 4; i++) {
		let curSelect = document.getElementById("move" + i);
		let z = curSelect.options.length - 1;
		for(let y = z; y >= 0; y--) {
			curSelect.remove(y);
		}
	}
	
	for(let i = 1; i <= 4; i++) {
		let curSelect = document.getElementById("move" + i);
		for(let y = 0; y < data.moves.length; y++) {
			const newOption = document.createElement("option");
			newOption.innerText = data.moves[y].move.name;
			newOption.value = data.moves[y].move.name;
			curSelect.appendChild(newOption);
		}
	}
	
	searchedForPokemon = 1;
}

function addToTeam() {
	if(searchedForPokemon == 1) {
		const newDiv = document.createElement("div");
		newDiv.classList.add("teamBox");
		
		const newImage = document.createElement("img");
		newImage.src = document.getElementById("pokeImage").src;
		
		const moveList = document.createElement("ul");
		const selectedMove1 = document.createElement("li");
		const selectedMove2 = document.createElement("li");
		const selectedMove3 = document.createElement("li");
		const selectedMove4 = document.createElement("li");
		selectedMove1.innerText = document.getElementById("move1").value;
		selectedMove2.innerText = document.getElementById("move2").value;
		selectedMove3.innerText = document.getElementById("move3").value;
		selectedMove4.innerText = document.getElementById("move4").value;
		moveList.appendChild(selectedMove1);
		moveList.appendChild(selectedMove2);
		moveList.appendChild(selectedMove3);
		moveList.appendChild(selectedMove4);
		
		newDiv.appendChild(newImage);
		newDiv.appendChild(moveList);
		
		document.getElementById("pokedexScreen").appendChild(newDiv);
	}
}