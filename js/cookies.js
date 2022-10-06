let currentTheme = '';

const toggleThemeBtn = document.querySelector('#checkbox');
toggleThemeBtn.addEventListener('click', toggleTheme);

const cookieExists = (document.cookie.match(/^(?:.*;)?\s*themeColor\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];

if (cookieExists !== null) {
	currentTheme = cookieExists;
	} else if (window.matchMedia) {
	currentTheme = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';
}
updateDarkThemeCssClass();

function toggleTheme() {
	if (currentTheme === 'dark') {
		document.cookie = "themeColor=light;path=/;
		currentTheme = 'light';
	} else {
		document.cookie = "themeColor=dark;path=/;
		currentTheme = 'dark';
	}
	console.log('toggle theme to', currentTheme);
	updateDarkThemeCssClass();
}

function updateDarkThemeCssClass() {
	console.log('switch css class');
	if (currentTheme === 'dark') {
		document.body.classList.add('dark-theme');
	} else {
		document.body.classList.remove('dark-theme');
	}
}