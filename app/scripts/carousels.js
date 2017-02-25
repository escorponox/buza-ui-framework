export default () => {
    const carousel = document.querySelector('.c-carousel__canvas');
    const seats = document.querySelectorAll('.c-carousel__seat');

    const nextSeat = (elem) => {
        let seat;

        if (elem.nextElementSibling) {
            seat = elem.nextElementSibling;
        } else {
            seat = elem.parentNode.firstElementChild;
        }

        return seat;
    };

    const prevSeat = (elem) => {
        let seat;

        if (elem.previousElementSibling) {
            seat = elem.previousElementSibling;
        } else {
            seat = elem.parentNode.lastElementChild;
        }

        return seat;
    };

    const slideCarouselSeats = (e) => {
        e.preventDefault();

        const oldSeat = document.querySelector('.c-carousel .is-reference');
        oldSeat.classList.remove('is-reference');

        let newSeat;

        if (e.currentTarget.classList.contains('js-carousel__controls--next')) {
            newSeat = nextSeat(oldSeat);
            carousel.classList.remove('is-reversing');
        } else {
            newSeat = prevSeat(oldSeat);
            carousel.classList.add('is-reversing');
        }

        newSeat.classList.add('is-reference');
        newSeat.style.order = 1;

        let i = 2;
        let j = 2;
        const ref = seats.length;

        for (; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
            newSeat = nextSeat(newSeat);
            newSeat.style.order = i;
        }

        carousel.classList.remove('is-set');
        setTimeout((() => carousel.classList.add('is-set')), 50);
    };

    const nextButton = document.querySelector('.js-carousel__controls--next');
    nextButton.addEventListener('click', slideCarouselSeats, false);

    const prevButton = document.querySelector('.js-carousel__controls--prev');
    prevButton.addEventListener('click', slideCarouselSeats, false);
};

