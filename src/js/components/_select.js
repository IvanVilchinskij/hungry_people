const selectSingles = document.querySelectorAll('.text__select');

let selectSingleTitle1, selectSingleLabels1, selectSingleTitle2, selectSingleLabels2;

selectSingles.forEach((item, i) => {

    if (i == 0) {
        selectSingleTitle1 = item.querySelector('.text__select-title');
        selectSingleLabels1 = item.querySelectorAll('.text__select-label');
        
    } else {
        selectSingleTitle2 = item.querySelector('.text__select-title');
        selectSingleLabels2 = item.querySelectorAll('.text__select-label');
    }
});

function toggleAndClose({title, lables, numb}) {
    
    // Toggle menu
    title.addEventListener('click', () => {
        if (numb == 0) {
            selectSingles[numb + 1].setAttribute('data-state', '');
        } else {
            selectSingles[numb - 1].setAttribute('data-state', '');
        }

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

    /* $(document).mouseup(function (e) {
        const block = $('#selectContent1');
        if (!block.is(e.target) && block.has(e.target).length === 0){
            block.hide();
        }

        const block2 = $('#selectContent12');
        if (!block2.is(e.target) && block2.has(e.target).length === 0){
            block2.hide();
        }
    }); */
    
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
