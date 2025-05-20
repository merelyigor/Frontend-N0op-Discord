console.log('++++++START JS PROJECT++++++');

import '../style/main.scss';

import {headerPopup} from "./parts/header";
import {formSendCheckCheckbox} from "./parts/main-page";
document.addEventListener('DOMContentLoaded', function()  {
    headerPopup();
    formSendCheckCheckbox()
})

console.log('++++++END JS PROJECT+++++++');