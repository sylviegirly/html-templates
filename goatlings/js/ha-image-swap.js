// define your images here
var images = [
    "https://i.ibb.co/5X2QTXRw/6.png",
    "https://i.ibb.co/j9vg3X88/5.png",
    "https://i.ibb.co/pBF36JpF/3.png",
    "https://i.ibb.co/Rk1Z0nxM/1.png",
    "https://i.ibb.co/qFcVFBJB/2.png",
    "https://i.ibb.co/DDfRL1WN/4.png"
];

// this chooses a random number from all available image indices
var randomImage = images[Math.floor(Math.random() * images.length)];
console.log(randomImage);
// make the URL into a proper image tag
var image = "<img src='" + randomImage + "' class='image-border'>";
// append to the div
document.getElementById("ha-shuffle").innerHTML = image;
