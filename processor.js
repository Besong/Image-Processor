const image = document.querySelector("img")
const imageBox = document.querySelector(".image-box")

let scale = 1
let rotation = 0
let isBlurred = false
let isGrayscale = false

function scaleImage() {
    scale = scale >= 2 ? 1 :scale + 0.25;
    applyTransformations();
}

function blurImage() {
    isBlurred = !isBlurred;
    applyFilters();
}

function rotateImage() {
    rotation = (rotation + 30) % 360;
    applyTransformations();
}

function grayscaleImage() {
    isGrayscale = !isGrayscale;
    applyFilters();
}
function resetImage() {
    scale = 1;
    rotation = 0;
    isBlurred = false;
    isGrayscale = false;

    applyTransformations();
    applyFilters();

}
function applyTransformations() {
    image.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
}

function applyFilters() {
    let filters = '';
    if (isBlurred) filters += 'blur(4px) ';
    if (isGrayscale) filters += 'grayscale(100%) ';
    image.style.filter = filters.trim();
}