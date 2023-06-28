const sliderItems = Array.from(document.getElementsByClassName("slider__item"));
const sliderDots = Array.from(document.getElementsByClassName("slider__dot"));
sliderDots.at(0).className += " slider__dot_active";

const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");
sliderArrowPrev.onclick = () => activateSlide("-");
sliderArrowNext.onclick = () => activateSlide("+");
for (let dot of sliderDots) {
    dot.onclick = (event) => activateSlide("dot", event);
};


function hideAllSlides () {
    // Скрывает все слайды
    for (let slide of sliderItems) {
        slide.className = "slider__item";
    };
};

function deactivationAllDots () {
    // Деактивирует все точки
    for (let dot of sliderDots) {
        dot.className = "slider__dot";
    };
};

function activateSlide (sign, event) {
    // Обработчик события 'click' для боковых кнопок слайдера изображений и навигационных точек.
    // При смене "влево" боковыми кнопками крайнего левого слайда - перекидывает к крайнему правому, и наоборот.
    // При нажатии на навигационную точку переключается на соответствующий слайд.
    let activeSlide = sliderItems.findIndex((sliderItem) => {
        return sliderItem.className.includes("slider__item_active");
    });
    hideAllSlides();
    deactivationAllDots();
    switch(sign) {
        case "-":
            activeSlide--;
            if (activeSlide < -sliderItems.length) {
                activeSlide += sliderItems.length;
            };
            break;
        case "+":
            activeSlide++;
            if (activeSlide > sliderItems.length - 1) {
                activeSlide -= sliderItems.length;
            };
            break;
        case "dot":
            activeSlide = sliderDots.indexOf(event.target);
            break;
    };
    sliderItems.at(activeSlide).className += " slider__item_active";
    sliderDots.at(activeSlide).className += " slider__dot_active";
};
