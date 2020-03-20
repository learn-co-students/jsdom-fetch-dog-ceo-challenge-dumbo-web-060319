console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    getDogs()
    getBreeds()
    // filter()
  })
  

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function getDogs() {
     fetch(imgUrl) 
    .then(response => response.json())
    .then(json => showDogs(json))
}

function showDogs(json) {
    const ul = document.querySelector("#dog-images") 
        json.message.forEach(dog => {
            ul.innerHTML += `<li> <img src="${dog}"/> </li>`
        })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getBreeds() {
    fetch(breedUrl) 
    .then(response => response.json())
    .then(json => showBreeds(json))
}

function showBreeds(json) {

     const ul = document.querySelector("#dog-breeds") 
        for (const key in json.message) {
            ul.innerHTML += `<li class="breed"> ${key} </li>`
        }
        const breeds = document.querySelectorAll(".breed")
        breeds.forEach(breed => {
            breed.addEventListener("click", function(e) {
                console.log(breed)
                breed.style.color = randomColors()
            })
        })

}

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

// function filter() {
//     let breedDropDown = document.querySelector("#breed-dropdown");
//     breedDropDown.value = "";
//     breedDropDown.addEventListener('change', e => {
//         document.querySelectorAll('.breed').forEach(element => {
//             // debugger
//             if (element.innerText.toLowerCase().charAt(0) == e.target.value) {
//                 element.style.display = "block";
//             }
//             else {
//                 element.style.display = "none";
//             }
//         })
//     })
// }





    // breeds.addEventListener("click", function(e) {

    // })
    // li.dataset.firstLetter = li.innerText[0];