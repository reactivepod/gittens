import 'babel/polyfill';
import catNames from 'cat-names';
import lorem from 'lorem-ipsum';
import mutationSummary from 'mutation-summary';

const catWords = [
  'meooow',
  'meow',
  'scratching post',
  'naww',
  'purrr',
  'meeeeow',
  'kibbles',
  'cuddle',
  'snuggle',
  'purr',
  'nyaaa',
  'nyan',
];

// Selectors.
const containerSelector = [
  '.js-comment-container',
  '.issue-meta',
  '.gh-header-meta',
].join(', ');
const authorSelector = [
  '.author',
  '.author-name > a',
  '.opened-by > a',
].join(', ');
const avatarSelector = [
  '.avatar',
  '.timeline-comment-avatar',
].join(', ');
const commentSelector = [
  '.comment-body > p',
  '.comment-body .email-fragment',
].join(', ');

function catPhoto(n, w, h) {
  return `https://placekitten.com/${w}/${h}?image=${n}`;
}

function replaceUsers(el, store, userMap) {
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
        [].forEach.call(comments, (comment) => {
          comment.textContent = lorem({units: 'paragraphs', words: catWords});
        });
      }
    }
  });
}

chrome.storage.local.get(null, (store) => {
  const userMap = {};

  for (const u of store.users) {
    const n = Math.floor(Math.random() * 15) + 1;
    const avatar = catPhoto.bind(null, n);

    userMap[u] = {
      name: catNames.random(),
      avatar,
    };
  }

  replaceUsers(document, store, userMap);

  const pjax = document.querySelector('[data-pjax-container]');

  if (pjax) {
    mutationSummary({rootNode: pjax, queries: [{all: true}], callback: (summaries) => {
      const summary = summaries[0];
      summary.added.forEach((el) => {
        if (el.parentNode === pjax && el.querySelectorAll) {
          replaceUsers(el, store, userMap);
        }
      });
    }});
  }
});
