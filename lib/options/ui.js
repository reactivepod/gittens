import { themeSelect, replaceTextInput, form, userInput, userList } from './elements';
import { updateTheme, updateReplaceText } from './updateUi';
import renderList from './renderList';

export default function optionsUi(data) {
  const theme = data.theme || 'cats';
  const replaceText = !!data.replaceText;
  const regex = new RegExp(/user-list-remove/);
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
      chrome.storage.local.set({ users });
      renderList(users);
      userInput.value = '';
    }
  });

  // handle removals
  userList.addEventListener('click', (e) => {
    const t = e.target;

    if (t.className.match(regex)) {
      const user = t.parentNode.getAttribute('data-user');

      users = users.filter(u => u !== user);
      chrome.storage.local.set({ users });
      renderList(users);
    }
  });
}
