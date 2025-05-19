export function formSendCheckCheckbox() {
    document.querySelector('.hero__right form')
        .addEventListener('submit', function (e) {
            const checkbox = document.querySelector('#checkbox-1');
            const label = document.querySelector('.custom-checkbox label');
            const loginInput = document.querySelector('#login');
            const passInput = document.querySelector('#password');
            const loginLine = document.querySelector('.login_line');
            const passLine = document.querySelector('.password_line');

            if (loginInput.value === '') {
                e.preventDefault();
                loginLine.classList.add('error');
            }

            if (passInput.value === '') {
                e.preventDefault();
                passLine.classList.add('error');
            }

            if (!checkbox.checked) {
                e.preventDefault();
                label.classList.add('error');
            }

            setTimeout(() => {
                label.classList.remove('error');
                loginLine.classList.remove('error');
                passLine.classList.remove('error');
            }, 2000)

        })
}




