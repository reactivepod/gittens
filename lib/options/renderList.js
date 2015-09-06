import { userList } from './elements';
import itemForUser from './itemForUser';

export default function renderList(users) {
  userList.innerHTML = '';
  users.forEach((user) => {
    userList.appendChild(itemForUser(user));
  });
}
