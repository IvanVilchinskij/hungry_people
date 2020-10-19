const menuBtn = document.querySelector('.burger'),
      nav = document.querySelector('nav'),
      lineOne = document.querySelector('.line--1'),
      lineTwo = document.querySelector('.line--2'),
      lineThree = document.querySelector('.line--3'),
      links = document.querySelectorAll('.nav__item a');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    document.querySelector('body').classList.toggle('no-scroll');   

});

links.forEach(item => {
    item.addEventListener('click', () => {       
        if (menuBtn.classList.contains('active')) {
            menuBtn.classList.toggle('active');
            nav.classList.toggle('nav-open');
            lineOne.classList.toggle('line-cross');
            lineTwo.classList.toggle('line-fade-out');
            lineThree.classList.toggle('line-cross');
            document.querySelector('body').classList.toggle('no-scroll');
        } 
    });
});