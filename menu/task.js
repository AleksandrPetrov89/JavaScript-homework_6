const mainMenus = document.getElementsByClassName("menu_main");
for (menuMain of mainMenus) {
    menuMain.addEventListener("click", menuHandler);
};


function menuHandler (event) {
    // Делегированный обработчик события при нажатии на пункты меню. 
    // При нажатии на пункт меню, который содержит подменю, появится подменю. 
    // При повторном нажатии на пункт меню, содержащий подменю - оно скроется.
    // При нажатии на пункты меню, которые не содержат подменю, произойдет переход по ссылке.
    if (event.target.className === "menu__link") {
        let menuItem = event.target.parentElement;
        if (menuItem.querySelector(".menu_sub")) {
            event.preventDefault();
            if (menuItem.querySelector(".menu_active")) {
                menuItem.querySelector(".menu_active").className = "menu menu_sub";
            } else {
                let main = event.currentTarget;
                if (main.querySelector(".menu_active")) {
                    main.querySelector(".menu_active").className = "menu menu_sub";
                };
                menuItem.querySelector(".menu_sub").className = "menu menu_sub menu_active";
            };

        };
    };
};
