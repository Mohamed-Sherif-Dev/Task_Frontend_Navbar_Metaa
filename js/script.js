const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('#navLinks');
const checkbox = document.getElementById('dark-mode-btn');


menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});




const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    checkbox.checked = true;
}


checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); 
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); 
    }
});