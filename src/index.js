// console.log('%c HI', 'color: firebrick')

function fetchdogs() {
  console.log("inside fetchdogs")
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(json => showdogs(json))

  return fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => showBreeds(json))
}
  function showdogs(json){
    console.log("inside showdogs")
    const ul = document.querySelector('#dog-img')
      json.message.forEach(dog =>{
        ul.innerHTML +=  `<li><img src="${dog}"/></li>`
      })
  }

function showBreeds(json) {
    const ul = document.querySelector("#dog-breeds")
        for (const key in json.message) {
            ul.innerHTML += `<li class="listItem"> ${key} </li>`
        }
    const breeds = document.querySelectorAll(".listItem")
        breeds.forEach(breed => {
            breed.addEventListener("click", function(e) {
                breed.style.color = randomColors()
            })
        })

      }

  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

document.addEventListener('DOMContentLoaded', function() {
  fetchdogs()

})













































// // console.log('%c HI', 'color: firebrick')
//
// function fetchdogs() {
//   console.log("inside fetchdogs")
//   fetch('https://dog.ceo/api/breeds/image/random/4')
//   .then(resp => resp.json())
//   .then(json => showdogs(json))
//
//   return fetch('https://dog.ceo/api/breeds/list/all')
//   .then(resp => resp.json())
//   .then(json => showBreeds(json))
// }
//
//
//
//   function showdogs(json){
//     console.log("inside showdogs")
//     const ul = document.querySelector('#dog-img')
//
//       json.message.forEach(dog =>{
//         ul.innerHTML +=  `<li><img src="${dog}"/></li>`
//
//       })
//
//   }
//
// function showBreeds(json) {
//     const ul = document.querySelector("#dog-breeds")
//         for (const key in json.message) {
//             ul.innerHTML += `<li class="listItem"> ${key} </li>`
//         }
//     const breeds = document.querySelectorAll(".listItem")
//         breeds.forEach(breed => {
//             breed.addEventListener("click", function(e) {
//                 breed.style.color = randomColors()
//             })
//         })
//
//       }
//
//
//   function randomColors() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16);
//   }
//
// document.addEventListener('DOMContentLoaded', function() {
//   fetchdogs()
//
// })
