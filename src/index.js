//console.log('%c HI', 'color: firebrick')

const main = document.querySelector('#dog-image-container');
const dogList = document.querySelector('#dog-breeds');
const dropDown = document.querySelector("#breed-dropdown");



// --------- FETCH IMAGES -------- RENDER //

function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(response => renderImages(response))
    }
      
function renderImages(data) {
    data.message.forEach(image => {
    const img = document.createElement('img')
    img.src = image;
    img.style.width="400px";
    main.appendChild(img)
    })
  }

//------- FETCH BREEDS ------ RENDER//

function fetchBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(response => renderBreeds(response))
  }

function renderBreeds(response){
    const breedList = response.message;

    for (let breed in breedList) {
        let newLi = document.createElement("li");
        newLi.innerText = breed;
        newLi.setAttribute("letter", newLi.innerText.charAt(0))
        dogList.append(newLi);
        }
    //-- change Colors ---//
        let allLis = document.querySelectorAll('li');
        allLis.forEach(eachLi);
        function colorChange(event){
            event.target.style.color = 'green';
        }
        function eachLi(li){
            li.addEventListener('click', colorChange)
        }
  } 

// ------- DROPDOWN  --------//

function listDropdown(){
    let allLis = document.querySelectorAll('li');
    let selected = dropDown.value;

    allLis.forEach(function(li){
        if(li.innerText.charAt(0) != selected){
            li.style.display="none";
        }
        else {
            li.style.display="block";
        }
    });
}

dropDown.addEventListener('change', listDropdown);


document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
  })