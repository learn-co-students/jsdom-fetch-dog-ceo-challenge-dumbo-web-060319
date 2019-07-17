console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getDoggyData(url, method) {
  fetch(url).then(response => response.json())
  .then(data => method(data)) 
}

function getDoggyImages(json){
  let imageContainer = document.querySelector("#dog-image-container");
  let imageArray = json.message
  
  for (const image of imageArray) {
    let newDogImage = document.createElement("img")
    newDogImage.alt = "Image of Dog"
    newDogImage.src = image
    imageContainer.append(newDogImage)
  }
}

function getDoggyBreeds(json){
  let breedContainer = document.querySelector("#dog-breeds");
  let breedObj = json.message 
  
  for (const breed in breedObj) {
    if (breedObj.hasOwnProperty(breed)) {
      const subBreedArray = breedObj[breed];
      
      if (subBreedArray.length == 0) {
        let breedLi = document.createElement("li")
        breedLi.innerText = breed
        breedContainer.append(breedLi)
      } else {
        for (const subBreed of subBreedArray) {
          let breedLi = document.createElement("li")
          breedLi.innerText = `${subBreed} ${breed} `
          breedContainer.append(breedLi)
        }
      }
    }
  }
  breedContainer.addEventListener("click", event => {
    event.target.style = "color:pink;";
  });
}

function filterDogBreeds(){
  let dropdown = document.querySelector("#breed-dropdown")
  dropdown.addEventListener("change", event => {
    let breedList = document.querySelectorAll('li');
    console.log(event.target.value)
    breedList.forEach(breed => {
      if (breed.innerText.charAt(0) != event.target.value) {
        breed.style.display = 'none'
      } else {
        breed.style.display = 'block'
      }
    })
  })

}

document.addEventListener("DOMContentLoaded", function(){
  getDoggyData(imgUrl, getDoggyImages);
  getDoggyData(breedUrl, getDoggyBreeds);
  filterDogBreeds();
})