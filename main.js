let language = 'uz';
let currentImage = 0;

function changeBackground() {
  const body = document.body;
  body.style.backgroundColor = body.style.backgroundColor === 'white' ? 'black' : 'white';
  document.getElementById('logo').style.color = body.style.backgroundColor === 'white' ? 'black' : 'white';
}

function changeLanguage() {
  if (language === 'uz') {
    document.getElementById('welcome').textContent = 'Добро пожаловать!';
    document.getElementById('extra').textContent = 'Больше ничего';
    language = 'ru';
  } else {
    document.getElementById('welcome').textContent = 'Hush Kelibsiz!';
    document.getElementById('extra').textContent = 'Ortiqcha hech narsa';
    language = 'uz';
  }
}

setInterval(() => {
  const images = document.querySelectorAll('.images .image-container img');
  

  images.forEach((image) => {
    image.style.display = 'none';
  });

  images[currentImage].style.display = 'block';

 
  currentImage = (currentImage + 1) % images.length;
}, 3000);
