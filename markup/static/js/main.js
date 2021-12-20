'use strict';

const page = document.querySelector('.page');
const themeButton = page.querySelector('.theme');
const pageWrapper = page.querySelector('.page__wrapper');
const borderColor = page.querySelectorAll('.content-block-wrap');
const sidebar = page.querySelectorAll('.sidebar');
const search = page.querySelector('.search');
const searchInput = search.querySelector('.search__input');

const chancheTheme = () => {
    pageWrapper.classList.toggle('page__wrapper--theme');
    search.classList.toggle('search--theme');

    if (pageWrapper.classList.contains('page__wrapper--theme')) {
        for (let i = 0; i < borderColor.length; i++) {
            borderColor[i].classList.add('content-block-wrap--theme');
        }
        for (let i = 0; i < sidebar.length; i++) {
            sidebar[i].classList.add('sidebar--theme');
        }

    } else {
        for (let i = 0; i < borderColor.length; i++) {
            borderColor[i].classList.remove('content-block-wrap--theme');
        }
        for (let i = 0; i < sidebar.length; i++) {
            sidebar[i].classList.remove('sidebar--theme');
        }
    }
}

themeButton.addEventListener('click', function () {
    themeButton.classList.toggle('theme--click');
    chancheTheme();
    if (themeButton.classList.contains('theme--click')) {
        themeText.textContent = 'Light mode';
    } else {
        themeText.textContent = 'Night mode';
    }
});

