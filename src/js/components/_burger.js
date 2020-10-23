function clickBurger({btn, navigation, firstLine, secondLine, thirdLine, navLinks}) {
    const menuBtn = document.querySelector(btn),
          nav = document.querySelector(navigation),
          lineOne = document.querySelector(firstLine),
          lineTwo = document.querySelector(secondLine),
          lineThree = document.querySelector(thirdLine),
          links = document.querySelectorAll(navLinks),
          body = document.querySelector('body');

    function toggleClasses() {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('nav-open');
        lineOne.classList.toggle('line-cross');
        lineTwo.classList.toggle('line-fade-out');
        lineThree.classList.toggle('line-cross');
        body.classList.toggle('no-scroll');
    }

    menuBtn.addEventListener('click', toggleClasses);

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (menuBtn.classList.contains('active')) {
                toggleClasses();
            }
        });
    });
}

clickBurger({
    btn: '.burger',
    navigation: 'nav',
    firstLine: '.line--1',
    secondLine: '.line--2',
    thirdLine: '.line--3',
    navLinks: '.nav__item a'
});