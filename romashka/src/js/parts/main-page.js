export function fromSendCheckCheckbox() {
    document.querySelector(".hero__right form")
        .addEventListener("submit", function (event) {
            const checkbox = document.querySelector("#checkbox-1");
            const label = document.querySelector(".custom-checkbox label");
            const loginInput = document.querySelector("#login");
            const passwordInput = document.querySelector("#password");
            const loginLine = document.querySelector(".login_line");
            const passwordLine = document.querySelector(".password_line");

            if (loginInput.value === "") {
                event.preventDefault();
                loginLine.classList.add("error");
            }
            if (passwordInput.value === "") {
                event.preventDefault();
                passwordLine.classList.add("error");
            }

            if (!checkbox.checked) {
                event.preventDefault();
                label.classList.add('error');
            }
            setTimeout(() => {
                label.classList.remove('error');
                loginLine.classList.remove("error");
                passwordLine.classList.remove("error");
            }, 2000)

        })


}
