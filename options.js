import 'babel/polyfill';

const themeSelect = document.getElementById('theme');
const replaceTextInput = document.getElementById('replace-text');
const form = document.getElementById('add-form');
const userInput = document.getElementById('user-input');
const userList = document.getElementById('user-list');

function updateTheme() {
  const theme = themeSelect.options[theme.selectedIndex].value;
  chrome.storage.local.set({theme});
}

function updateReplaceText() {
  const replaceText = !!replaceTextInput.checked;
  chrome.storage.local.set({replaceText});
}

function itemForUser(user) {
  const close = document.createElement('div');
  close.classList.add('user-list-remove');
  close.textContent = 'x';

  const li = document.createElement('li');

  li.classList.add('user-list-item');
  li.setAttribute('data-user', user);
  li.textContent = user;
  li.appendChild(close);

  return li;
}

function renderList(users) {
  userList.innerHTML = '';
  users.forEach((user) => {
    userList.appendChild(itemForUser(user));
  });
}

chrome.storage.local.get(null, (data) => {
  const theme = data.theme || 'cats';
  const replaceText = !!data.replaceText;
  let users = data.users || [];

  themeSelect.value = theme;
  replaceTextInput.checked = replaceText;
  renderList(users);

  themeSelect.addEventListener('change', updateTheme);
  replaceTextInput.addEventListener('change', updateReplaceText);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = userInput.value.trim();
    if (user && !~users.indexOf(user)) {
      users.push(user);
      chrome.storage.local.set({users});
      renderList(users);
      userInput.value = '';
    }
  });

  // handle removals
  userList.addEventListener('click', (e) => {
    const t = e.target;

    if (t.className.match(/user-list-remove/)) {
      const user = t.parentNode.getAttribute('data-user');
      users = users.filter(u => u !== user);
      chrome.storage.local.set({users});
      renderList(users);
    }
  });
});
