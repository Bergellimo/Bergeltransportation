function scrollToElement(elementSelector, instance = 0) { 
    // Select all elements that match the given selector 
    const elements = document.querySelectorAll(elementSelector); 
    // Check if there are elements matching the selector and if the requested instance exists 
    if (elements.length > instance) { 
        // Scroll to the specified instance of the element 
        elements[instance].scrollIntoView({ behavior: 'smooth' }); 
    } 
} 

const link1 = document.getElementById("link1"); 
const link2 = document.getElementById("link2"); 
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4"); 
const link5 = document.getElementById("link1");  

link1.addEventListener('click', () => { 
    scrollToElement('.header'); 
}); 

link2.addEventListener('click', () => { 
    // Scroll to the second element with "header" class 
    scrollToElement('.header', 1); 
}); 

link3.addEventListener('click', () => { 
    scrollToElement('.column'); 
});

link4.addEventListener('click', () => { 
    // Scroll to the third element with "header" class 
    scrollToElement('.header', 2); 
}); 




function changeImage(element) {
    const mainImg = document.getElementById('main-img');
    mainImg.src = element.src;
}

// Инициализация переменной slideIndex
let slideIndex = 0;

// Функция для управления слайдами
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Функция для отображения слайдов
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  // Обработка переполнения индекса слайдов
  if (slideIndex >= slides.length) { slideIndex = 0 }
  if (slideIndex < 0) { slideIndex = slides.length - 1 }
  
  // Скрытие всех слайдов и отображение текущего
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Вызов функции для отображения первого слайда
showSlides();
