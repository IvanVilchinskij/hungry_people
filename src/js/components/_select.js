const selectSingles = document.querySelectorAll('.text__select');

let selectSingleTitle1, selectSingleLabels1, selectSingleTitle2, selectSingleLabels2;

selectSingles.forEach((item, i) => {
    if (i == 0) {
        selectSingleTitle1 = item.querySelector('.text__select-title'),
        selectSingleLabels1 = item.querySelectorAll('.text__select-label');
        
    } else {
        selectSingleTitle2 = item.querySelector('.text__select-title'),
        selectSingleLabels2 = item.querySelectorAll('.text__select-label');
    }
});

function toggleAndClose({title, lables, numb}) {
    // Toggle menu
    title.addEventListener('click', () => {
        if ('active' === selectSingles[numb].getAttribute('data-state')) {
        selectSingles[numb].setAttribute('data-state', '');
        } else {
        selectSingles[numb].setAttribute('data-state', 'active');
        }
    });

    // Close when click to option
    for (let i = 0; i < lables.length; i++) {
        lables[i].addEventListener('click', (evt) => {
        title.textContent = evt.target.textContent;
        selectSingles[numb].setAttribute('data-state', '');
        });
    }
}

toggleAndClose({
    title: selectSingleTitle1,
    lables: selectSingleLabels1,
    numb: 0
});

toggleAndClose({
    title: selectSingleTitle2,
    lables: selectSingleLabels2,
    numb: 1
});
