(function () {

    const slidesFood = [
        `<div class="carrousel__categories-item">
    <img class="carrousel__categories-vegeterian" src="img/vegeterian_cuisine.svg" alt="salad">
    <h3 class="carrousel__categories-name">Vegeterian</h3>
    <div class="carrousel__name-separator"></div>
    <p class="carrousel__categories-comment">Order the best vegan and vegetarian meals with the
        fastest
        delivery possible.</p>
</div>`,
        `<div class="carrousel__categories-item">
    <img class="carrousel__categories-pizza" src="img/pizza_cuisine.svg" alt="pizza">
    <h3 class="carrousel__categories-name">Pizza</h3>
    <div class="carrousel__name-separator"></div>
    <p class="carrousel__categories-comment">We deliver original pizza from the best Italian
        restaurants
        in
        New York.</p>
</div>`,
        `<div class="carrousel__categories-item">
    <img class="carrousel__categories-sushi" src="img/sushi_cuisine.svg" alt="sushi">
    <h3 class="carrousel__categories-name">Sushi</h3>
    <div class="carrousel__name-separator"></div>
    <p class="carrousel__categories-comment">Delicious sushi from the best Japanese restaurants
        delivered to
        your place.</p>
</div>`,
        `<div class="carrousel__categories-item">
    <img class="carrousel__categories-bakery" src="img/bakery_cuisine.svg" alt="cake">
    <h3 class="carrousel__categories-name">Bakery</h3>
    <div class="carrousel__name-separator"></div>
    <p class="carrousel__categories-comment">Our couriers will deliver fresh and luscious
        pastries from
        your
        favorite bakery.</p>
</div>`,
        `<div class="carrousel__categories-item">
    <img class="carrousel__categories-fast-food" src="img/fast_food_cuisine.svg" alt="shawarma">
    <h3 class="carrousel__categories-name">Fast Food</h3>
    <div class="carrousel__name-separator"></div>
    <p class="carrousel__categories-comment">Order your "guilty pleasure" and get it delivered
        to your
        place
        in just 30 minutes.</p>
</div>`
    ];

    let slideFoodIndex = 0;

    function showSlides() {
        const slideBox = document.querySelector('.carrousel__cuisine .carrousel__categories-item');
        slideBox.innerHTML = slidesFood[slideFoodIndex];
        if (window.matchMedia('min-width = 520px').matches) {
            const secondSlideFoodIndex = slideFoodIndex + 1 >= slidesFood.length ? 0 : slideFoodIndex + 1;
            slideBox.innerHTML += showSlides[secondSlideFoodIndex];
            if (window.matchMedia('min-width = 740px').matches) {
                const thirdSlideFoodIndex = secondSlideFoodIndex + 1 >= slidesFood.length ? 0 : secondSlideFoodIndex + 1;
                slideBox.innerHTML += showSlides[thirdSlideFoodIndex];
                if (window.matchMedia('min-width = 960px').matches) {
                    const fourthSlideFoodIndex = thirdSlideFoodIndex + 1 >= slidesFood.length ? 0 : thirdSlideFoodIndex + 1;
                    slideBox.innerHTML += showSlides[fourthSlideFoodIndex];
                }
            }
        }
    }


    function nextSlidesFood() {
        slideFoodIndex = slideFoodIndex + 1 >= slidesFood.length ? 0 : slideFoodIndex + 1;
        showSlides();
    }

    function prevSlidesFood() {
        slideFoodIndex = slideFoodIndex - 1 < 0 ? slidesFood.length - 1 : slideFoodIndex - 1;
        showSlides();
    }

    const nextButton = document.querySelector('.carrousel__categories > .carrousel__categories-next-button');
    nextButton.addEventListener('click', nextSlidesFood);
    const prevButton = document.querySelector('.carrousel__categories > .carrousel__categories-prev-button');
    prevButton.addEventListener('click', prevSlidesFood);

    window.addEventListener('resize', showSlides);

    showSlides();

})();