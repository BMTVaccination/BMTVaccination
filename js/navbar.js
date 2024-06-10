// Создание переменных
window.addEventListener('scroll', e => {
        let navbar = document.getElementById('navbar').classList
        let active_class = "navbar_scrolled"
/**
 * Просмотр события прокрутки
 */
    if(pageYOffset > 1200) navbar.add(active_class)
    else navbar.remove(active_class)
})