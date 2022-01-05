var intervalId;

function startImageSlideShow() {
    intervalId = setInterval(setImage, 500);
}

function stopImageSlideShow() {
    clearInterval(intervalId);
}

function setImage() {
    var imageSrc = document.getElementById("image").getAttribute("src");
    var currentImageNumber = imageSrc.substring(imageSrc.lastIndexOf("/") + 1,
        imageSrc.lastIndexOf("/") + 2);
    if (currentImageNumber == 14) {
        currentImageNumber = 0;
    }
    document.getElementById("image").setAttribute("src", "../Images/photos/" +
        (Number(currentImageNumber) + 1) + ".jpg");
}