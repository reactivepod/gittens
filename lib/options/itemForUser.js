export default function itemForUser(user) {
  const close = document.createElement('div');
  const li = document.createElement('li');

  close.classList.add('user-list-remove');
  close.textContent = 'x';

  li.classList.add('user-list-item');
  li.setAttribute('data-user', user);
  li.textContent = user;
  li.appendChild(close);

  return li;
}
