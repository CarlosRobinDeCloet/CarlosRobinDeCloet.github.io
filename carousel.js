
document.getElementById(".carousel1").forEach(carousel=> {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class='carousel__button'></span>`;
    });

    console.log(items);
    console.log(buttonsHtml);

    carousel.insertAdjacentHTML('beforeend', `
        <div class='carousel__nav'>
            ${ buttonsHtml.join('')}
        </div>
    `);

    const buttons = carousel.querySelectorAll('.carousel__button');

    console.log(buttons);

    buttons.forEach((button, i) => {
        console.log(i);
        button.addEventListener('click', () => {
            items.forEach(item => item.classList.remove('carousel__item__selected'));
            buttons.forEach(button => button.classList.remove('carousel__button__selected'));

            items[i].classList.add('carousel__item__selected');
            buttons[i].classList.add('carousel__button__selected');
        });
    });

    // select first item on page load
    items[0].classList.add('carousel__item__selected');
    buttons[0].classList.add('carousel__button__selected');
});

document.getElementById(".carousel2").forEach(carousel=> {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class='carousel__button'></span>`;
    });

    console.log(items);
    console.log(buttonsHtml);

    carousel.insertAdjacentHTML('beforeend', `
        <div class='carousel__nav'>
            ${ buttonsHtml.join('')}
        </div>
    `);

    const buttons = carousel.querySelectorAll('.carousel__button');

    console.log(buttons);

    buttons.forEach((button, i) => {
        console.log(i);
        button.addEventListener('click', () => {
            items.forEach(item => item.classList.remove('carousel__item__selected'));
            buttons.forEach(button => button.classList.remove('carousel__button__selected'));

            items[i].classList.add('carousel__item__selected');
            buttons[i].classList.add('carousel__button__selected');
        });
    });

    // select first item on page load
    items[0].classList.add('carousel__item__selected');
    buttons[0].classList.add('carousel__button__selected');
});

