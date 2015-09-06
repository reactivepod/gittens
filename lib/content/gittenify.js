import catNames from 'cat-names';
import mutationSummary from 'mutation-summary';
import catPhoto from './catPhoto';
import replaceUsers from './replaceUsers';

export default function gittenify(store) {
  const userMap = {};

  // Eslint seems to lint this incorrectly so
  // I am turning off eslint for that one line.
  /* eslint-disable */
  for (let u of store.users) {
  /* eslint-enable */
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
}
