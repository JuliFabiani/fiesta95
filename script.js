window.addEventListener('DOMContentLoaded', function() {
  const imageContainer = document.getElementById('image-container');
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  
  const min = 1; // Inclusive
  const max = 100; // Exclusive
  
  let cycle = 0;
  let randomImages = [];
    
  function getRandomImageName() {
    let num;
    if (randomImages.length === max - min) {
      randomImages = [];
    }
    do {
      num = Math.floor(Math.random() * (max - min) + min);
    } while (randomImages.includes(num));
    randomImages.push(num);
    return `imagen${num.toString().padStart(4, '0')}.jpg`;
  }

  
  function showImage(imgElement, imgName) {
    imgElement.src = imgName;
    imgElement.classList.remove('hide');
    imgElement.classList.add('show');
  }
  
  function hideImage(imgElement) {
    imgElement.classList.remove('show');
    imgElement.classList.add('hide');
  }

  function swapImages() {
    if (image1.classList.contains('show')) {
      hideImage(image1);
      showImage(image2, cycle % 6 === 0 ? 'FOTO-ESTOMBA.jpg' : getRandomImageName());
    } else {
      hideImage(image2);
      showImage(image1, cycle % 6 === 0 ? 'FOTO-ESTOMBA.jpg' : getRandomImageName());
    }
    const interval = cycle % 6 === 0 ? 15000 : 3000;
    setTimeout(swapImages, interval);
    console. log(cycle + " " + interval);
    cycle++;
  }

  
  // Start the cycle
  swapImages();
});
