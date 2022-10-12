const slider = () => {
    const slides = document.querySelectorAll('.item');
    const timeInterval = 3000;
    let currentSlide = 2;
    let interval;


    console.log(slides);

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }
    nextSlide(slides, currentSlide, 'item__active');
    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'item__active');
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        };
        nextSlide(slides, currentSlide, 'item__active');
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    }
    startSlide(timeInterval);

}

export default slider