console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';


fetchImage();
fetchBreed();
filterNames();

function fetchImage() {
  fetch(imgUrl)
  .then(response => response.json())
  .then(json => renderImages(json))
}

function fetchBreed() {
  fetch(breedUrl)
  .then(response => response.json())
  .then(json => renderBreed(json))
}

function renderImages(json) {
  json.message.forEach(function(oneImage){
    const image = document.createElement('img');
    const ul = document.querySelector('#dog-image-container');
    image.src = oneImage;
    ul.append(image);
  })
}

function renderBreed(json) {
  for (let breedLink in json.message ) {
    const breed = document.createElement('li');
    const ul = document.querySelector('#dog-breeds');
    

    if (json.message[breedLink].length === 0) {
      const breed = document.createElement('li');
      breed.className = 'links';
      breed.innerText = breedLink;
      breed.addEventListener('click', function(){
        breed.style.color = 'blue';
      });
      ul.append(breed);
    } else {
      json.message[breedLink].forEach(function(innerBreed){
        const breed = document.createElement('li');
        breed.className = 'links';
        breed.innerText = `${innerBreed} ${breedLink}`;
        breed.addEventListener('click', function(){
          breed.style.color = 'blue';
        });
        ul.append(breed);
      })
    }
  }
}

function filterNames() {
  // const dropDown = document.querySelector('#breed-dropdown');
  // const breeds = document.querySelectorAll('li');
  // debugger
  // breeds.forEach(function(breed){
  //   if(dropDown.value !== breed.innerText.charAt(0)){
  //     breed.style.display = 'none';
  //   }
  // })

  const dropDown = document.querySelector('#breed-dropdown');
  // dropDown.addEventListener('click', )
  // console.log(dropDown)
  dropDown.addEventListener('change', function(e){
    const listOfAll = document.querySelectorAll('li')
    listOfAll.forEach(function(breed){
      debugger
      if (dropDown.value === breed.innerText.charAt(0) ) {
        breed.style.color = 'red'
        breed.style.display = 'block'
      } else {
        breed.style.display = 'none'
      }
    })
  })


}



