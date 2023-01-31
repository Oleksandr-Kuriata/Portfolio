document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger'),
          closeElem = document.querySelector('.menu__close'),
          menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu__item');

    hamburger.addEventListener('click', function() {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', function() {
        menu.classList.remove('active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });

    const counters = document.querySelectorAll('.skills__ratings-counter'),
          lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerText;
    });

    $(document).scroll(function() {
        if($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn('slow');
        } else {
            $('.pageup').fadeOut('slow');
        }
    });

    $('a[href=#up]').click(function() {
        const _href = $(this).attr('href');
        $('html, body').animate({scrollTop: $(_href).offset().top + 'px'}, 0);
        return false;
    });
});