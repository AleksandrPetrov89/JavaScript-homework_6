// Общая часть
const allMenuLinks = document.querySelectorAll(".menu__link");
const allMenuLinksWithSubmenus = [];


function hideSubmenu() {
    // Закрывает все подменю
    for (let linksWithSubmenus of allMenuLinksWithSubmenus) {
        if (linksWithSubmenus.parentElement.querySelector(".menu_active")) {
            linksWithSubmenus.parentElement.querySelector(".menu_active").className = "menu menu_sub";
        };
    };
};


// Вариант 2
// for (let link of allMenuLinks) {
//     link.onclick = menuHandler;
//     if (link.parentElement.querySelector(".menu_sub")) {
//         allMenuLinksWithSubmenus.push(link);
//     };
// };


// function menuHandler(event) {
//     // Функция обработчик события при нажатии на пункты меню. При нажатии на пункт меню, который содержит 
//     // подменю, появится подменю. При нажатии на пункты меню, которые не содержат подменю, произойдет 
//     // переход по ссылке.
//     let element = event.target;

//     // Не совсем понял совет № 2 "Для вложенных меню вы обязаны возвращать false в обработчиках события
//     // для предотвращения перехода по ссылке." Если имеется в виду, что переход по ссылкам в подменю
//     // не должен работать, то закомментированный код ниже это реализует (хотя как то странно было бы)
 
//     // if (element.closest(".menu_sub")) {
//     //     return false;
//     // };

//     hideSubmenu();
//     if (allMenuLinksWithSubmenus.includes(element)) {
//         element.parentElement.querySelector(".menu_sub").className += " menu_active";
//         return false;
//     };
// };


// Вариант 1 с делегированным обработчиком событий
for (let link of allMenuLinks) {
    if (link.parentElement.querySelector(".menu_sub")) {
        allMenuLinksWithSubmenus.push(link);
    };
};
const body = document.querySelector("body");
body.addEventListener('click', (event) => {
    if (["menu__link", "logo__link"].includes(event.target.className)) {
        menuHandler(event);
    } else {
        hideSubmenu();
    };
});


function menuHandler(event) {
    // Функция обработчик события при нажатии на пункты меню. При нажатии на пункт меню, который содержит 
    // подменю, появится подменю. При нажатии на пункты меню, которые не содержат подменю, произойдет 
    // переход по ссылке. При нажатии на любые другие элементы страницы происходит закрытие всех подменю.
    let element = event.target;

    // Не совсем понял совет № 2 "Для вложенных меню вы обязаны возвращать false в обработчиках события
    // для предотвращения перехода по ссылке." Если имеется в виду, что переход по ссылкам в подменю
    // не должен работать, то закомментированный код ниже это реализует (хотя как то странно было бы)
 
    // if (element.closest(".menu_sub")) {
    //     return false;
    // };

    hideSubmenu();
    if (allMenuLinksWithSubmenus.includes(element)) {
        event.preventDefault();
        element.parentElement.querySelector(".menu_sub").className += " menu_active";
    };
};
