console.log('+++++++++++ START JS PROJECT +++++++++++');

import "../style/main.scss";
import {headerPopup} from "./parts/header";
import {fromSendCheckCheckbox} from "./parts/main-page";

document.addEventListener("DOMContentLoaded", function () {
    headerPopup();
    fromSendCheckCheckbox();
})


console.log('+++++++++++ END JS PROJECT +++++++++++');