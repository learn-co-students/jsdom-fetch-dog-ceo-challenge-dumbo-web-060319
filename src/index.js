// Challenge 1

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


fetch(imgUrl)
.then(function(response) {
  return response.json();
})
.then(function(j) {
  renderImages(j.message)
})

imgContainer = document.querySelector('#dog-image-container');

function renderImages(array) {
  array.forEach(function(elem) {
    img = new Image();
    img.src = elem
    imgContainer.append(img);
  });

}


// Challenge 2

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ul = document.querySelector('#dog-breeds');

fetch(breedUrl)
.then(function(response) {
  return response.json();
})
.then(function(j) {
  renderBreeds(Object.keys(j.message))
})

function renderBreeds(array) {
  array.forEach(function(elem) {
    li = document.createElement('li');
    li.dataset.dogBreed = elem[0]
    li.innerText = elem
    addLiListener(li);
    ul.append(li);
  });
}

// Challenge 3

function addLiListener(li) {
  li.addEventListener('click', function(e) {
    li.style.color = 'red';
  })
}

// Challenge 4

const dropdown = document.querySelector('#breed-dropdown');

dropdown.addEventListener('change', function(e) {
  let lis = document.querySelectorAll('li');
  let filterValue = e.target.value
  lis.forEach(function(elem) {
    if (elem.dataset.dogBreed != filterValue) {
      elem.hidden = true;

    }
    else {
      elem.hidden = false;
    }
  });
});
