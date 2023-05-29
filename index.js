window.addEventListener('DOMContentLoaded', function() { //Виконання функції після прогрузки дом моделі
    document.querySelector('#burger').addEventListener('click', function() { // коли нажимаю на селектор бургер виконується функція
        document.querySelector('#menu').classList.toggle('is-active') //селектору с айди меню включаэться чи виключаэться клас is-active
    })
    document.querySelector('#menu').addEventListener('click', function() { // коли нажимаю на селектор бургер виконується функція
        document.querySelector('#menu').classList.remove('is-active') //селектору с айди меню включаэться чи виключаэться клас is-active
    })
})