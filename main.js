

let currentReview = 0;

const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

rightArrow.addEventListener('click' , function(){
    
    currentReview = (currentReview + 1 )%4
    slider.style.transform =  'translate('+currentReview*-25+'%)';

})

leftArrow.addEventListener('click' , function(){
    
    currentReview = (currentReview - 1 + 4 )%4
    slider.style.transform = 'translate('+currentReview*-25+'%)';

})

const reviewButton = document.querySelectorAll('.reviews-button')[1]
const reviews = document.querySelector('.reviews')

reviewButton.addEventListener('click' , function(){ 
    reviews.classList.toggle('not-displayed')
    

})