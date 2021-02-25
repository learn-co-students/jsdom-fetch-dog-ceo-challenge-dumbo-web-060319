console.log('%c HI', 'color: firebrick')



function addImageToDom(data){
    let newDiv = document.querySelector("#dog-image-container");
    let messages = data.message;
    for (let i = 0; i < messages.length; i++){
        let image = document.createElement("img");
        image.src=messages[i];
        newDiv.append(image);
    }  
}

function fetchDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(data => addImageToDom(data));
}


function addBreedsToDom(data){
    let dogList = document.querySelector("#dog-breeds");
    let breeds = Object.keys(data["message"]);
    for (let i = 0; i < breeds.length; i++){
        let listItem = document.createElement("li");
        listItem.innerText = breeds[i];
        listItem.dataset.dogBreed = listItem.innerText[0];
        listItem.addEventListener("click", function(){
            listItem.style.color = "blue";
        })
        dogList.append(listItem);
    }
}

function fetchBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(data => addBreedsToDom(data));
}


 document.addEventListener("DOMContentLoaded", function(){
     fetchDogs();
     fetchBreeds();

 });

 let dropdown = document.querySelector("#breed-dropdown");
 dropdown.addEventListener("change", function(){
    let val = event.target.value
    let allLis = document.querySelectorAll("li");
    
    for( let i = 0; i < allLis.length; i++){
        allLis[i].hidden = (allLis[i].innerText[0] != val);

        // if (allLis[i].dataset.dogBreed != val){
        // if (allLis[i].innerText[0] != val) {
        //     allLis[i].hidden = true;
        // } else {
        //     allLis[i].hidden = false;
        // }
    }
})


  
 