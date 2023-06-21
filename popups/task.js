// Общая часть для 2-х вариантов
const modalMain = document.getElementById("modal_main");
modalMain.className += " modal_active";

// Вариант 2. Он ближе к теме занятия
// const showSuccess = document.querySelector(".show-success");
// modalCloseTimes = document.querySelectorAll(".modal__close_times");
// for (modalClose of modalCloseTimes) {
//     modalClose.onclick = windowСlosing;
// };

// showSuccess.onclick = (event) => {
//     document.getElementById("modal_success").className += " modal_active";
//     windowСlosing(event);
// };


// function windowСlosing(event) {
//     let element = event.target.closest(".modal");
//     element.className = element.className.replace(" modal_active", "");
//     event.target.onclick = null;
// };


// Вариант 1. На мой взгляд он проще и лучше :)
modalMain.addEventListener('click', windowHandler);

const modalSuccess = document.getElementById("modal_success");


function windowHandler(event) {
    // Делегированный обработчик события 'click' для окон "modal_main" и "modal_success".
    // При нажатии на кнопку закрытия окна - делает окно невидимым и удаляет приемник
    // события для этого окна. При нажатии на кнопку "Сделать хорошо" совершает те же действия,
    // что и при закрытии + делает видимым окно с кнопкой "Хорошо сделано!" и устанавливает на 
    // него приемник события.
    let element = event.target;
    let modalElement = event.currentTarget;
    if (element.className.includes("show-success") || element.className.includes("modal__close_times")) {
        if (element.className.includes("show-success")) {
            modalSuccess.className += " modal_active";
            modalSuccess.addEventListener('click', windowHandler);
        };
        modalElement.className = modalElement.className.replace(" modal_active", "");
        modalElement.removeEventListener('click', windowHandler);
    };
};
