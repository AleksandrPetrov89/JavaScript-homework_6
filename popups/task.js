const modalMain = document.getElementById("modal_main");
modalMain.className += " modal_active";
modalMain.addEventListener('click', windowHandler);

const modalSuccess = document.getElementById("modal_success");
modalSuccess.addEventListener('click', windowHandler);


function windowHandler(event) {
    // Делегированный обработчик события 'click' для окон "modal_main" и "modal_success".
    // При нажатии на кнопку закрытия окна - делает окно невидимым и удаляет приемник
    // события для этого окна. При нажатии на кнопку "Сделать хорошо" совершает те же действия,
    // что и при закрытии + делает видимым окно с кнопкой "Хорошо сделано!".
    let element = event.target;
    let modalElement = event.currentTarget;
    if (element.className.includes("show-success") || element.className.includes("modal__close")) {
        if (element.className.includes("show-success")) {
            document.getElementById("modal_success").className += " modal_active";
        };
        modalElement.className = modalElement.className.replace(" modal_active", "");
        modalElement.removeEventListener('click', windowHandler);
    };
};
