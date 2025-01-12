const cards = document.querySelectorAll('.card');

const cart = document.querySelector('.header__menu>button');

const orderButt = document.querySelector('.header__content button');

orderButt.addEventListener('click', () => {
    alert('Бургер уже летит к Вам!')
});

cart.addEventListener('click', () => {
    alert('Ваша корзина пуста... Давайте попробуем что-нибудь прикупить!');
})

cards.forEach(elem => {
    const value = elem.children[1].textContent.trim();
    elem.addEventListener('click', () => {
        switch(value) {
            case 'Бургеры':
                alert(`Извините, бургеров нет в наличии, но их скоро добавят!`)
                break
            case 'Блюда из курицы':
                alert(`Извините, блюд из курицы нет в наличии, но их скоро добавят!`)
                break
            case 'Горячие блюда':
                alert(`Извините, горячих блюд нет в наличии, но их скоро добавят!`)
                break
            case 'Закуски':
                alert(`Извините, закусок нет в наличии, но их скоро добавят!`)
                break
            case 'Салаты':
                alert(`Извините, салатов нет в наличии, но их скоро добавят!`)
                break
            default:
                alert(`Извините, десертов нет в наличии, но их скоро добавят!`)
        }
    })
})