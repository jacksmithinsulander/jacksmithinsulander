let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#checkbox');

const enableDarkMode = () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});
