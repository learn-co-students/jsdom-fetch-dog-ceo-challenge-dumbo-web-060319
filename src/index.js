console.log('%c HI', 'color: firebrick')

function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(json => postBreed(json));
}

function postBreed(json){
    const ulId = document.querySelector('#dog-breeds')
    for (let breed in json.message) {
        if (json.message[breed].length > 0) {
            json.message[breed].forEach(e => {
                let tempLi = document.createElement('li');
                tempLi.className = 'breed';
                tempLi.innerHTML = `${e} ${breed}`;
                tempLi.addEventListener('click', e => {
                    tempLi.style.color = 'blue';
                })
                ulId.append(tempLi);
            })
        } else {
            let li = document.createElement('li');
            li.className = 'breed'
            li.innerHTML = `${breed}`;
            li.addEventListener('click', e => {
                li.style.color = 'blue';
            })
            ulId.append(li);
        }

    }
}

function fetchImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(response => response.json())
    .then(json => postImage(json));
}

function postImage(json){
    const div = document.querySelector('#dog-image-container')
    const ul = document.createElement("ul");
    div.append(ul);
    json.message.forEach(e => {
        let tempLi = document.createElement('li');
        tempLi.innerHTML = `<img src=${e} />`;
        ul.append(tempLi);
    });
}

function filter(){
    let dropdown = document.querySelector('#breed-dropdown')
    dropdown.addEventListener('change', e => {
        let breedList = document.querySelectorAll('.breed')
        // breedList.forEach(breed => {
        for(i = 0; i < breedList.length; i++) {    
            if (breedList[i].innerText.toLowerCase().charAt(0) == e.target.value) {
                breedList[i].style.display = "block";
            } else {
                breedList[i].style.display = "none";
            }
        }
    })    
}

document.addEventListener("DOMContentLoaded", e => {
    fetchImages();
    fetchBreeds();
    filter();
})




