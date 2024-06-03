
const carousel1 = document.getElementById("carousel1");
    const items01 = carousel1.children;
    const items1 = Array.from(items01);
    const buttonsHtml1 = Array.from(items1, () => {
        return `<span class='carousel__button'></span>`;
    });

    console.log(items1);
    console.log(buttonsHtml1);

    carousel1.insertAdjacentHTML('beforeend', `
        <div class='carousel__nav'>
            ${ buttonsHtml1.join('')}
        </div>
    `);

    const buttons1 = carousel1.querySelectorAll('.carousel__button');

    console.log(buttons1);

    buttons1.forEach((button, i) => {
        console.log(i);
        button.addEventListener('click', () => {
            items1.forEach(item => item.classList.remove('carousel__item__selected'));
            buttons1.forEach(button => button.classList.remove('carousel__button__selected'));

            items1[i].classList.add('carousel__item__selected');
            buttons1[i].classList.add('carousel__button__selected');
        });
    });

// select first item on page load
items1[0].classList.add('carousel__item__selected');
buttons1[0].classList.add('carousel__button__selected');


const carousel2 = document.getElementById("carousel2");
    const items2 = carousel2.children;
    const buttonsHtml2 = Array.from(items2, () => {
        return `<span class='carousel__button'></span>`;
    });

    console.log(items2);
    console.log(buttonsHtml2);

    carousel2.insertAdjacentHTML('beforeend', `
        <div class='carousel__nav'>
            ${ buttonsHtml2.join('')}
        </div>
    `);

    const buttons2 = carousel2.querySelectorAll('.carousel__button');

    console.log(buttons2);

    buttons2.forEach((button, i) => {
        console.log(i);
        button.addEventListener('click', () => {
            items2.forEach(item => item.classList.remove('carousel__item__selected'));
            buttons2.forEach(button => button.classList.remove('carousel__button__selected'));

            items2[i].classList.add('carousel__item__selected');
            buttons2[i].classList.add('carousel__button__selected');
        });
    });

    // select first item on page load
    items2[0].classList.add('carousel__item__selected');
    buttons2[0].classList.add('carousel__button__selected');


