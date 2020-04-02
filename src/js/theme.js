const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkRef = document.querySelector('.js-switch-input');

defaultTheme();

checkRef.addEventListener('change', onChangeCheck);

function defaultTheme() {
  const currentTheme = localStorage.getItem('Theme');
  console.log(currentTheme);

  if (!currentTheme) {
    localStorage.setItem('Theme', Theme.LIGHT);
    document.body.classList.add('light-theme');
  }

  if (currentTheme && currentTheme === Theme.DARK) {
    document.body.classList.add('dark-theme');
    checkRef.checked = true;
  } else {
    document.body.classList.add('light-theme');
    checkRef.checked = false;
  }
}

function onChangeCheck(event) {
  localStorage.setItem('Theme', Theme.LIGHT);

  if (event.target.checked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }
}
