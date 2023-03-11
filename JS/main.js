const btnDarkMode = document.querySelector('.dark-mode-btn');

// 1. Проверка темной темы на уровне системных настроек (если пользователь у себя на Windows MacOS включил темную тему, то зайдя на сайт сразу будет включена темная тема или светлая)
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}


// 2. Проверка темной темы в local Storage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}



// Если меняется системные настройки меняем тему (то есть когда тема меняется по времени суток, ночью включается дарк моуд)
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    
    const newColorScheme = event.matches ? "dark" : "light";


    if(newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem('darkMode', 'dark'); // Чтобы при переходе не менялись темы в случае, если в системных настройках меняем на темную/светлую тему, а на страницу ставим противополжную тему (светлая/темная). Допустим в системных настройках стоит темная тема, на самой же страницы мы меняем ее на светлую и при переходе на другую страницу сохраняется светлая. 
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem('darkMode', 'light'); // Чтобы при переходе не менялись темы в случае, если в системных настройках меняем на темную/светлую тему, а на страницу ставим противополжную тему (светлая/темная). Допустим в системных настройках стоит темная тема, на самой же страницы мы меняем ее на светлую и при переходе на другую страницу сохраняется светлая. 
    }
})


// Включение ночного режима по кнопке
btnDarkMode.onclick = () => {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");


    // Toggle возращает true и fallse. Если вернет true то в локасторейджe (в коде странице Application -> LocalStorage) закрепляем запись (это для того, чтобы если на главной странице нажал даркмоуд и прешел на страницу SKills, то даркмоуд должен будет автоматический быть включенным):
    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}