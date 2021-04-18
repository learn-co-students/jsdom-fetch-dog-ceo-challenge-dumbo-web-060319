const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedsUrl = 'https://dog.ceo/api/breeds/list/all'
const dogsDiv = document.querySelector("#dog-image-container")
const dogBreedsUl = document.querySelector("#dog-breeds")
const breedDropMenu = document.querySelector("#breed-dropdown")

// Instead of DOM Content Loaded this program uses defer in the HTML Script Tags 
// The fetches triggered upon page load are put inside of functions
// Both the random 4 dogs and breeds list fetches are manually called in the code below

fetchDogs()

function fetchDogs() {
  fetch(imgUrl)
  	.then(response => response.json())
		.then(addDogsToDom)
}

function addDogsToDom(data) {
	data.message.forEach(dog => {
		let dogImg = document.createElement("img")
		dogImg.src = `${dog}`
		dogsDiv.appendChild(dogImg)
	})
	fetchBreeds()
}

function fetchBreeds() {
	fetch(breedsUrl)
	.then(response => response.json())
	.then(addBreedsToDom)
}

function addBreedsToDom(data) {
	Object.keys(data.message).forEach(breed => { 
		let dogBreedLi = document.createElement("li")
		dogBreedLi.innerHTML = breed
		dogBreedsUl.appendChild(dogBreedLi)
	})
}

// Dog Breed List Item Color Change Event Listener On Click

dogBreedsUl.addEventListener("click", changeBreedColor)

function changeBreedColor(event) {
	event.target.style.color = "blue"
}

// Filter Breeds by Letter

breedDropMenu.addEventListener("change", filterBreeds);

function filterBreeds(event) {
	const breedLis = document.querySelectorAll("li");
	breedLis.forEach(breed => {
		breed.style.dislay = "list-item";
		if (breed.innerText[0] !== event.target.value) {
			breed.style.display = "none";
		} 
	})
}

