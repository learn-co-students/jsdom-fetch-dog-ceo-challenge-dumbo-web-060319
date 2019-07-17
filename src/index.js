console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchImages() {
	fetch(imgUrl)
	.then(resp => resp.json())
	.then(json => postImage(json));
}


function postImage(json) {
	let dogImgContainer = document.querySelector("#dog-image-container");
	let listOfImages = document.createElement('ul');
	dogImgContainer.append(listOfImages);
	json.message.forEach(e => {
		let item = document.createElement('li');
		item.innerHTML = `<img src= ${e}>`;
		listOfImages.append(item);
	});
}

document.addEventListener('DOMContentLoaded', e => {
	fetchImages();
}); 