export function headerPopup() {
    console.log('++++++ HEADER POPUP START ++++++');
    const switcher = document.querySelector('.menu__top__lang_switcher')
    const popup = document.querySelector('.menu__top__lang_switcher__popup')
    // показуємо попап //
    switcher.addEventListener('click', function (event) {
        event.stopPropagation(); // Не дає події клікнути по документу //
        const isVisible = popup.style.display === 'flex';
        popup.style.display = isVisible ? 'none' : 'flex';
    })

    // Ховаємо попап коли клікаємо за його межами //
    document.addEventListener('click', function (event) {
        if (popup.style.display === 'flex') {

            popup.style.display = 'none';
        }

    })
    console.log('++++++ HEADER POPUP END ++++++');
}
