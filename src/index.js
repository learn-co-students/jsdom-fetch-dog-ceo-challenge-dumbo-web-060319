console.log('%c HI', 'color: firebrick')

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// document.addEventListener("DOMContentLoaded", function(){
//   var dropDown = document.querySelector("#breed-dropdown")
// })
document.addEventListener("DOMContentLoaded", breedDropDown)

fetchBreed();

function fetchBreed() {
  
  fetch(breedUrl)
  .then(response => response.json())
  .then(json => renderBreed(json))

}

function changeColor(event){
  event.target.style.color = "#"+(Math.random()*16777215|0).toString(16)
}

function renderBreed(json) {
 
  for (let breedLink in json.message) {
    if (json.message[breedLink] != undefined) {
      for (let nestedBreed of json.message[breedLink]) {
        // console.log(nestedBreed)

        let breed = document.createElement("li");
        // let nestedBreed = document.createElement("ul")
        let ul = document.querySelector("#dog-breeds");

        breed.className = "breedLink"
        breed.innerText = `${nestedBreed} ${breedLink}`;
        ul.append(breed);
        breed.addEventListener("click", changeColor)
      }
    }
    let breed = document.createElement("li");
    // let nestedBreed = document.createElement("ul")
    let ul = document.querySelector("#dog-breeds");

    breed.className = "breedLink"
    breed.innerText = breedLink;
    breed.addEventListener("click", changeColor)
    ul.append(breed);
  }
  
}

// var lastIndex = "";

function breedDropDown(){
  let dropDown = document.querySelector("#breed-dropdown")
  
  dropDown.addEventListener("change", function(event){
    let index = dropDown.selectedIndex
    let allBreedsList = document.querySelectorAll("li")
    
    allBreedsList.forEach(
      function(currentIndex){
      if (event.target.value != currentIndex.innerText[0]){
        currentIndex.style.display = "none"
      }
      else {
        currentIndex.style.display = "block"
      }
    })
    // console.log(index)

  })

}

  // for(i=0; i<dropDown.options.length;i++){
  //   //  debugger
  //   dropDown.options[i].addEventListener("change", function(){
  //     console.log(dropDown.options[i].value) 
  //     debugger
  //   })

  // }

  // dropDown.selectedIndex.addEventListener("click", function(){
  //   debugger
  // })
  // dropDown.options.prototype.forEach(
  //   function(currentValue, currentIndex, listObj){
  //   debugger
  // })
  // for (let option in dropDown.options) {
  //   debugger
  // }
  // dropDown.addEventListener("click", function(){
  //   debugger
  // })
  // console.log(dropDown)
  // debugger

  // if(dropDown.selectedIndex > 0 && dropDown.selectedIndex != lastIndex) {
  //   console.log("yo")
  // }
  // allBreedsList.forEach( 
  //   function(currentValue, currentIndex, listObj) { 
  //     console.log(currentValue + ', ' + currentIndex + ', ' + this); 
  //   },
  //   'myThisArg'
  // );
// }
// let dropDown = document.querySelector("#breed-dropdown");
// if(dropDown.selectedIndex > 0 && dropDown.selectedIndex != lastIndex) {
//   if( affenpinscher === dropDown.options[dropDown.selectedIndex].value)
//     console.log("yo");
//   lastIndex = dropDown.selectedIndex;
//   }
//   else {
//   lastIndex = "";
//   }
  
  // const dropDown = document.querySelector("#breed-dropdown")
  


// function dropDownList(){

//   console.log("yo")
// }


