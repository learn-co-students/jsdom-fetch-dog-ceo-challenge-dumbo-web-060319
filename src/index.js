
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
  .then(response => response.json())
  .then(json => {

    let str = JSON.stringify(json, null, '\t');

    let div = document.querySelector('#dog-image-container');
    let imageList = document.createElement('ul');
    div.append(imageList);

    json.message.forEach(imageLink => {
      let image = document.createElement('img');
      image.src = imageLink
      image.style.height = "100px"
      image.style.width = "100px"
      let li = document.createElement('li')
      li.append(image)
      imageList.append(li)
    });


  })
  .catch(err => {
    let type = err.name;  //Error Type
    let msg = err.message;  //The error message
    console.log(`CATCH: ${type} ${msg}`);
  });



fetch(breedUrl)
  .then(response => response.json())
  .then(json => {

    let str = JSON.stringify(json, null, '\t');

    let breedList = document.getElementById('dog-breeds');

    for (const breed in json.message) {
      let li = document.createElement('li');
      let p = document.createElement('p');
      p.textContent = breed
      li.append(p);
      breedList.append(li)
      li.style.display = "none"

      p.addEventListener('click', function (e) {
        p.style.color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
      })
    }

  })
  .catch(err => {
    let type = err.name;  //Error Type
    let msg = err.message;  //The error message
    console.log(`CATCH: ${type} ${msg}`);
  });


let select_menus = document.querySelector('#breed-dropdown');

select_menus.addEventListener('change', (e) => {

  document.querySelectorAll('#dog-breeds li').forEach(li => {

    li.firstChild.textContent[0] == e.target.value ? li.style.display = "block" : li.style.display = "none";
  });

});


