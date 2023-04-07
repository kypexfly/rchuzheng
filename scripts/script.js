// Initialise Carousel
const newsCarousel = new Carousel(document.querySelector("#newsCarousel"), {
    infinite: false,
    Dots: false,
    friction: 0.89,
    slidesToSlide: 2,
    fill: false,
});

$('#navig a').on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    if ($(hash).length) {
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 300, function() {
            // Do something fun if you want!
        });
    }
});

ScrollReveal().reveal('#my-profile', {reset:true, duration:1000, distance: '50px'});
ScrollReveal().reveal('.card-box', {reset:false, duration:1000, distance: '50px'});
ScrollReveal().reveal('#newsCarousel', {reset:false, duration:1000});