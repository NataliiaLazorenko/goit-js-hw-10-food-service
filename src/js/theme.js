const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('.js-switch-input'),
};

applySelectedTheme();

refs.checkbox.addEventListener('change', onSwitchTheme);

function onSwitchTheme() {
  if (refs.checkbox.checked) {
    localStorage.setItem('theme', Theme.DARK);

    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);

    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
  }
}

function applySelectedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.DARK) {
    refs.checkbox.checked = 'true';
    onSwitchTheme();
  }
}
