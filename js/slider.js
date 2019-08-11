let tours = document.querySelectorAll('.all-inclusive__element-tour');
let hotels = document.querySelectorAll('.all-inclusive__element-hotels');
let store = [];
let topText = document.querySelector('.slider__headline-top');
let bottomText = document.querySelector('.slider__headline-bottom');
let sliderTexts = [
    {
        top: 'Відкривай',
        bottom: 'Україну 365'
    },
    {
        top: 'Відкривай',
        bottom: 'Карпати 365'
    },
    {
        top: 'Відкривай',
        bottom: 'Черкаси 365'
    }
];
let valText = 1;
let valTextPrev = 2;

sliderNext = () => {
    if (valText === sliderTexts.length) {
        valText = 0;
    }

    topText.innerHTML = sliderTexts[valText].top;
    bottomText.innerHTML = sliderTexts[valText].bottom;

    valText++;
};

sliderPrev = () => {
    if (valTextPrev === -1) {
        valTextPrev = 2;
    }

    topText.innerHTML = sliderTexts[valTextPrev].top;
    bottomText.innerHTML = sliderTexts[valTextPrev].bottom;

    valTextPrev--;
};

next = (elem) => {
    storeSave(elem);
    for (let i = elem.length, k = 0, j = 1; i > 0; i--, k++, j++) {
        if( j === store.length ) {
            j = 0;
        }
        elem[j].innerHTML = store[k]
    }
};

prev = (elem) => {
    storeSave(elem);
    for (let i = elem.length, k = 1, j = 0; i > 0; i--, k++, j++) {
        if( k === store.length ) {
            k = 0;
        }
        elem[j].innerHTML = store[k]
    }
};

storeSave = (st) => {
    for (let i = st.length, k = 0; i > 0; i--, k++) {
        store[k] = $(st[k]).html()
    }
};