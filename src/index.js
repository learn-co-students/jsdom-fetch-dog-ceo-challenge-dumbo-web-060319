console.log('%c HI', 'color: firebrick');
// URL
const dogImgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const dogBreedUrl = 'https://dog.ceo/api/breeds/list/all';

// Function to fetch the data
function getDoggieData(url, dogMethod) {
  fetch(url)
    .then(resp => resp.json())
    .then(data => dogMethod(data));
}

// Function to load the data onto the page
function getDogPicturesOnPage(json) {
  // Grab DOM elements
  let dogImageContainer = document.querySelector('#dog-image-container');

  let doggies = json['message'];
  for (const dogLink of doggies) {
    let dog = document.createElement('img');
    dog.src = dogLink;
    dog.alt = 'random dog image';
    dog.class = 'random-dog-image';
    dog.style.height = '360px';
    dogImageContainer.append(dog);
  }
}

function getDogBreedsOnPage(json) {
  // grab UL
  let dogBreedContainer = document.querySelector('#dog-breeds');
  let doggieBreeds = json['message'];
  for (const dogBreedKey in doggieBreeds) {
    if (doggieBreeds.hasOwnProperty(dogBreedKey)) {
      // debugger;

      // Get the value from the key
      const breedList = doggieBreeds[dogBreedKey];

      // if the value is an empty array
      if (breedList.length == 0) {
        // Create element
        let dogBreed = document.createElement('li');
        // make the list item's text the name of the key
        dogBreed.innerText = dogBreedKey;
        dogBreed.class = 'dog-breed-list-item';
        dogBreed.style = 'padding-bottom: 10px;cursor: pointer;';
        // append breed to dogBreed container
        dogBreedContainer.append(dogBreed);
        // dogBreed.addEventListener('click', evnt => {
        //   evnt.target.style =
        //     'padding-bottom: 10px;cursor: pointer;color:blue;';
        // });
      } else {
        // loop through array
        for (const subBreed of breedList) {
          // Create element
          let dogBreed = document.createElement('li');
          // make the list item's text the name of the key And value
          dogBreed.innerText = `${subBreed} ${dogBreedKey}`;
          dogBreed.class = 'dog-breed-list-item';
          dogBreed.style = 'padding-bottom: 10px;cursor: pointer;';
          // append breed to dogBreed container
          dogBreedContainer.append(dogBreed);
          // dogBreed.addEventListener('click', evnt => {
          //   evnt.target.style =
          //     'padding-bottom: 10px;cursor: pointer;color:blue;';
          // });
        }
      }
    }
  }

  dogBreedContainer.addEventListener('click', event => {
    event.target.style = 'color:blue;';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getDoggieData(dogImgUrl, getDogPicturesOnPage);
  getDoggieData(dogBreedUrl, getDogBreedsOnPage);
});
