const faqButtons = document.querySelectorAll('.btn');

faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const faqContainer = btn.parentElement;
        const btnImg = btn.querySelector('img');

        faqContainer.classList.toggle('active');

        if (faqContainer.classList.contains('active')) {
            btnImg.src = "./assets/images/icon-minus.svg";
        } else {
            btnImg.src = "./assets/images/icon-plus.svg";
        }
    });
});
