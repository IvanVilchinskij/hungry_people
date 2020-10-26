/* Selects */

const titles = document.querySelectorAll('.text__select');

document.body.addEventListener('click', (e) => {
    const target = e.target,
          parent = target.parentNode;

    const deactiveAttr = () => {
        titles.forEach(item => {
            item.setAttribute('data-state', '');
        });
    };

    if (target && parent.classList.contains('text__select')) {
        if ('active' === parent.getAttribute('data-state')) {
            parent.setAttribute('data-state', '');
        } else {
            deactiveAttr();
            parent.setAttribute('data-state', 'active');
        }
    } else if (target && target.classList.contains('text__select-label')) {
        parent.previousSibling.previousSibling.textContent = target.textContent;
        parent.parentNode.setAttribute('data-state', '');
    }

    if (!parent.classList.contains('text__select')) {
        deactiveAttr();
    }
});