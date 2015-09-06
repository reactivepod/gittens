import lorem from 'lorem-ipsum';
import { catWords, containerSelector, authorSelector, avatarSelector, commentSelector } from './selectors';

export default function replaceUsers(el, store, userMap) {
  const containers = el.querySelectorAll(containerSelector);

  [...containers].forEach((container) => {
    const author = container.querySelectorAll(authorSelector)[0];
    const avatar = container.querySelectorAll(avatarSelector)[0];
    const comments = container.querySelectorAll(commentSelector);

    if (!author) return;

    const username = author.textContent || author.getAttribute('aria-label');

    if (username in userMap) {
      const uData = userMap[username];

      author.textContent = uData.name;

      if (avatar) {
        avatar.src = uData.avatar(avatar.width, avatar.height);
      }

      if (comments && store.replaceText) {
        [...comments].forEach((comment) => {
          comment.textContent = lorem({units: 'paragraphs', words: catWords});
        });
      }
    }
  });
}
