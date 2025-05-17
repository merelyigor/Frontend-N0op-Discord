export function headerPopup() {
    console.log("headerPopup START");
    const switcher = document.querySelector(".menu__top__lang_switcher");
    const popup = document.querySelector(".menu__top__lang_switcher__popup");

// Show popup when clicked on lang switcher
    switcher.addEventListener('click', function (event) {
        event.stopPropagation();
        const isVisible = popup.style.display === 'flex';
        popup.style.display = isVisible ? 'none' : 'flex';


    })

    //Hiding popup when clicked any positions
    document.addEventListener('click', function () {
        popup.style.display = 'none';
    })
    console.log("headerPopup END");
}