let images = document.querySelectorAll(".gallery-img");
   
function changePhoto(e){
    let targetElement = e.target;
    let mainImage = document.querySelector("#main-image");
    mainImage.src = targetElement.getAttribute('src');   
}

images.forEach(image => image.addEventListener("click", changePhoto));

