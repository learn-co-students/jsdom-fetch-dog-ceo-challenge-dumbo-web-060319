console.log('%c HI', 'color: firebrick');
// URL
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';

// Function to fetch the data
function getDoggieData() {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => getDogsOnPage(data));
}

// Function to load the data onto the page
function getDogsOnPage(json) {
  // Grab DOM elements
  let dogContainer = document.querySelector('#dog-breeds');

  let doggies = json['message'];
  for (const dogLink of doggies) {
    let dog = document.createElement('li');
    dog.innerHTML = `<img src=${dogLink} alt="dog image">`;
    dogContainer.append(dog);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getDoggieData();
});
