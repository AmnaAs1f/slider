// setTimeout(myfunction , 5000);

// function myfunction(){
//     document.body.style.background= 'blue'
// }

// setInterval(mySecondfunction , 2000);
//     function mySecondfunction(){
//         alert ("hello World")
//     }
let mainImage = document.getElementById('sliderimg');
let otherImages = ['s2.avif', 's3.avif', 's4.avif', 's5.avif']; 
let currentIndex = 0;

function changeImage() {
    mainImage.src = otherImages[currentIndex];
    currentIndex = (currentIndex + 1) % otherImages.length;
}

setInterval(changeImage, 2000);
