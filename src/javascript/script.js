$(document).ready(function () {
  const sections = $('section');
  const navItems = $('.nav-item');

  // Add shadow to header on scroll and control active nav item
  $(window).scroll(function () {
    const header = $('header');
    const scrollPos = $(window).scrollTop() - header.outerHeight();
    
    let activeSectionIndex = 0; 

    sections.each(function (index) {
      const section = $(this);
      const sectionTop = section.offset().top - header.outerHeight();
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        activeSectionIndex = index;
        return false;
      }
    });

    console.log(navItems[activeSectionIndex]);
    
    navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');
  });

  // Scroll Reveal animations
  ScrollReveal().reveal('#cta', {
    duration: 2000,
    origin: 'left',
    distance: '20%',
  });

  $(document).on('mousemove', function(e) {
    var $blurArea = $('#blur-area');
    var x = e.pageX - $blurArea.width() /2;
    var y = e.pageY - $blurArea.height() /2;
    $blurArea.css('transform', `translate(${x}px, ${y}px)`);
    console.log(x, y);
});

})

