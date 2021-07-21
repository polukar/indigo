

import forms from 'forms';
import header from 'header';
import accardeon from 'accardeon';
import calc from 'calc';
import numbers from 'numbers';

let app = {
    init() {
        header.init();
        calc.init();
        forms.init();
        accardeon.init();
        numbers.init();
    }
};
app.init();
