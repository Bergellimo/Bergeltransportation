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


let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Run the slideshow function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", showSlides);

