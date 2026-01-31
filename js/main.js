// Homepage image slideshow
(function () {
    var images = [
        'images/homepage/1.jpg',
        'images/homepage/2.jpg',
        'images/homepage/3.jpg',
        'images/homepage/4.jpg',
        'images/homepage/5.jpg',
        'images/homepage/6.jpg',
        'images/homepage/7.jpg',
        'images/homepage/8.jpg',
        'images/homepage/9.jpg'
    ];

    var currentIndex = 0;
    var slideshowImg = document.getElementById('slideshow-img');

    if (!slideshowImg) return;

    // Preload images
    images.forEach(function (src) {
        var img = new Image();
        img.src = src;
    });

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        slideshowImg.style.opacity = 0;
        setTimeout(function () {
            slideshowImg.src = images[currentIndex];
            slideshowImg.style.opacity = 1;
        }, 500);
    }

    slideshowImg.style.transition = 'opacity 0.5s ease-in-out';
    setInterval(nextSlide, 4000);
})();
