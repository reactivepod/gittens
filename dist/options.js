(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _optionsUi = require('./options/ui');

var _optionsUi2 = _interopRequireDefault(_optionsUi);

chrome.storage.local.get(null, _optionsUi2['default']);

},{"./options/ui":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var themeSelect = document.getElementById('theme');
exports.themeSelect = themeSelect;
var replaceTextInput = document.getElementById('replace-text');
exports.replaceTextInput = replaceTextInput;
var form = document.getElementById('add-form');
exports.form = form;
var userInput = document.getElementById('user-input');
exports.userInput = userInput;
var userList = document.getElementById('user-list');
exports.userList = userList;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = itemForUser;

function itemForUser(user) {
  var close = document.createElement('div');
  var li = document.createElement('li');

  close.classList.add('user-list-remove');
  close.textContent = 'x';

  li.classList.add('user-list-item');
  li.setAttribute('data-user', user);
  li.textContent = user;
  li.appendChild(close);

  return li;
}

module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = renderList;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _elements = require('./elements');

var _itemForUser = require('./itemForUser');

var _itemForUser2 = _interopRequireDefault(_itemForUser);

function renderList(users) {
  _elements.userList.innerHTML = '';
  users.forEach(function (user) {
    _elements.userList.appendChild((0, _itemForUser2['default'])(user));
  });
}

module.exports = exports['default'];

},{"./elements":2,"./itemForUser":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = optionsUi;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _elements = require('./elements');

var _updateUi = require('./updateUi');

var _renderList = require('./renderList');

var _renderList2 = _interopRequireDefault(_renderList);

function optionsUi(data) {
  var theme = data.theme || 'cats';
  var replaceText = !!data.replaceText;
  var regex = new RegExp(/user-list-remove/);
  var users = data.users || [];

  _elements.themeSelect.value = theme;
  _elements.replaceTextInput.checked = replaceText;
  (0, _renderList2['default'])(users);

  _elements.themeSelect.addEventListener('change', _updateUi.updateTheme);
  _elements.replaceTextInput.addEventListener('change', _updateUi.updateReplaceText);

  _elements.form.addEventListener('submit', function (e) {
    e.preventDefault();

    var user = _elements.userInput.value.trim();

    if (user && ! ~users.indexOf(user)) {
      users.push(user);
      chrome.storage.local.set({ users: users });
      (0, _renderList2['default'])(users);
      _elements.userInput.value = '';
    }
  });

  // handle removals
  _elements.userList.addEventListener('click', function (e) {
    var t = e.target;

    if (t.className.match(regex)) {
      (function () {
        var user = t.parentNode.getAttribute('data-user');

        users = users.filter(function (u) {
          return u !== user;
        });
        chrome.storage.local.set({ users: users });
        (0, _renderList2['default'])(users);
      })();
    }
  });
}

module.exports = exports['default'];

},{"./elements":2,"./renderList":4,"./updateUi":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.updateTheme = updateTheme;
exports.updateReplaceText = updateReplaceText;

var _elements = require('./elements');

function updateTheme() {
  var theme = _elements.themeSelect.options[theme.selectedIndex].value;

  chrome.storage.local.set({ theme: theme });
}

function updateReplaceText() {
  var replaceText = !!_elements.replaceTextInput.checked;

  chrome.storage.local.set({ replaceText: replaceText });
}

},{"./elements":2}]},{},[1])
//# sourceMappingURL=options.js.map
