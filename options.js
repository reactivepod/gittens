let themeSelect = document.getElementById('theme');
let replaceTextInput = document.getElementById('replace-text');
let form = document.getElementById('add-form');
let userInput = document.getElementById('user-input');
let userList = document.getElementById('user-list');

chrome.storage.local.get(null, function (data) {
  let theme = data.theme || 'cats';
  let users = data.users || [];
  let replaceText = !!data.replaceText;

  themeSelect.value = theme;
  replaceTextInput.checked = replaceText;
  renderList(users);

  themeSelect.addEventListener('change', updateTheme);
  replaceTextInput.addEventListener('change', updateReplaceText);

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let user = userInput.value.trim();
    if (user && !~users.indexOf(user)) {
      users.push(user);
      chrome.storage.local.set({users});
      renderList(users);
      userInput.value = '';
    }
  });

  // handle removals
  userList.addEventListener('click', function (e) {
    let t = e.target;

    if (t.className.match(/user-list-remove/)) {
      let user = t.parentNode.getAttribute('data-user');
      users = users.filter(u => u != user);
      chrome.storage.local.set({users});
      renderList(users);
    }
  });

});

function renderList(users) {
  userList.innerHTML = '';
  users.forEach(function (user) {
    userList.appendChild(itemForUser(user));
  });
}

function updateTheme() {
  let theme = themeSelect.options[theme.selectedIndex].value;
  chrome.storage.local.set({theme});
}

function updateReplaceText() {
  let replaceText = !!replaceTextInput.checked;
  chrome.storage.local.set({replaceText});
}

function itemForUser(user) {
  let close = document.createElement('div');
  close.classList.add('user-list-remove');
  close.textContent = 'x';

  let li = document.createElement('li');
  li.classList.add('user-list-item');
  li.setAttribute('data-user', user);
  li.textContent = user;
  li.appendChild(close);

  return li;
}
