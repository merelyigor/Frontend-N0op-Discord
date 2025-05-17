export function headerPopup() {
    console.log(' +++++++++++ START HEADER POPUP +++++++++++');
    const switcher = document.querySelector('.menu__top__lang_switcher')
    const popup = document.querySelector('.menu__top__lang_switcher__popup')

    // Паказуємло попап при кліку на елемент перемикання мов
    switcher.addEventListener('click', function (event) {
        event.stopPropagation();
        const isVisible = popup.style.display === 'flex';
        popup.style.display = isVisible ? 'none' : 'flex';
    })

    // Приховуємо попап коли клікаєм за його межами
    document.addEventListener("click", function () {
        if (popup.style.display === 'flex') {
            console.log('Клік в браузері');
            popup.style.display = 'none';
        }
    })

    console.log(' +++++++++++ END HEADER POPUP +++++++++++');
}