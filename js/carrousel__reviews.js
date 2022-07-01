(function() {

    const slides = [
        `<div class="carrousel__reviews-content">
        <img src="img/stacey_peterson.jpg" alt="Stacey Peterson" class="carrousel__reviews-content-photo">
        <h3 class="carrousel__reviews-content-name">
            Stacey Peterson
        </h3>
        <p class="carrousel_reviews-content-comment">
            I really love Japanese food, but I don't always have time to go to my favorite restaurant.
            Thanks to
            FoodOrder, I can now enjoy my favorite sushi every day whenever I want.
        </p>
        <p class="carrousel-reviews-content-date">
            October 28, 2019
        </p>
        </div>`,
        `<div class="carrousel__reviews-content">
        <img src="img/jeff_ericsson.jpg" alt="Jeff Ericsson" class="carrousel__reviews-content-photo">
        <h3 class="carrousel__reviews-content-name">
            Jeff Ericsson
        </h3>
        <p class="carrousel_reviews-content-comment">
            I don't like to cook, so I often use delivery services. I've tried several services but they
            all
            seemed
            not so convenient to me. Now I am completely satisfied with FoodOrder, they always deliver
            orders on
            time.
        </p>
        <p class="carrousel-reviews-content-date">
            December 02, 2019
        </p>
        </div>`,
        `<div class="carrousel__reviews-content">
        <img src="img/alice_howard.jpg" alt="Alice Howard" class="carrousel__reviews-content-photo">
        <h3 class="carrousel__reviews-content-name">
            Alice Howard
        </h3>
        <p class="carrousel_reviews-content-comment">
            I have several favorite restaurants, they have incredibly delicious dishes but I always
            forget to
            book
            tables. Many thanks to the FoodOrder delivery service for helping me enjoy the best meals at
            home.
        </p>
        <p class="carrousel-reviews-content-date">
            March 23, 2020
        </p>
        </div>`,
        `<div class="carrousel__reviews-content">
        <img src="img/jeff_gordons.jpg" alt="Jeff Gordons" class="carrousel__reviews-content-photo">
        <h3 class="carrousel__reviews-content-name">
            Jeff Gordons
        </h3>
        <p class="carrousel_reviews-content-comment">
            I often have to work at night, and in the morning, I'm always hungry. FoodOrder has come to
            my aid
            more
            than once. It's one of the few services that are ready to deliver food at 4 or 5 am.
        </p>
        <p class="carrousel-reviews-content-date">
            July 04, 2020
        </p>
        </div>`
    ];

    let slideIndex = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.carrousel__reviews > .carrousel__reviews-body');
        slideContainer.innerHTML = slides[slideIndex];
        if(window.matchMedia('(min-width: 764px)').matches) {
            const secondSlideIndex = slideIndex + 1 >= slides.length ? 0 : slideIndex + 1;
            slideContainer.innerHTML += slides[secondSlideIndex];
        }
    }

    function nextSlide() {
        slideIndex = slideIndex + 1 >= slides.length ? 0 : slideIndex + 1;
        showCurrentSlide();
        dotActive(slideIndex);
    }

    function previousSlide() {
        slideIndex = slideIndex - 1 < 0 ? slides.length - 1 : slideIndex - 1;
        showCurrentSlide();
        dotActive(slideIndex);
    }

    function dotActive(slideIndex) {
        for(let i = 0; i < dots.length; i++)
        {
            dots[i].classList.remove("reviews-dot-active");
        }
        dots[slideIndex].classList.add("reviews-dot-active");
    }

    function showSlide(slideNum) {
        slideIndex = slideNum;
        showCurrentSlide();
        dotActive(slideIndex);
    }

    const dots = document.querySelectorAll('.reviews-dot');
    const nextButton = document.querySelector('.carrousel__reviews > .carrousel__reviews-next-button');
    const previousButton = document.querySelector('.carrousel__reviews > .carrousel__reviews-previous-button');

    nextButton.addEventListener('click', nextSlide);
    previousButton.addEventListener('click', previousSlide);


    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', () => showSlide(i));
      } 

    window.addEventListener('resize', showCurrentSlide);

    showCurrentSlide();
    dotActive(slideIndex);
})()