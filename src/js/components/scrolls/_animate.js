/* Animation */

const animItems = document.querySelectorAll('.anim-item');
let width = window.innerWidth;

if (document.documentElement.clientWidth > 767) {
    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let i = 0; i<animItems.length; i++) {
                const animItem = animItems[i],
                      animItemHeight = animItem.offsetHeight,
                      animItemOffset = offset(animItem).top,
                      animStart = 2;
    
                let animItemPoint = window.innerHeight - animItemHeight/animStart;
    
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight/animStart;
                }
    
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight) && !animItem.classList.contains('default')) {
                    animItem.classList.add('anim-active');
                } else {
                    if (animItem.classList.contains('anim-hide')) {
                        animItem.classList.remove('anim-active');
                    }       
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
        }
        setTimeout(() => {
            animOnScroll();
        }, 500);       
    }
}

window.addEventListener('resize', () => {
    let newWidth = window.innerWidth;

    if (width != newWidth) {
        if (document.documentElement.clientWidth > 767) {
            animItems.forEach(item => {
                item.classList.remove('anim-item');
                item.classList.remove('anim-active');
                item.classList.add('default');
            });
        }
    }

    width = newWidth;
    
});



