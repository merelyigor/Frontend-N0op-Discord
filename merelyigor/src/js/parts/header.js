export function headerPopup() {
    console.log('+++++++++++ HEADER POPUP START +++++++++');
    const switcher = document.querySelector('.menu__top__lang_switcher');
    const popup = document.querySelector('.menu__top__lang_switcher__popup');

    // Показуємо попап при кліку на елемент перемикання мов
    switcher.addEventListener('click', function (event) {
        event.stopPropagation();
        const isVisible = popup.style.display === 'flex';
        popup.style.display = (isVisible ? 'none' : 'flex');
    })

    // приховуємо попап коли клікаєм за його межами
    document.addEventListener('click', function () {
        if (popup.style.display === 'flex')
            popup.style.display = 'none';
    })

    console.log('+++++++++++ HEADER POPUP END +++++++++');
}


