const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Check of dark theme in system settings
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// 2. Check of dark theme in localstorage
if(localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// If change system settings, change theme
window.matchMedia("(prefers-color-scheme: dark").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : 'light';

    alert('Change!!!');

    if(newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");    
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
    }
}
)

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if(isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem("darkMode","light");
    }
}