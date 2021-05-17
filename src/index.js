console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogs()
{
    fetch(imgUrl)
    .then(function(response)
    {
        return (response.json());
    })
    .then(renderDogImage);
}

function fetchAllDogBreeds()
{
    fetch(breedUrl)
    .then(function(response)
    {
        return response.json();
    })
    .then(function(datatwo)
    {
        let myBreedsList = document.querySelector("#dog-breeds");
        let breeds = datatwo.message;
        for (let breedName in breeds)
        {
            let insertDog = document.createElement("li");
            insertDog.dataset.group = breedName[0];
            insertDog.style.display = "none";
            let actualBreed = document.createElement("p");
            actualBreed.textContent = breedName;
            insertDog.append(actualBreed);
            myBreedsList.append(insertDog);  
        }

        addColors();
        dropdown();
    });
}
function renderDogImage(data)
{
    let myListOfDogs = document.querySelector("#dog-image-container");
    let myList= document.createElement("ul");
    myListOfDogs.append(myList);
    let dataMessages = data.message
    for (let i=0; i < dataMessages.length; i++)
    {
        let myNewListElement = document.createElement("li");
        let myNewImage = document.createElement("img");
        myNewImage.src = dataMessages[i];
        myNewImage.style.width = "150px";
        myNewImage.style.height = "150px";
        myNewImage.style.borderRadius = "50%";
        myNewListElement.append(myNewImage);
        myList.append(myNewListElement);
    }
    myListOfDogs.append(myList);
}

function addColors()
{
    console.log("The color is blue");
    let myBreedList = document.querySelectorAll("#dog-breeds li");
    
    for (let i=0; i < myBreedList.length; i++)
    {
        myBreedList[i].addEventListener("click", function(e)
        {
            myBreedList[i].style.color = "red";
            myBreedList[i].style.fontSize = "30px";
        });
    }
}

function dropdown()
{

    let drop = document.querySelector("#breed-dropdown");
    drop.addEventListener("change", function(event)
    {
        let val = event.target.value;
        let list = document.querySelectorAll("#dog-breeds li");
        for (let i=0; i < list.length; i++)
        {
            if (list[i].dataset.group != val)
            {
                list[i].style.display = "none";
            }
            if (list[i].dataset.group == val)
            {
                list[i].style.display = "block";
            }
        }
        
    });

}


document.addEventListener("DOMContentLoaded", function()
{   
    fetchDogs();
    fetchAllDogBreeds();
});




