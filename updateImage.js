// variables to store HTML elements
let placeholder = document.querySelector(".placeholder");
let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");


// click event for buttonOne
buttonOne.addEventListener('click', function() {

    // 1. Select the placeholder and update the src.
    // - The image address should be a picture of a place you want to travel to.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.
placeholder.src = "http://www.islamicteachings.org/forum/uploads/monthly_08_2013/post-4260-0-14870900-1376390236.jpg";



});


// click event for buttonTwo
buttonTwo.addEventListener('click', function() {

    // 2. Select the placeholder and update the src.
    // - The image address should be a picture that represents your mood.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.
placeholder.src = "http://keepcalling.net/wp-content/uploads/2018/08/Screen-Shot-2018-08-29-at-14.03.44.png";


    

});