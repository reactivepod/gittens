import catNames from 'cat-names';
import lorem from 'lorem-ipsum';
import MutationSummary from 'mutation-summary';

const catWords = [
  'meooow', 'meow', 'scratching post', 'naww',
  'purrr', 'meeeeow', 'kibbles', 'cuddle', 'snuggle',
  'purr', 'nyaaa', 'nyan'
];

let containerSelector = [
  '.js-comment-container',
  '.issue-meta',
  '.gh-header-meta',
].join(', ');

let authorSelector = [
  '.author',
  '.author-name > a',
  '.opened-by > a',
].join(', ');

let avatarSelector = ['.avatar', '.timeline-comment-avatar'].join(', ');
let commentSelector = ['.comment-body > p, .comment-body .email-fragment'].join(', ');

function catPhoto(n, w, h) {
  return `https://placekitten.com/${w}/${h}?image=${n}`;
}

chrome.storage.local.get(null, function (store) {
  let settings = store.settings;
  let userMap = {};

  for (let u of store.users) {
    let n = Math.floor(Math.random() * 15) + 1;
    let avatar = catPhoto.bind(null, n);

    userMap[u] = {
      name: catNames.random(),
      avatar
    };
  }

  replaceUsers(document, store, userMap);

  let pjax = document.querySelector('[data-pjax-container]');
  if (pjax) {
    new MutationSummary({rootNode: pjax, queries: [{all: true}], callback: function (summaries) {
      let summary = summaries[0];
      summary.added.forEach(function (el) {
        if (el.parentNode === pjax && el.querySelectorAll) {
          replaceUsers(el, store, userMap);
        }
      })
    }});
  }
});

function replaceUsers(el, store, userMap) {
  let containers = el.querySelectorAll(containerSelector);
  [].slice.call(containers).forEach(function (container) {
      let author = container.querySelectorAll(authorSelector)[0];
      let avatar = container.querySelectorAll(avatarSelector)[0];
      let comments = container.querySelectorAll(commentSelector);

      if (!(author)) return;

      let username = author.textContent || author.getAttribute('aria-label');
      if (username in userMap) {
        let uData = userMap[username];
        author.textContent = uData.name;

        if (avatar) {
          avatar.src = uData.avatar(avatar.width, avatar.height);
        }

        if (comments && store.replaceText) {
          [].forEach.call(comments, function (comment) {
            comment.textContent = lorem({units: 'paragraphs', words: catWords});
          })
        }
      }
    })
};
