document.addEventListener("click", function ($event) {
    if (
        $event.target.classList.contains("nav-toggler") ||
        $event.target.classList.contains("nav-toggler-icon")
    ) {
        
        let toggler = $event.target;
        let menuId = toggler.dataset.target;
        let menu = document.getElementById(menuId);
        let content = menu.getElementsByClassName("nav")[0];

        if (menu.style.maxHeight) {
            menu.style.maxHeight = null;
        } else {
            menu.style.maxHeight = content.scrollHeight + "px";
        }
    }
});
