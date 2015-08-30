(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _catNames = require('cat-names');

var _catNames2 = _interopRequireDefault(_catNames);

var _loremIpsum = require('lorem-ipsum');

var _loremIpsum2 = _interopRequireDefault(_loremIpsum);

var _mutationSummary = require('mutation-summary');

var _mutationSummary2 = _interopRequireDefault(_mutationSummary);

var catWords = ['meooow', 'meow', 'scratching post', 'naww', 'purrr', 'meeeeow', 'kibbles', 'cuddle', 'snuggle', 'purr', 'nyaaa', 'nyan'];

var containerSelector = ['.js-comment-container', '.issue-meta', '.gh-header-meta'].join(', ');

var authorSelector = ['.author', '.author-name > a', '.opened-by > a'].join(', ');

var avatarSelector = ['.avatar', '.timeline-comment-avatar'].join(', ');
var commentSelector = ['.comment-body > p, .comment-body .email-fragment'].join(', ');

function catPhoto(n, w, h) {
  return 'https://placekitten.com/' + w + '/' + h + '?image=' + n;
}

chrome.storage.local.get(null, function (store) {
  var settings = store.settings;
  var userMap = {};

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = store.users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var u = _step.value;

      var n = Math.floor(Math.random() * 15) + 1;
      var avatar = catPhoto.bind(null, n);

      userMap[u] = {
        name: _catNames2['default'].random(),
        avatar: avatar
      };
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  replaceUsers(document, store, userMap);

  var pjax = document.querySelector('[data-pjax-container]');
  if (pjax) {
    new _mutationSummary2['default']({ rootNode: pjax, queries: [{ all: true }], callback: function callback(summaries) {
        var summary = summaries[0];
        summary.added.forEach(function (el) {
          if (el.parentNode === pjax && el.querySelectorAll) {
            replaceUsers(el, store, userMap);
          }
        });
      } });
  }
});

function replaceUsers(el, store, userMap) {
  var containers = el.querySelectorAll(containerSelector);
  [].slice.call(containers).forEach(function (container) {
    var author = container.querySelectorAll(authorSelector)[0];
    var avatar = container.querySelectorAll(avatarSelector)[0];
    var comments = container.querySelectorAll(commentSelector);

    if (!author) return;

    var username = author.textContent || author.getAttribute('aria-label');
    if (username in userMap) {
      var uData = userMap[username];
      author.textContent = uData.name;

      if (avatar) {
        avatar.src = uData.avatar(avatar.width, avatar.height);
      }

      if (comments && store.replaceText) {
        [].forEach.call(comments, function (comment) {
          comment.textContent = (0, _loremIpsum2['default'])({ units: 'paragraphs', words: catWords });
        });
      }
    }
  });
};

},{"cat-names":4,"lorem-ipsum":8,"mutation-summary":9}],2:[function(require,module,exports){
exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

},{}],3:[function(require,module,exports){
module.exports=[
	"Abby",
	"Angel",
	"Annie",
	"Baby",
	"Bailey",
	"Bandit",
	"Bear",
	"Bella",
	"Bob",
	"Boo",
	"Boots",
	"Bubba",
	"Buddy",
	"Buster",
	"Cali",
	"Callie",
	"Casper",
	"Charlie",
	"Chester",
	"Chloe",
	"Cleo",
	"Coco",
	"Cookie",
	"Cuddles",
	"Daisy",
	"Dusty",
	"Felix",
	"Fluffy",
	"Garfield",
	"George",
	"Ginger",
	"Gizmo",
	"Gracie",
	"Harley",
	"Jack",
	"Jasmine",
	"Jasper",
	"Kiki",
	"Kitty",
	"Leo",
	"Lilly",
	"Lily",
	"Loki",
	"Lola",
	"Lucky",
	"Lucy",
	"Luna",
	"Maggie",
	"Max",
	"Mia",
	"Midnight",
	"Milo",
	"Mimi",
	"Miss kitty",
	"Missy",
	"Misty",
	"Mittens",
	"Molly",
	"Muffin",
	"Nala",
	"Oliver",
	"Oreo",
	"Oscar",
	"Patches",
	"Peanut",
	"Pepper",
	"Precious",
	"Princess",
	"Pumpkin",
	"Rascal",
	"Rocky",
	"Sadie",
	"Salem",
	"Sam",
	"Samantha",
	"Sammy",
	"Sasha",
	"Sassy",
	"Scooter",
	"Shadow",
	"Sheba",
	"Simba",
	"Simon",
	"Smokey",
	"Snickers",
	"Snowball",
	"Snuggles",
	"Socks",
	"Sophie",
	"Spooky",
	"Sugar",
	"Tiger",
	"Tigger",
	"Tinkerbell",
	"Toby",
	"Trouble",
	"Whiskers",
	"Willow",
	"Zoe",
	"Zoey"
]

},{}],4:[function(require,module,exports){
'use strict';
var uniqueRandomArray = require('unique-random-array');
var catNames = require('./cat-names.json');

exports.all = catNames;
exports.random = uniqueRandomArray(catNames);

},{"./cat-names.json":3,"unique-random-array":5}],5:[function(require,module,exports){
'use strict';
var uniqueRandom = require('unique-random');

module.exports = function (arr) {
	var rand = uniqueRandom(0, arr.length - 1);

	return function () {
		return arr[rand()];
	};
};

},{"unique-random":6}],6:[function(require,module,exports){
'use strict';
module.exports = function (min, max) {
	var prev;
	return function rand() {
		var num = Math.floor(Math.random() * (max - min + 1) + min);
		return prev = num === prev && min !== max ? rand() : num;
	};
};

},{}],7:[function(require,module,exports){
var dictionary = {
  words: [
    'ad',
    'adipisicing',
    'aliqua',
    'aliquip',
    'amet',
    'anim',
    'aute',
    'cillum',
    'commodo',
    'consectetur',
    'consequat',
    'culpa',
    'cupidatat',
    'deserunt',
    'do',
    'dolor',
    'dolore',
    'duis',
    'ea',
    'eiusmod',
    'elit',
    'enim',
    'esse',
    'est',
    'et',
    'eu',
    'ex',
    'excepteur',
    'exercitation',
    'fugiat',
    'id',
    'in',
    'incididunt',
    'ipsum',
    'irure',
    'labore',
    'laboris',
    'laborum',
    'Lorem',
    'magna',
    'minim',
    'mollit',
    'nisi',
    'non',
    'nostrud',
    'nulla',
    'occaecat',
    'officia',
    'pariatur',
    'proident',
    'qui',
    'quis',
    'reprehenderit',
    'sint',
    'sit',
    'sunt',
    'tempor',
    'ullamco',
    'ut',
    'velit',
    'veniam',
    'voluptate'  
  ]
};

module.exports = dictionary;
},{}],8:[function(require,module,exports){
var generator = function() {
  var options = (arguments.length) ? arguments[0] : {}
    , count = options.count || 1
    , units = options.units || 'sentences'
    , sentenceLowerBound = options.sentenceLowerBound || 5
    , sentenceUpperBound = options.sentenceUpperBound || 15
	  , paragraphLowerBound = options.paragraphLowerBound || 3
	  , paragraphUpperBound = options.paragraphUpperBound || 7
	  , format = options.format || 'plain'
    , words = options.words || require('./dictionary').words
    , random = options.random || Math.random
    , suffix = options.suffix || require('os').EOL;

  units = simplePluralize(units.toLowerCase());

  var randomInteger = function(min, max) {
    return Math.floor(random() * (max - min + 1) + min);
  };

  var randomWord = function(words) {
    return words[randomInteger(0, words.length - 1)];
  };

  var randomSentence = function(words, lowerBound, upperBound) {
    var sentence = ''
      , bounds = {min: 0, max: randomInteger(lowerBound, upperBound)};

    while (bounds.min < bounds.max) {
      sentence = sentence + ' ' + randomWord(words);
      bounds.min = bounds.min + 1;
    }

    if (sentence.length) {
      sentence = sentence.slice(1);
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }

    return sentence;
  };

  var randomParagraph = function(words, lowerBound, upperBound, sentenceLowerBound, sentenceUpperBound) {
    var paragraph = ''
      , bounds = {min: 0, max: randomInteger(lowerBound, upperBound)};

    while (bounds.min < bounds.max) {
      paragraph = paragraph + '. ' + randomSentence(words, sentenceLowerBound, sentenceUpperBound);
      bounds.min = bounds.min + 1;
    }

    if (paragraph.length) {
      paragraph = paragraph.slice(2);
      paragraph = paragraph + '.';
    }

    return paragraph;
  }

  var iter = 0
    , bounds = {min: 0, max: count}
    , string = ''
    , prefix = '';

  if (format == 'html') {
    openingTag = '<p>';
    closingTag = '</p>';
  }

  while (bounds.min < bounds.max) {
    switch (units.toLowerCase()) {
      case 'words':
        string = string + ' ' + randomWord(words);
        break;
      case 'sentences':
        string = string + '. ' + randomSentence(words, sentenceLowerBound, sentenceUpperBound);
        break;
      case 'paragraphs':
        var nextString = randomParagraph(words, paragraphLowerBound, paragraphUpperBound, sentenceLowerBound, sentenceUpperBound);

        if (format == 'html') {
          nextString = openingTag + nextString + closingTag;
          if (bounds.min < bounds.max - 1) {
            nextString = nextString + suffix; // Each paragraph on a new line
          }
        } else if (bounds.min < bounds.max - 1) {
          nextString = nextString + suffix + suffix; // Double-up the EOL character to make distinct paragraphs, like carriage return
        }

        string = string + nextString;

        break;
    }

    bounds.min = bounds.min + 1;
  }

  if (string.length) {
    var pos = 0;

    if (string.indexOf('. ') == 0) {
      pos = 2;
    } else if (string.indexOf('.') == 0 || string.indexOf(' ') == 0) {
      pos = 1;
    }

    string = string.slice(pos);

    if (units == 'sentences') {
      string = string + '.';
    }
  }

  return string;
};

function simplePluralize(string) {
  if (string.indexOf('s', string.length - 1) === -1) {
    return string + 's';
  }
  return string;
}

module.exports = generator;

},{"./dictionary":7,"os":2}],9:[function(require,module,exports){
// Copyright 2011 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MutationObserverCtor;
if (typeof WebKitMutationObserver !== 'undefined')
    MutationObserverCtor = WebKitMutationObserver;
else
    MutationObserverCtor = MutationObserver;

if (MutationObserverCtor === undefined) {
    console.error('DOM Mutation Observers are required.');
    console.error('https://developer.mozilla.org/en-US/docs/DOM/MutationObserver');
    throw Error('DOM Mutation Observers are required');
}

var NodeMap = (function () {
    function NodeMap() {
        this.nodes = [];
        this.values = [];
    }
    NodeMap.prototype.isIndex = function (s) {
        return +s === s >>> 0;
    };

    NodeMap.prototype.nodeId = function (node) {
        var id = node[NodeMap.ID_PROP];
        if (!id)
            id = node[NodeMap.ID_PROP] = NodeMap.nextId_++;
        return id;
    };

    NodeMap.prototype.set = function (node, value) {
        var id = this.nodeId(node);
        this.nodes[id] = node;
        this.values[id] = value;
    };

    NodeMap.prototype.get = function (node) {
        var id = this.nodeId(node);
        return this.values[id];
    };

    NodeMap.prototype.has = function (node) {
        return this.nodeId(node) in this.nodes;
    };

    NodeMap.prototype.delete = function (node) {
        var id = this.nodeId(node);
        delete this.nodes[id];
        this.values[id] = undefined;
    };

    NodeMap.prototype.keys = function () {
        var nodes = [];
        for (var id in this.nodes) {
            if (!this.isIndex(id))
                continue;
            nodes.push(this.nodes[id]);
        }

        return nodes;
    };
    NodeMap.ID_PROP = '__mutation_summary_node_map_id__';
    NodeMap.nextId_ = 1;
    return NodeMap;
})();

/**
*  var reachableMatchableProduct = [
*  //  STAYED_OUT,  ENTERED,     STAYED_IN,   EXITED
*    [ STAYED_OUT,  STAYED_OUT,  STAYED_OUT,  STAYED_OUT ], // STAYED_OUT
*    [ STAYED_OUT,  ENTERED,     ENTERED,     STAYED_OUT ], // ENTERED
*    [ STAYED_OUT,  ENTERED,     STAYED_IN,   EXITED     ], // STAYED_IN
*    [ STAYED_OUT,  STAYED_OUT,  EXITED,      EXITED     ]  // EXITED
*  ];
*/
var Movement;
(function (Movement) {
    Movement[Movement["STAYED_OUT"] = 0] = "STAYED_OUT";
    Movement[Movement["ENTERED"] = 1] = "ENTERED";
    Movement[Movement["STAYED_IN"] = 2] = "STAYED_IN";
    Movement[Movement["REPARENTED"] = 3] = "REPARENTED";
    Movement[Movement["REORDERED"] = 4] = "REORDERED";
    Movement[Movement["EXITED"] = 5] = "EXITED";
})(Movement || (Movement = {}));

function enteredOrExited(changeType) {
    return changeType === 1 /* ENTERED */ || changeType === 5 /* EXITED */;
}

var NodeChange = (function () {
    function NodeChange(node, childList, attributes, characterData, oldParentNode, added, attributeOldValues, characterDataOldValue) {
        if (typeof childList === "undefined") { childList = false; }
        if (typeof attributes === "undefined") { attributes = false; }
        if (typeof characterData === "undefined") { characterData = false; }
        if (typeof oldParentNode === "undefined") { oldParentNode = null; }
        if (typeof added === "undefined") { added = false; }
        if (typeof attributeOldValues === "undefined") { attributeOldValues = null; }
        if (typeof characterDataOldValue === "undefined") { characterDataOldValue = null; }
        this.node = node;
        this.childList = childList;
        this.attributes = attributes;
        this.characterData = characterData;
        this.oldParentNode = oldParentNode;
        this.added = added;
        this.attributeOldValues = attributeOldValues;
        this.characterDataOldValue = characterDataOldValue;
        this.isCaseInsensitive = this.node.nodeType === Node.ELEMENT_NODE && this.node instanceof HTMLElement && this.node.ownerDocument instanceof HTMLDocument;
    }
    NodeChange.prototype.getAttributeOldValue = function (name) {
        if (!this.attributeOldValues)
            return undefined;
        if (this.isCaseInsensitive)
            name = name.toLowerCase();
        return this.attributeOldValues[name];
    };

    NodeChange.prototype.getAttributeNamesMutated = function () {
        var names = [];
        if (!this.attributeOldValues)
            return names;
        for (var name in this.attributeOldValues) {
            names.push(name);
        }
        return names;
    };

    NodeChange.prototype.attributeMutated = function (name, oldValue) {
        this.attributes = true;
        this.attributeOldValues = this.attributeOldValues || {};

        if (name in this.attributeOldValues)
            return;

        this.attributeOldValues[name] = oldValue;
    };

    NodeChange.prototype.characterDataMutated = function (oldValue) {
        if (this.characterData)
            return;
        this.characterData = true;
        this.characterDataOldValue = oldValue;
    };

    // Note: is it possible to receive a removal followed by a removal. This
    // can occur if the removed node is added to an non-observed node, that
    // node is added to the observed area, and then the node removed from
    // it.
    NodeChange.prototype.removedFromParent = function (parent) {
        this.childList = true;
        if (this.added || this.oldParentNode)
            this.added = false;
        else
            this.oldParentNode = parent;
    };

    NodeChange.prototype.insertedIntoParent = function () {
        this.childList = true;
        this.added = true;
    };

    // An node's oldParent is
    //   -its present parent, if its parentNode was not changed.
    //   -null if the first thing that happened to it was an add.
    //   -the node it was removed from if the first thing that happened to it
    //      was a remove.
    NodeChange.prototype.getOldParent = function () {
        if (this.childList) {
            if (this.oldParentNode)
                return this.oldParentNode;
            if (this.added)
                return null;
        }

        return this.node.parentNode;
    };
    return NodeChange;
})();

var ChildListChange = (function () {
    function ChildListChange() {
        this.added = new NodeMap();
        this.removed = new NodeMap();
        this.maybeMoved = new NodeMap();
        this.oldPrevious = new NodeMap();
        this.moved = undefined;
    }
    return ChildListChange;
})();

var TreeChanges = (function (_super) {
    __extends(TreeChanges, _super);
    function TreeChanges(rootNode, mutations) {
        _super.call(this);

        this.rootNode = rootNode;
        this.reachableCache = undefined;
        this.wasReachableCache = undefined;
        this.anyParentsChanged = false;
        this.anyAttributesChanged = false;
        this.anyCharacterDataChanged = false;

        for (var m = 0; m < mutations.length; m++) {
            var mutation = mutations[m];
            switch (mutation.type) {
                case 'childList':
                    this.anyParentsChanged = true;
                    for (var i = 0; i < mutation.removedNodes.length; i++) {
                        var node = mutation.removedNodes[i];
                        this.getChange(node).removedFromParent(mutation.target);
                    }
                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                        var node = mutation.addedNodes[i];
                        this.getChange(node).insertedIntoParent();
                    }
                    break;

                case 'attributes':
                    this.anyAttributesChanged = true;
                    var change = this.getChange(mutation.target);
                    change.attributeMutated(mutation.attributeName, mutation.oldValue);
                    break;

                case 'characterData':
                    this.anyCharacterDataChanged = true;
                    var change = this.getChange(mutation.target);
                    change.characterDataMutated(mutation.oldValue);
                    break;
            }
        }
    }
    TreeChanges.prototype.getChange = function (node) {
        var change = this.get(node);
        if (!change) {
            change = new NodeChange(node);
            this.set(node, change);
        }
        return change;
    };

    TreeChanges.prototype.getOldParent = function (node) {
        var change = this.get(node);
        return change ? change.getOldParent() : node.parentNode;
    };

    TreeChanges.prototype.getIsReachable = function (node) {
        if (node === this.rootNode)
            return true;
        if (!node)
            return false;

        this.reachableCache = this.reachableCache || new NodeMap();
        var isReachable = this.reachableCache.get(node);
        if (isReachable === undefined) {
            isReachable = this.getIsReachable(node.parentNode);
            this.reachableCache.set(node, isReachable);
        }
        return isReachable;
    };

    // A node wasReachable if its oldParent wasReachable.
    TreeChanges.prototype.getWasReachable = function (node) {
        if (node === this.rootNode)
            return true;
        if (!node)
            return false;

        this.wasReachableCache = this.wasReachableCache || new NodeMap();
        var wasReachable = this.wasReachableCache.get(node);
        if (wasReachable === undefined) {
            wasReachable = this.getWasReachable(this.getOldParent(node));
            this.wasReachableCache.set(node, wasReachable);
        }
        return wasReachable;
    };

    TreeChanges.prototype.reachabilityChange = function (node) {
        if (this.getIsReachable(node)) {
            return this.getWasReachable(node) ? 2 /* STAYED_IN */ : 1 /* ENTERED */;
        }

        return this.getWasReachable(node) ? 5 /* EXITED */ : 0 /* STAYED_OUT */;
    };
    return TreeChanges;
})(NodeMap);

var MutationProjection = (function () {
    // TOOD(any)
    function MutationProjection(rootNode, mutations, selectors, calcReordered, calcOldPreviousSibling) {
        this.rootNode = rootNode;
        this.mutations = mutations;
        this.selectors = selectors;
        this.calcReordered = calcReordered;
        this.calcOldPreviousSibling = calcOldPreviousSibling;
        this.treeChanges = new TreeChanges(rootNode, mutations);
        this.entered = [];
        this.exited = [];
        this.stayedIn = new NodeMap();
        this.visited = new NodeMap();
        this.childListChangeMap = undefined;
        this.characterDataOnly = undefined;
        this.matchCache = undefined;

        this.processMutations();
    }
    MutationProjection.prototype.processMutations = function () {
        if (!this.treeChanges.anyParentsChanged && !this.treeChanges.anyAttributesChanged)
            return;

        var changedNodes = this.treeChanges.keys();
        for (var i = 0; i < changedNodes.length; i++) {
            this.visitNode(changedNodes[i], undefined);
        }
    };

    MutationProjection.prototype.visitNode = function (node, parentReachable) {
        if (this.visited.has(node))
            return;

        this.visited.set(node, true);

        var change = this.treeChanges.get(node);
        var reachable = parentReachable;

        // node inherits its parent's reachability change unless
        // its parentNode was mutated.
        if ((change && change.childList) || reachable == undefined)
            reachable = this.treeChanges.reachabilityChange(node);

        if (reachable === 0 /* STAYED_OUT */)
            return;

        // Cache match results for sub-patterns.
        this.matchabilityChange(node);

        if (reachable === 1 /* ENTERED */) {
            this.entered.push(node);
        } else if (reachable === 5 /* EXITED */) {
            this.exited.push(node);
            this.ensureHasOldPreviousSiblingIfNeeded(node);
        } else if (reachable === 2 /* STAYED_IN */) {
            var movement = 2 /* STAYED_IN */;

            if (change && change.childList) {
                if (change.oldParentNode !== node.parentNode) {
                    movement = 3 /* REPARENTED */;
                    this.ensureHasOldPreviousSiblingIfNeeded(node);
                } else if (this.calcReordered && this.wasReordered(node)) {
                    movement = 4 /* REORDERED */;
                }
            }

            this.stayedIn.set(node, movement);
        }

        if (reachable === 2 /* STAYED_IN */)
            return;

        for (var child = node.firstChild; child; child = child.nextSibling) {
            this.visitNode(child, reachable);
        }
    };

    MutationProjection.prototype.ensureHasOldPreviousSiblingIfNeeded = function (node) {
        if (!this.calcOldPreviousSibling)
            return;

        this.processChildlistChanges();

        var parentNode = node.parentNode;
        var nodeChange = this.treeChanges.get(node);
        if (nodeChange && nodeChange.oldParentNode)
            parentNode = nodeChange.oldParentNode;

        var change = this.childListChangeMap.get(parentNode);
        if (!change) {
            change = new ChildListChange();
            this.childListChangeMap.set(parentNode, change);
        }

        if (!change.oldPrevious.has(node)) {
            change.oldPrevious.set(node, node.previousSibling);
        }
    };

    MutationProjection.prototype.getChanged = function (summary, selectors, characterDataOnly) {
        this.selectors = selectors;
        this.characterDataOnly = characterDataOnly;

        for (var i = 0; i < this.entered.length; i++) {
            var node = this.entered[i];
            var matchable = this.matchabilityChange(node);
            if (matchable === 1 /* ENTERED */ || matchable === 2 /* STAYED_IN */)
                summary.added.push(node);
        }

        var stayedInNodes = this.stayedIn.keys();
        for (var i = 0; i < stayedInNodes.length; i++) {
            var node = stayedInNodes[i];
            var matchable = this.matchabilityChange(node);

            if (matchable === 1 /* ENTERED */) {
                summary.added.push(node);
            } else if (matchable === 5 /* EXITED */) {
                summary.removed.push(node);
            } else if (matchable === 2 /* STAYED_IN */ && (summary.reparented || summary.reordered)) {
                var movement = this.stayedIn.get(node);
                if (summary.reparented && movement === 3 /* REPARENTED */)
                    summary.reparented.push(node);
                else if (summary.reordered && movement === 4 /* REORDERED */)
                    summary.reordered.push(node);
            }
        }

        for (var i = 0; i < this.exited.length; i++) {
            var node = this.exited[i];
            var matchable = this.matchabilityChange(node);
            if (matchable === 5 /* EXITED */ || matchable === 2 /* STAYED_IN */)
                summary.removed.push(node);
        }
    };

    MutationProjection.prototype.getOldParentNode = function (node) {
        var change = this.treeChanges.get(node);
        if (change && change.childList)
            return change.oldParentNode ? change.oldParentNode : null;

        var reachabilityChange = this.treeChanges.reachabilityChange(node);
        if (reachabilityChange === 0 /* STAYED_OUT */ || reachabilityChange === 1 /* ENTERED */)
            throw Error('getOldParentNode requested on invalid node.');

        return node.parentNode;
    };

    MutationProjection.prototype.getOldPreviousSibling = function (node) {
        var parentNode = node.parentNode;
        var nodeChange = this.treeChanges.get(node);
        if (nodeChange && nodeChange.oldParentNode)
            parentNode = nodeChange.oldParentNode;

        var change = this.childListChangeMap.get(parentNode);
        if (!change)
            throw Error('getOldPreviousSibling requested on invalid node.');

        return change.oldPrevious.get(node);
    };

    MutationProjection.prototype.getOldAttribute = function (element, attrName) {
        var change = this.treeChanges.get(element);
        if (!change || !change.attributes)
            throw Error('getOldAttribute requested on invalid node.');

        var value = change.getAttributeOldValue(attrName);
        if (value === undefined)
            throw Error('getOldAttribute requested for unchanged attribute name.');

        return value;
    };

    MutationProjection.prototype.attributeChangedNodes = function (includeAttributes) {
        if (!this.treeChanges.anyAttributesChanged)
            return {};

        var attributeFilter;
        var caseInsensitiveFilter;
        if (includeAttributes) {
            attributeFilter = {};
            caseInsensitiveFilter = {};
            for (var i = 0; i < includeAttributes.length; i++) {
                var attrName = includeAttributes[i];
                attributeFilter[attrName] = true;
                caseInsensitiveFilter[attrName.toLowerCase()] = attrName;
            }
        }

        var result = {};
        var nodes = this.treeChanges.keys();

        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];

            var change = this.treeChanges.get(node);
            if (!change.attributes)
                continue;

            if (2 /* STAYED_IN */ !== this.treeChanges.reachabilityChange(node) || 2 /* STAYED_IN */ !== this.matchabilityChange(node)) {
                continue;
            }

            var element = node;
            var changedAttrNames = change.getAttributeNamesMutated();
            for (var j = 0; j < changedAttrNames.length; j++) {
                var attrName = changedAttrNames[j];

                if (attributeFilter && !attributeFilter[attrName] && !(change.isCaseInsensitive && caseInsensitiveFilter[attrName])) {
                    continue;
                }

                var oldValue = change.getAttributeOldValue(attrName);
                if (oldValue === element.getAttribute(attrName))
                    continue;

                if (caseInsensitiveFilter && change.isCaseInsensitive)
                    attrName = caseInsensitiveFilter[attrName];

                result[attrName] = result[attrName] || [];
                result[attrName].push(element);
            }
        }

        return result;
    };

    MutationProjection.prototype.getOldCharacterData = function (node) {
        var change = this.treeChanges.get(node);
        if (!change || !change.characterData)
            throw Error('getOldCharacterData requested on invalid node.');

        return change.characterDataOldValue;
    };

    MutationProjection.prototype.getCharacterDataChanged = function () {
        if (!this.treeChanges.anyCharacterDataChanged)
            return [];

        var nodes = this.treeChanges.keys();
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            var target = nodes[i];
            if (2 /* STAYED_IN */ !== this.treeChanges.reachabilityChange(target))
                continue;

            var change = this.treeChanges.get(target);
            if (!change.characterData || target.textContent == change.characterDataOldValue)
                continue;

            result.push(target);
        }

        return result;
    };

    MutationProjection.prototype.computeMatchabilityChange = function (selector, el) {
        if (!this.matchCache)
            this.matchCache = [];
        if (!this.matchCache[selector.uid])
            this.matchCache[selector.uid] = new NodeMap();

        var cache = this.matchCache[selector.uid];
        var result = cache.get(el);
        if (result === undefined) {
            result = selector.matchabilityChange(el, this.treeChanges.get(el));
            cache.set(el, result);
        }
        return result;
    };

    MutationProjection.prototype.matchabilityChange = function (node) {
        var _this = this;
        // TODO(rafaelw): Include PI, CDATA?
        // Only include text nodes.
        if (this.characterDataOnly) {
            switch (node.nodeType) {
                case Node.COMMENT_NODE:
                case Node.TEXT_NODE:
                    return 2 /* STAYED_IN */;
                default:
                    return 0 /* STAYED_OUT */;
            }
        }

        // No element filter. Include all nodes.
        if (!this.selectors)
            return 2 /* STAYED_IN */;

        // Element filter. Exclude non-elements.
        if (node.nodeType !== Node.ELEMENT_NODE)
            return 0 /* STAYED_OUT */;

        var el = node;

        var matchChanges = this.selectors.map(function (selector) {
            return _this.computeMatchabilityChange(selector, el);
        });

        var accum = 0 /* STAYED_OUT */;
        var i = 0;

        while (accum !== 2 /* STAYED_IN */ && i < matchChanges.length) {
            switch (matchChanges[i]) {
                case 2 /* STAYED_IN */:
                    accum = 2 /* STAYED_IN */;
                    break;
                case 1 /* ENTERED */:
                    if (accum === 5 /* EXITED */)
                        accum = 2 /* STAYED_IN */;
                    else
                        accum = 1 /* ENTERED */;
                    break;
                case 5 /* EXITED */:
                    if (accum === 1 /* ENTERED */)
                        accum = 2 /* STAYED_IN */;
                    else
                        accum = 5 /* EXITED */;
                    break;
            }

            i++;
        }

        return accum;
    };

    MutationProjection.prototype.getChildlistChange = function (el) {
        var change = this.childListChangeMap.get(el);
        if (!change) {
            change = new ChildListChange();
            this.childListChangeMap.set(el, change);
        }

        return change;
    };

    MutationProjection.prototype.processChildlistChanges = function () {
        if (this.childListChangeMap)
            return;

        this.childListChangeMap = new NodeMap();

        for (var i = 0; i < this.mutations.length; i++) {
            var mutation = this.mutations[i];
            if (mutation.type != 'childList')
                continue;

            if (this.treeChanges.reachabilityChange(mutation.target) !== 2 /* STAYED_IN */ && !this.calcOldPreviousSibling)
                continue;

            var change = this.getChildlistChange(mutation.target);

            var oldPrevious = mutation.previousSibling;

            function recordOldPrevious(node, previous) {
                if (!node || change.oldPrevious.has(node) || change.added.has(node) || change.maybeMoved.has(node))
                    return;

                if (previous && (change.added.has(previous) || change.maybeMoved.has(previous)))
                    return;

                change.oldPrevious.set(node, previous);
            }

            for (var j = 0; j < mutation.removedNodes.length; j++) {
                var node = mutation.removedNodes[j];
                recordOldPrevious(node, oldPrevious);

                if (change.added.has(node)) {
                    change.added.delete(node);
                } else {
                    change.removed.set(node, true);
                    change.maybeMoved.delete(node);
                }

                oldPrevious = node;
            }

            recordOldPrevious(mutation.nextSibling, oldPrevious);

            for (var j = 0; j < mutation.addedNodes.length; j++) {
                var node = mutation.addedNodes[j];
                if (change.removed.has(node)) {
                    change.removed.delete(node);
                    change.maybeMoved.set(node, true);
                } else {
                    change.added.set(node, true);
                }
            }
        }
    };

    MutationProjection.prototype.wasReordered = function (node) {
        if (!this.treeChanges.anyParentsChanged)
            return false;

        this.processChildlistChanges();

        var parentNode = node.parentNode;
        var nodeChange = this.treeChanges.get(node);
        if (nodeChange && nodeChange.oldParentNode)
            parentNode = nodeChange.oldParentNode;

        var change = this.childListChangeMap.get(parentNode);
        if (!change)
            return false;

        if (change.moved)
            return change.moved.get(node);

        change.moved = new NodeMap();
        var pendingMoveDecision = new NodeMap();

        function isMoved(node) {
            if (!node)
                return false;
            if (!change.maybeMoved.has(node))
                return false;

            var didMove = change.moved.get(node);
            if (didMove !== undefined)
                return didMove;

            if (pendingMoveDecision.has(node)) {
                didMove = true;
            } else {
                pendingMoveDecision.set(node, true);
                didMove = getPrevious(node) !== getOldPrevious(node);
            }

            if (pendingMoveDecision.has(node)) {
                pendingMoveDecision.delete(node);
                change.moved.set(node, didMove);
            } else {
                didMove = change.moved.get(node);
            }

            return didMove;
        }

        var oldPreviousCache = new NodeMap();
        function getOldPrevious(node) {
            var oldPrevious = oldPreviousCache.get(node);
            if (oldPrevious !== undefined)
                return oldPrevious;

            oldPrevious = change.oldPrevious.get(node);
            while (oldPrevious && (change.removed.has(oldPrevious) || isMoved(oldPrevious))) {
                oldPrevious = getOldPrevious(oldPrevious);
            }

            if (oldPrevious === undefined)
                oldPrevious = node.previousSibling;
            oldPreviousCache.set(node, oldPrevious);

            return oldPrevious;
        }

        var previousCache = new NodeMap();
        function getPrevious(node) {
            if (previousCache.has(node))
                return previousCache.get(node);

            var previous = node.previousSibling;
            while (previous && (change.added.has(previous) || isMoved(previous)))
                previous = previous.previousSibling;

            previousCache.set(node, previous);
            return previous;
        }

        change.maybeMoved.keys().forEach(isMoved);
        return change.moved.get(node);
    };
    return MutationProjection;
})();

var Summary = (function () {
    function Summary(projection, query) {
        var _this = this;
        this.projection = projection;
        this.added = [];
        this.removed = [];
        this.reparented = query.all || query.element ? [] : undefined;
        this.reordered = query.all ? [] : undefined;

        projection.getChanged(this, query.elementFilter, query.characterData);

        if (query.all || query.attribute || query.attributeList) {
            var filter = query.attribute ? [query.attribute] : query.attributeList;
            var attributeChanged = projection.attributeChangedNodes(filter);

            if (query.attribute) {
                this.valueChanged = attributeChanged[query.attribute] || [];
            } else {
                this.attributeChanged = attributeChanged;
                if (query.attributeList) {
                    query.attributeList.forEach(function (attrName) {
                        if (!_this.attributeChanged.hasOwnProperty(attrName))
                            _this.attributeChanged[attrName] = [];
                    });
                }
            }
        }

        if (query.all || query.characterData) {
            var characterDataChanged = projection.getCharacterDataChanged();

            if (query.characterData)
                this.valueChanged = characterDataChanged;
            else
                this.characterDataChanged = characterDataChanged;
        }

        if (this.reordered)
            this.getOldPreviousSibling = projection.getOldPreviousSibling.bind(projection);
    }
    Summary.prototype.getOldParentNode = function (node) {
        return this.projection.getOldParentNode(node);
    };

    Summary.prototype.getOldAttribute = function (node, name) {
        return this.projection.getOldAttribute(node, name);
    };

    Summary.prototype.getOldCharacterData = function (node) {
        return this.projection.getOldCharacterData(node);
    };

    Summary.prototype.getOldPreviousSibling = function (node) {
        return this.projection.getOldPreviousSibling(node);
    };
    return Summary;
})();

// TODO(rafaelw): Allow ':' and '.' as valid name characters.
var validNameInitialChar = /[a-zA-Z_]+/;
var validNameNonInitialChar = /[a-zA-Z0-9_\-]+/;

// TODO(rafaelw): Consider allowing backslash in the attrValue.
// TODO(rafaelw): There's got a to be way to represent this state machine
// more compactly???
function escapeQuotes(value) {
    return '"' + value.replace(/"/, '\\\"') + '"';
}

var Qualifier = (function () {
    function Qualifier() {
    }
    Qualifier.prototype.matches = function (oldValue) {
        if (oldValue === null)
            return false;

        if (this.attrValue === undefined)
            return true;

        if (!this.contains)
            return this.attrValue == oldValue;

        var tokens = oldValue.split(' ');
        for (var i = 0; i < tokens.length; i++) {
            if (this.attrValue === tokens[i])
                return true;
        }

        return false;
    };

    Qualifier.prototype.toString = function () {
        if (this.attrName === 'class' && this.contains)
            return '.' + this.attrValue;

        if (this.attrName === 'id' && !this.contains)
            return '#' + this.attrValue;

        if (this.contains)
            return '[' + this.attrName + '~=' + escapeQuotes(this.attrValue) + ']';

        if ('attrValue' in this)
            return '[' + this.attrName + '=' + escapeQuotes(this.attrValue) + ']';

        return '[' + this.attrName + ']';
    };
    return Qualifier;
})();

var Selector = (function () {
    function Selector() {
        this.uid = Selector.nextUid++;
        this.qualifiers = [];
    }
    Object.defineProperty(Selector.prototype, "caseInsensitiveTagName", {
        get: function () {
            return this.tagName.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Selector.prototype, "selectorString", {
        get: function () {
            return this.tagName + this.qualifiers.join('');
        },
        enumerable: true,
        configurable: true
    });

    Selector.prototype.isMatching = function (el) {
        return el[Selector.matchesSelector](this.selectorString);
    };

    Selector.prototype.wasMatching = function (el, change, isMatching) {
        if (!change || !change.attributes)
            return isMatching;

        var tagName = change.isCaseInsensitive ? this.caseInsensitiveTagName : this.tagName;
        if (tagName !== '*' && tagName !== el.tagName)
            return false;

        var attributeOldValues = [];
        var anyChanged = false;
        for (var i = 0; i < this.qualifiers.length; i++) {
            var qualifier = this.qualifiers[i];
            var oldValue = change.getAttributeOldValue(qualifier.attrName);
            attributeOldValues.push(oldValue);
            anyChanged = anyChanged || (oldValue !== undefined);
        }

        if (!anyChanged)
            return isMatching;

        for (var i = 0; i < this.qualifiers.length; i++) {
            var qualifier = this.qualifiers[i];
            var oldValue = attributeOldValues[i];
            if (oldValue === undefined)
                oldValue = el.getAttribute(qualifier.attrName);
            if (!qualifier.matches(oldValue))
                return false;
        }

        return true;
    };

    Selector.prototype.matchabilityChange = function (el, change) {
        var isMatching = this.isMatching(el);
        if (isMatching)
            return this.wasMatching(el, change, isMatching) ? 2 /* STAYED_IN */ : 1 /* ENTERED */;
        else
            return this.wasMatching(el, change, isMatching) ? 5 /* EXITED */ : 0 /* STAYED_OUT */;
    };

    Selector.parseSelectors = function (input) {
        var selectors = [];
        var currentSelector;
        var currentQualifier;

        function newSelector() {
            if (currentSelector) {
                if (currentQualifier) {
                    currentSelector.qualifiers.push(currentQualifier);
                    currentQualifier = undefined;
                }

                selectors.push(currentSelector);
            }
            currentSelector = new Selector();
        }

        function newQualifier() {
            if (currentQualifier)
                currentSelector.qualifiers.push(currentQualifier);

            currentQualifier = new Qualifier();
        }

        var WHITESPACE = /\s/;
        var valueQuoteChar;
        var SYNTAX_ERROR = 'Invalid or unsupported selector syntax.';

        var SELECTOR = 1;
        var TAG_NAME = 2;
        var QUALIFIER = 3;
        var QUALIFIER_NAME_FIRST_CHAR = 4;
        var QUALIFIER_NAME = 5;
        var ATTR_NAME_FIRST_CHAR = 6;
        var ATTR_NAME = 7;
        var EQUIV_OR_ATTR_QUAL_END = 8;
        var EQUAL = 9;
        var ATTR_QUAL_END = 10;
        var VALUE_FIRST_CHAR = 11;
        var VALUE = 12;
        var QUOTED_VALUE = 13;
        var SELECTOR_SEPARATOR = 14;

        var state = SELECTOR;
        var i = 0;
        while (i < input.length) {
            var c = input[i++];

            switch (state) {
                case SELECTOR:
                    if (c.match(validNameInitialChar)) {
                        newSelector();
                        currentSelector.tagName = c;
                        state = TAG_NAME;
                        break;
                    }

                    if (c == '*') {
                        newSelector();
                        currentSelector.tagName = '*';
                        state = QUALIFIER;
                        break;
                    }

                    if (c == '.') {
                        newSelector();
                        newQualifier();
                        currentSelector.tagName = '*';
                        currentQualifier.attrName = 'class';
                        currentQualifier.contains = true;
                        state = QUALIFIER_NAME_FIRST_CHAR;
                        break;
                    }
                    if (c == '#') {
                        newSelector();
                        newQualifier();
                        currentSelector.tagName = '*';
                        currentQualifier.attrName = 'id';
                        state = QUALIFIER_NAME_FIRST_CHAR;
                        break;
                    }
                    if (c == '[') {
                        newSelector();
                        newQualifier();
                        currentSelector.tagName = '*';
                        currentQualifier.attrName = '';
                        state = ATTR_NAME_FIRST_CHAR;
                        break;
                    }

                    if (c.match(WHITESPACE))
                        break;

                    throw Error(SYNTAX_ERROR);

                case TAG_NAME:
                    if (c.match(validNameNonInitialChar)) {
                        currentSelector.tagName += c;
                        break;
                    }

                    if (c == '.') {
                        newQualifier();
                        currentQualifier.attrName = 'class';
                        currentQualifier.contains = true;
                        state = QUALIFIER_NAME_FIRST_CHAR;
                        break;
                    }
                    if (c == '#') {
                        newQualifier();
                        currentQualifier.attrName = 'id';
                        state = QUALIFIER_NAME_FIRST_CHAR;
                        break;
                    }
                    if (c == '[') {
                        newQualifier();
                        currentQualifier.attrName = '';
                        state = ATTR_NAME_FIRST_CHAR;
                        break;
                    }

                    if (c.match(WHITESPACE)) {
                        state = SELECTOR_SEPARATOR;
                        break;
                    }

                    if (c == ',') {
                        state = SELECTOR;
                        break;
                    }

                    throw Error(SYNTAX_ERROR);

                case QUALIFIER:
                    if (c == '.') {
                        newQualifier();
                        currentQualifier.attrName = 'class';
                        currentQualifier.contains = true;
                        state = QUALIFIER_NAME_FIRST_CHAR;
                        break;
                    }
                    if (c == '#') {
                        newQualifier();
                        currentQualifier.attrName = 'id';
                        state = QUALIFIER_NAME_FIRST_CHAR;
                        break;
                    }
                    if (c == '[') {
                        newQualifier();
                        currentQualifier.attrName = '';
                        state = ATTR_NAME_FIRST_CHAR;
                        break;
                    }

                    if (c.match(WHITESPACE)) {
                        state = SELECTOR_SEPARATOR;
                        break;
                    }

                    if (c == ',') {
                        state = SELECTOR;
                        break;
                    }

                    throw Error(SYNTAX_ERROR);

                case QUALIFIER_NAME_FIRST_CHAR:
                    if (c.match(validNameInitialChar)) {
                        currentQualifier.attrValue = c;
                        state = QUALIFIER_NAME;
                        break;
                    }

                    throw Error(SYNTAX_ERROR);

                case QUALIFIER_NAME:
                    if (c.match(validNameNonInitialChar)) {
                        currentQualifier.attrValue += c;
                        break;
                    }

                    if (c == '.') {
                        newQualifier();
                        currentQualifier.attrName = 'class';
                        currentQualifier.contains = true;
                        state = QUALIFIER_NAME_FIRST_CHAR;
                        break;
                    }
                    if (c == '#') {
                        newQualifier();
                        currentQualifier.attrName = 'id';
                        state = QUALIFIER_NAME_FIRST_CHAR;
                        break;
                    }
                    if (c == '[') {
                        newQualifier();
                        state = ATTR_NAME_FIRST_CHAR;
                        break;
                    }

                    if (c.match(WHITESPACE)) {
                        state = SELECTOR_SEPARATOR;
                        break;
                    }
                    if (c == ',') {
                        state = SELECTOR;
                        break;
                    }

                    throw Error(SYNTAX_ERROR);

                case ATTR_NAME_FIRST_CHAR:
                    if (c.match(validNameInitialChar)) {
                        currentQualifier.attrName = c;
                        state = ATTR_NAME;
                        break;
                    }

                    if (c.match(WHITESPACE))
                        break;

                    throw Error(SYNTAX_ERROR);

                case ATTR_NAME:
                    if (c.match(validNameNonInitialChar)) {
                        currentQualifier.attrName += c;
                        break;
                    }

                    if (c.match(WHITESPACE)) {
                        state = EQUIV_OR_ATTR_QUAL_END;
                        break;
                    }

                    if (c == '~') {
                        currentQualifier.contains = true;
                        state = EQUAL;
                        break;
                    }

                    if (c == '=') {
                        currentQualifier.attrValue = '';
                        state = VALUE_FIRST_CHAR;
                        break;
                    }

                    if (c == ']') {
                        state = QUALIFIER;
                        break;
                    }

                    throw Error(SYNTAX_ERROR);

                case EQUIV_OR_ATTR_QUAL_END:
                    if (c == '~') {
                        currentQualifier.contains = true;
                        state = EQUAL;
                        break;
                    }

                    if (c == '=') {
                        currentQualifier.attrValue = '';
                        state = VALUE_FIRST_CHAR;
                        break;
                    }

                    if (c == ']') {
                        state = QUALIFIER;
                        break;
                    }

                    if (c.match(WHITESPACE))
                        break;

                    throw Error(SYNTAX_ERROR);

                case EQUAL:
                    if (c == '=') {
                        currentQualifier.attrValue = '';
                        state = VALUE_FIRST_CHAR;
                        break;
                    }

                    throw Error(SYNTAX_ERROR);

                case ATTR_QUAL_END:
                    if (c == ']') {
                        state = QUALIFIER;
                        break;
                    }

                    if (c.match(WHITESPACE))
                        break;

                    throw Error(SYNTAX_ERROR);

                case VALUE_FIRST_CHAR:
                    if (c.match(WHITESPACE))
                        break;

                    if (c == '"' || c == "'") {
                        valueQuoteChar = c;
                        state = QUOTED_VALUE;
                        break;
                    }

                    currentQualifier.attrValue += c;
                    state = VALUE;
                    break;

                case VALUE:
                    if (c.match(WHITESPACE)) {
                        state = ATTR_QUAL_END;
                        break;
                    }
                    if (c == ']') {
                        state = QUALIFIER;
                        break;
                    }
                    if (c == "'" || c == '"')
                        throw Error(SYNTAX_ERROR);

                    currentQualifier.attrValue += c;
                    break;

                case QUOTED_VALUE:
                    if (c == valueQuoteChar) {
                        state = ATTR_QUAL_END;
                        break;
                    }

                    currentQualifier.attrValue += c;
                    break;

                case SELECTOR_SEPARATOR:
                    if (c.match(WHITESPACE))
                        break;

                    if (c == ',') {
                        state = SELECTOR;
                        break;
                    }

                    throw Error(SYNTAX_ERROR);
            }
        }

        switch (state) {
            case SELECTOR:
            case TAG_NAME:
            case QUALIFIER:
            case QUALIFIER_NAME:
            case SELECTOR_SEPARATOR:
                // Valid end states.
                newSelector();
                break;
            default:
                throw Error(SYNTAX_ERROR);
        }

        if (!selectors.length)
            throw Error(SYNTAX_ERROR);

        return selectors;
    };
    Selector.nextUid = 1;
    Selector.matchesSelector = (function () {
        var element = document.createElement('div');
        if (typeof element['webkitMatchesSelector'] === 'function')
            return 'webkitMatchesSelector';
        if (typeof element['mozMatchesSelector'] === 'function')
            return 'mozMatchesSelector';
        if (typeof element['msMatchesSelector'] === 'function')
            return 'msMatchesSelector';

        return 'matchesSelector';
    })();
    return Selector;
})();

var attributeFilterPattern = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/;

function validateAttribute(attribute) {
    if (typeof attribute != 'string')
        throw Error('Invalid request opion. attribute must be a non-zero length string.');

    attribute = attribute.trim();

    if (!attribute)
        throw Error('Invalid request opion. attribute must be a non-zero length string.');

    if (!attribute.match(attributeFilterPattern))
        throw Error('Invalid request option. invalid attribute name: ' + attribute);

    return attribute;
}

function validateElementAttributes(attribs) {
    if (!attribs.trim().length)
        throw Error('Invalid request option: elementAttributes must contain at least one attribute.');

    var lowerAttributes = {};
    var attributes = {};

    var tokens = attribs.split(/\s+/);
    for (var i = 0; i < tokens.length; i++) {
        var name = tokens[i];
        if (!name)
            continue;

        var name = validateAttribute(name);
        var nameLower = name.toLowerCase();
        if (lowerAttributes[nameLower])
            throw Error('Invalid request option: observing multiple case variations of the same attribute is not supported.');

        attributes[name] = true;
        lowerAttributes[nameLower] = true;
    }

    return Object.keys(attributes);
}

function elementFilterAttributes(selectors) {
    var attributes = {};

    selectors.forEach(function (selector) {
        selector.qualifiers.forEach(function (qualifier) {
            attributes[qualifier.attrName] = true;
        });
    });

    return Object.keys(attributes);
}

var MutationSummary = (function () {
    function MutationSummary(opts) {
        var _this = this;
        this.connected = false;
        this.options = MutationSummary.validateOptions(opts);
        this.observerOptions = MutationSummary.createObserverOptions(this.options.queries);
        this.root = this.options.rootNode;
        this.callback = this.options.callback;

        this.elementFilter = Array.prototype.concat.apply([], this.options.queries.map(function (query) {
            return query.elementFilter ? query.elementFilter : [];
        }));
        if (!this.elementFilter.length)
            this.elementFilter = undefined;

        this.calcReordered = this.options.queries.some(function (query) {
            return query.all;
        });

        this.queryValidators = []; // TODO(rafaelw): Shouldn't always define this.
        if (MutationSummary.createQueryValidator) {
            this.queryValidators = this.options.queries.map(function (query) {
                return MutationSummary.createQueryValidator(_this.root, query);
            });
        }

        this.observer = new MutationObserverCtor(function (mutations) {
            _this.observerCallback(mutations);
        });

        this.reconnect();
    }
    MutationSummary.createObserverOptions = function (queries) {
        var observerOptions = {
            childList: true,
            subtree: true
        };

        var attributeFilter;
        function observeAttributes(attributes) {
            if (observerOptions.attributes && !attributeFilter)
                return;

            observerOptions.attributes = true;
            observerOptions.attributeOldValue = true;

            if (!attributes) {
                // observe all.
                attributeFilter = undefined;
                return;
            }

            // add to observed.
            attributeFilter = attributeFilter || {};
            attributes.forEach(function (attribute) {
                attributeFilter[attribute] = true;
                attributeFilter[attribute.toLowerCase()] = true;
            });
        }

        queries.forEach(function (query) {
            if (query.characterData) {
                observerOptions.characterData = true;
                observerOptions.characterDataOldValue = true;
                return;
            }

            if (query.all) {
                observeAttributes();
                observerOptions.characterData = true;
                observerOptions.characterDataOldValue = true;
                return;
            }

            if (query.attribute) {
                observeAttributes([query.attribute.trim()]);
                return;
            }

            var attributes = elementFilterAttributes(query.elementFilter).concat(query.attributeList || []);
            if (attributes.length)
                observeAttributes(attributes);
        });

        if (attributeFilter)
            observerOptions.attributeFilter = Object.keys(attributeFilter);

        return observerOptions;
    };

    MutationSummary.validateOptions = function (options) {
        for (var prop in options) {
            if (!(prop in MutationSummary.optionKeys))
                throw Error('Invalid option: ' + prop);
        }

        if (typeof options.callback !== 'function')
            throw Error('Invalid options: callback is required and must be a function');

        if (!options.queries || !options.queries.length)
            throw Error('Invalid options: queries must contain at least one query request object.');

        var opts = {
            callback: options.callback,
            rootNode: options.rootNode || document,
            observeOwnChanges: !!options.observeOwnChanges,
            oldPreviousSibling: !!options.oldPreviousSibling,
            queries: []
        };

        for (var i = 0; i < options.queries.length; i++) {
            var request = options.queries[i];

            // all
            if (request.all) {
                if (Object.keys(request).length > 1)
                    throw Error('Invalid request option. all has no options.');

                opts.queries.push({ all: true });
                continue;
            }

            // attribute
            if ('attribute' in request) {
                var query = {
                    attribute: validateAttribute(request.attribute)
                };

                query.elementFilter = Selector.parseSelectors('*[' + query.attribute + ']');

                if (Object.keys(request).length > 1)
                    throw Error('Invalid request option. attribute has no options.');

                opts.queries.push(query);
                continue;
            }

            // element
            if ('element' in request) {
                var requestOptionCount = Object.keys(request).length;
                var query = {
                    element: request.element,
                    elementFilter: Selector.parseSelectors(request.element)
                };

                if (request.hasOwnProperty('elementAttributes')) {
                    query.attributeList = validateElementAttributes(request.elementAttributes);
                    requestOptionCount--;
                }

                if (requestOptionCount > 1)
                    throw Error('Invalid request option. element only allows elementAttributes option.');

                opts.queries.push(query);
                continue;
            }

            // characterData
            if (request.characterData) {
                if (Object.keys(request).length > 1)
                    throw Error('Invalid request option. characterData has no options.');

                opts.queries.push({ characterData: true });
                continue;
            }

            throw Error('Invalid request option. Unknown query request.');
        }

        return opts;
    };

    MutationSummary.prototype.createSummaries = function (mutations) {
        if (!mutations || !mutations.length)
            return [];

        var projection = new MutationProjection(this.root, mutations, this.elementFilter, this.calcReordered, this.options.oldPreviousSibling);

        var summaries = [];
        for (var i = 0; i < this.options.queries.length; i++) {
            summaries.push(new Summary(projection, this.options.queries[i]));
        }

        return summaries;
    };

    MutationSummary.prototype.checkpointQueryValidators = function () {
        this.queryValidators.forEach(function (validator) {
            if (validator)
                validator.recordPreviousState();
        });
    };

    MutationSummary.prototype.runQueryValidators = function (summaries) {
        this.queryValidators.forEach(function (validator, index) {
            if (validator)
                validator.validate(summaries[index]);
        });
    };

    MutationSummary.prototype.changesToReport = function (summaries) {
        return summaries.some(function (summary) {
            var summaryProps = [
                'added', 'removed', 'reordered', 'reparented',
                'valueChanged', 'characterDataChanged'];
            if (summaryProps.some(function (prop) {
                return summary[prop] && summary[prop].length;
            }))
                return true;

            if (summary.attributeChanged) {
                var attrNames = Object.keys(summary.attributeChanged);
                var attrsChanged = attrNames.some(function (attrName) {
                    return !!summary.attributeChanged[attrName].length;
                });
                if (attrsChanged)
                    return true;
            }
            return false;
        });
    };

    MutationSummary.prototype.observerCallback = function (mutations) {
        if (!this.options.observeOwnChanges)
            this.observer.disconnect();

        var summaries = this.createSummaries(mutations);
        this.runQueryValidators(summaries);

        if (this.options.observeOwnChanges)
            this.checkpointQueryValidators();

        if (this.changesToReport(summaries))
            this.callback(summaries);

        // disconnect() may have been called during the callback.
        if (!this.options.observeOwnChanges && this.connected) {
            this.checkpointQueryValidators();
            this.observer.observe(this.root, this.observerOptions);
        }
    };

    MutationSummary.prototype.reconnect = function () {
        if (this.connected)
            throw Error('Already connected');

        this.observer.observe(this.root, this.observerOptions);
        this.connected = true;
        this.checkpointQueryValidators();
    };

    MutationSummary.prototype.takeSummaries = function () {
        if (!this.connected)
            throw Error('Not connected');

        var summaries = this.createSummaries(this.observer.takeRecords());
        return this.changesToReport(summaries) ? summaries : undefined;
    };

    MutationSummary.prototype.disconnect = function () {
        var summaries = this.takeSummaries();
        this.observer.disconnect();
        this.connected = false;
        return summaries;
    };
    MutationSummary.NodeMap = NodeMap;
    MutationSummary.parseElementFilter = Selector.parseSelectors;

    MutationSummary.optionKeys = {
        'callback': true,
        'queries': true,
        'rootNode': true,
        'oldPreviousSibling': true,
        'observeOwnChanges': true
    };
    return MutationSummary;
})();

module.exports = MutationSummary
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvd2Jpbm5zc21pdGgvc3JjL3VuZ2l0L2NvbnRlbnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvb3MtYnJvd3NlcmlmeS9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2NhdC1uYW1lcy9jYXQtbmFtZXMuanNvbiIsIm5vZGVfbW9kdWxlcy9jYXQtbmFtZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2F0LW5hbWVzL25vZGVfbW9kdWxlcy91bmlxdWUtcmFuZG9tLWFycmF5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhdC1uYW1lcy9ub2RlX21vZHVsZXMvdW5pcXVlLXJhbmRvbS1hcnJheS9ub2RlX21vZHVsZXMvdW5pcXVlLXJhbmRvbS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9saWIvZGljdGlvbmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9saWIvZ2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL211dGF0aW9uLXN1bW1hcnkvc3JjL211dGF0aW9uLXN1bW1hcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3dCQ0FxQixXQUFXOzs7OzBCQUNkLGFBQWE7Ozs7K0JBQ0gsa0JBQWtCOzs7O0FBRTlDLElBQU0sUUFBUSxHQUFHLENBQ2YsUUFBUSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQ2xELE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUN4QixDQUFDOztBQUVGLElBQUksaUJBQWlCLEdBQUcsQ0FDdEIsdUJBQXVCLEVBQ3ZCLGFBQWEsRUFDYixpQkFBaUIsQ0FDbEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWIsSUFBSSxjQUFjLEdBQUcsQ0FDbkIsU0FBUyxFQUNULGtCQUFrQixFQUNsQixnQkFBZ0IsQ0FDakIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxTQUFTLEVBQUUsMEJBQTBCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEUsSUFBSSxlQUFlLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFdEYsU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDekIsc0NBQWtDLENBQUMsU0FBSSxDQUFDLGVBQVUsQ0FBQyxDQUFHO0NBQ3ZEOztBQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxLQUFLLEVBQUU7QUFDOUMsTUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztBQUM5QixNQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7Ozs7Ozs7QUFFakIseUJBQWMsS0FBSyxDQUFDLEtBQUssOEhBQUU7VUFBbEIsQ0FBQzs7QUFDUixVQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0MsVUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBRXBDLGFBQU8sQ0FBQyxDQUFDLENBQUMsR0FBRztBQUNYLFlBQUksRUFBRSxzQkFBUyxNQUFNLEVBQUU7QUFDdkIsY0FBTSxFQUFOLE1BQU07T0FDUCxDQUFDO0tBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxjQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFdkMsTUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQzNELE1BQUksSUFBSSxFQUFFO0FBQ1IscUNBQW9CLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxrQkFBVSxTQUFTLEVBQUU7QUFDMUYsWUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLGVBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFO0FBQ2xDLGNBQUksRUFBRSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFO0FBQ2pELHdCQUFZLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztXQUNsQztTQUNGLENBQUMsQ0FBQTtPQUNILEVBQUMsQ0FBQyxDQUFDO0dBQ0w7Q0FDRixDQUFDLENBQUM7O0FBRUgsU0FBUyxZQUFZLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDeEMsTUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDeEQsSUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUyxFQUFFO0FBQ25ELFFBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRCxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0QsUUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDOztBQUUzRCxRQUFJLENBQUUsTUFBTSxBQUFDLEVBQUUsT0FBTzs7QUFFdEIsUUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZFLFFBQUksUUFBUSxJQUFJLE9BQU8sRUFBRTtBQUN2QixVQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsWUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUVoQyxVQUFJLE1BQU0sRUFBRTtBQUNWLGNBQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUN4RDs7QUFFRCxVQUFJLFFBQVEsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO0FBQ2pDLFVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLE9BQU8sRUFBRTtBQUMzQyxpQkFBTyxDQUFDLFdBQVcsR0FBRyw2QkFBTSxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7U0FDckUsQ0FBQyxDQUFBO09BQ0g7S0FDRjtHQUNGLENBQUMsQ0FBQTtDQUNMLENBQUM7OztBQ25GRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgY2F0TmFtZXMgZnJvbSAnY2F0LW5hbWVzJztcbmltcG9ydCBsb3JlbSBmcm9tICdsb3JlbS1pcHN1bSc7XG5pbXBvcnQgTXV0YXRpb25TdW1tYXJ5IGZyb20gJ211dGF0aW9uLXN1bW1hcnknO1xuXG5jb25zdCBjYXRXb3JkcyA9IFtcbiAgJ21lb29vdycsICdtZW93JywgJ3NjcmF0Y2hpbmcgcG9zdCcsICduYXd3JyxcbiAgJ3B1cnJyJywgJ21lZWVlb3cnLCAna2liYmxlcycsICdjdWRkbGUnLCAnc251Z2dsZScsXG4gICdwdXJyJywgJ255YWFhJywgJ255YW4nXG5dO1xuXG5sZXQgY29udGFpbmVyU2VsZWN0b3IgPSBbXG4gICcuanMtY29tbWVudC1jb250YWluZXInLFxuICAnLmlzc3VlLW1ldGEnLFxuICAnLmdoLWhlYWRlci1tZXRhJyxcbl0uam9pbignLCAnKTtcblxubGV0IGF1dGhvclNlbGVjdG9yID0gW1xuICAnLmF1dGhvcicsXG4gICcuYXV0aG9yLW5hbWUgPiBhJyxcbiAgJy5vcGVuZWQtYnkgPiBhJyxcbl0uam9pbignLCAnKTtcblxubGV0IGF2YXRhclNlbGVjdG9yID0gWycuYXZhdGFyJywgJy50aW1lbGluZS1jb21tZW50LWF2YXRhciddLmpvaW4oJywgJyk7XG5sZXQgY29tbWVudFNlbGVjdG9yID0gWycuY29tbWVudC1ib2R5ID4gcCwgLmNvbW1lbnQtYm9keSAuZW1haWwtZnJhZ21lbnQnXS5qb2luKCcsICcpO1xuXG5mdW5jdGlvbiBjYXRQaG90byhuLCB3LCBoKSB7XG4gIHJldHVybiBgaHR0cHM6Ly9wbGFjZWtpdHRlbi5jb20vJHt3fS8ke2h9P2ltYWdlPSR7bn1gO1xufVxuXG5jaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQobnVsbCwgZnVuY3Rpb24gKHN0b3JlKSB7XG4gIGxldCBzZXR0aW5ncyA9IHN0b3JlLnNldHRpbmdzO1xuICBsZXQgdXNlck1hcCA9IHt9O1xuXG4gIGZvciAobGV0IHUgb2Ygc3RvcmUudXNlcnMpIHtcbiAgICBsZXQgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1KSArIDE7XG4gICAgbGV0IGF2YXRhciA9IGNhdFBob3RvLmJpbmQobnVsbCwgbik7XG5cbiAgICB1c2VyTWFwW3VdID0ge1xuICAgICAgbmFtZTogY2F0TmFtZXMucmFuZG9tKCksXG4gICAgICBhdmF0YXJcbiAgICB9O1xuICB9XG5cbiAgcmVwbGFjZVVzZXJzKGRvY3VtZW50LCBzdG9yZSwgdXNlck1hcCk7XG5cbiAgbGV0IHBqYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wamF4LWNvbnRhaW5lcl0nKTtcbiAgaWYgKHBqYXgpIHtcbiAgICBuZXcgTXV0YXRpb25TdW1tYXJ5KHtyb290Tm9kZTogcGpheCwgcXVlcmllczogW3thbGw6IHRydWV9XSwgY2FsbGJhY2s6IGZ1bmN0aW9uIChzdW1tYXJpZXMpIHtcbiAgICAgIGxldCBzdW1tYXJ5ID0gc3VtbWFyaWVzWzBdO1xuICAgICAgc3VtbWFyeS5hZGRlZC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAoZWwucGFyZW50Tm9kZSA9PT0gcGpheCAmJiBlbC5xdWVyeVNlbGVjdG9yQWxsKSB7XG4gICAgICAgICAgcmVwbGFjZVVzZXJzKGVsLCBzdG9yZSwgdXNlck1hcCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfX0pO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVwbGFjZVVzZXJzKGVsLCBzdG9yZSwgdXNlck1hcCkge1xuICBsZXQgY29udGFpbmVycyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY29udGFpbmVyU2VsZWN0b3IpO1xuICBbXS5zbGljZS5jYWxsKGNvbnRhaW5lcnMpLmZvckVhY2goZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgICAgbGV0IGF1dGhvciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGF1dGhvclNlbGVjdG9yKVswXTtcbiAgICAgIGxldCBhdmF0YXIgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChhdmF0YXJTZWxlY3RvcilbMF07XG4gICAgICBsZXQgY29tbWVudHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChjb21tZW50U2VsZWN0b3IpO1xuXG4gICAgICBpZiAoIShhdXRob3IpKSByZXR1cm47XG5cbiAgICAgIGxldCB1c2VybmFtZSA9IGF1dGhvci50ZXh0Q29udGVudCB8fCBhdXRob3IuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gICAgICBpZiAodXNlcm5hbWUgaW4gdXNlck1hcCkge1xuICAgICAgICBsZXQgdURhdGEgPSB1c2VyTWFwW3VzZXJuYW1lXTtcbiAgICAgICAgYXV0aG9yLnRleHRDb250ZW50ID0gdURhdGEubmFtZTtcblxuICAgICAgICBpZiAoYXZhdGFyKSB7XG4gICAgICAgICAgYXZhdGFyLnNyYyA9IHVEYXRhLmF2YXRhcihhdmF0YXIud2lkdGgsIGF2YXRhci5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbW1lbnRzICYmIHN0b3JlLnJlcGxhY2VUZXh0KSB7XG4gICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGNvbW1lbnRzLCBmdW5jdGlvbiAoY29tbWVudCkge1xuICAgICAgICAgICAgY29tbWVudC50ZXh0Q29udGVudCA9IGxvcmVtKHt1bml0czogJ3BhcmFncmFwaHMnLCB3b3JkczogY2F0V29yZHN9KTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbn07XG4iLCJleHBvcnRzLmVuZGlhbm5lc3MgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnTEUnIH07XG5cbmV4cG9ydHMuaG9zdG5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lXG4gICAgfVxuICAgIGVsc2UgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0cy5sb2FkYXZnID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfTtcblxuZXhwb3J0cy51cHRpbWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAwIH07XG5cbmV4cG9ydHMuZnJlZW1lbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcbn07XG5cbmV4cG9ydHMudG90YWxtZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG59O1xuXG5leHBvcnRzLmNwdXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXSB9O1xuXG5leHBvcnRzLnR5cGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnQnJvd3NlcicgfTtcblxuZXhwb3J0cy5yZWxlYXNlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmFwcFZlcnNpb247XG4gICAgfVxuICAgIHJldHVybiAnJztcbn07XG5cbmV4cG9ydHMubmV0d29ya0ludGVyZmFjZXNcbj0gZXhwb3J0cy5nZXROZXR3b3JrSW50ZXJmYWNlc1xuPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7fSB9O1xuXG5leHBvcnRzLmFyY2ggPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnamF2YXNjcmlwdCcgfTtcblxuZXhwb3J0cy5wbGF0Zm9ybSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdicm93c2VyJyB9O1xuXG5leHBvcnRzLnRtcGRpciA9IGV4cG9ydHMudG1wRGlyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnL3RtcCc7XG59O1xuXG5leHBvcnRzLkVPTCA9ICdcXG4nO1xuIiwibW9kdWxlLmV4cG9ydHM9W1xuXHRcIkFiYnlcIixcblx0XCJBbmdlbFwiLFxuXHRcIkFubmllXCIsXG5cdFwiQmFieVwiLFxuXHRcIkJhaWxleVwiLFxuXHRcIkJhbmRpdFwiLFxuXHRcIkJlYXJcIixcblx0XCJCZWxsYVwiLFxuXHRcIkJvYlwiLFxuXHRcIkJvb1wiLFxuXHRcIkJvb3RzXCIsXG5cdFwiQnViYmFcIixcblx0XCJCdWRkeVwiLFxuXHRcIkJ1c3RlclwiLFxuXHRcIkNhbGlcIixcblx0XCJDYWxsaWVcIixcblx0XCJDYXNwZXJcIixcblx0XCJDaGFybGllXCIsXG5cdFwiQ2hlc3RlclwiLFxuXHRcIkNobG9lXCIsXG5cdFwiQ2xlb1wiLFxuXHRcIkNvY29cIixcblx0XCJDb29raWVcIixcblx0XCJDdWRkbGVzXCIsXG5cdFwiRGFpc3lcIixcblx0XCJEdXN0eVwiLFxuXHRcIkZlbGl4XCIsXG5cdFwiRmx1ZmZ5XCIsXG5cdFwiR2FyZmllbGRcIixcblx0XCJHZW9yZ2VcIixcblx0XCJHaW5nZXJcIixcblx0XCJHaXptb1wiLFxuXHRcIkdyYWNpZVwiLFxuXHRcIkhhcmxleVwiLFxuXHRcIkphY2tcIixcblx0XCJKYXNtaW5lXCIsXG5cdFwiSmFzcGVyXCIsXG5cdFwiS2lraVwiLFxuXHRcIktpdHR5XCIsXG5cdFwiTGVvXCIsXG5cdFwiTGlsbHlcIixcblx0XCJMaWx5XCIsXG5cdFwiTG9raVwiLFxuXHRcIkxvbGFcIixcblx0XCJMdWNreVwiLFxuXHRcIkx1Y3lcIixcblx0XCJMdW5hXCIsXG5cdFwiTWFnZ2llXCIsXG5cdFwiTWF4XCIsXG5cdFwiTWlhXCIsXG5cdFwiTWlkbmlnaHRcIixcblx0XCJNaWxvXCIsXG5cdFwiTWltaVwiLFxuXHRcIk1pc3Mga2l0dHlcIixcblx0XCJNaXNzeVwiLFxuXHRcIk1pc3R5XCIsXG5cdFwiTWl0dGVuc1wiLFxuXHRcIk1vbGx5XCIsXG5cdFwiTXVmZmluXCIsXG5cdFwiTmFsYVwiLFxuXHRcIk9saXZlclwiLFxuXHRcIk9yZW9cIixcblx0XCJPc2NhclwiLFxuXHRcIlBhdGNoZXNcIixcblx0XCJQZWFudXRcIixcblx0XCJQZXBwZXJcIixcblx0XCJQcmVjaW91c1wiLFxuXHRcIlByaW5jZXNzXCIsXG5cdFwiUHVtcGtpblwiLFxuXHRcIlJhc2NhbFwiLFxuXHRcIlJvY2t5XCIsXG5cdFwiU2FkaWVcIixcblx0XCJTYWxlbVwiLFxuXHRcIlNhbVwiLFxuXHRcIlNhbWFudGhhXCIsXG5cdFwiU2FtbXlcIixcblx0XCJTYXNoYVwiLFxuXHRcIlNhc3N5XCIsXG5cdFwiU2Nvb3RlclwiLFxuXHRcIlNoYWRvd1wiLFxuXHRcIlNoZWJhXCIsXG5cdFwiU2ltYmFcIixcblx0XCJTaW1vblwiLFxuXHRcIlNtb2tleVwiLFxuXHRcIlNuaWNrZXJzXCIsXG5cdFwiU25vd2JhbGxcIixcblx0XCJTbnVnZ2xlc1wiLFxuXHRcIlNvY2tzXCIsXG5cdFwiU29waGllXCIsXG5cdFwiU3Bvb2t5XCIsXG5cdFwiU3VnYXJcIixcblx0XCJUaWdlclwiLFxuXHRcIlRpZ2dlclwiLFxuXHRcIlRpbmtlcmJlbGxcIixcblx0XCJUb2J5XCIsXG5cdFwiVHJvdWJsZVwiLFxuXHRcIldoaXNrZXJzXCIsXG5cdFwiV2lsbG93XCIsXG5cdFwiWm9lXCIsXG5cdFwiWm9leVwiXG5dXG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5pcXVlUmFuZG9tQXJyYXkgPSByZXF1aXJlKCd1bmlxdWUtcmFuZG9tLWFycmF5Jyk7XG52YXIgY2F0TmFtZXMgPSByZXF1aXJlKCcuL2NhdC1uYW1lcy5qc29uJyk7XG5cbmV4cG9ydHMuYWxsID0gY2F0TmFtZXM7XG5leHBvcnRzLnJhbmRvbSA9IHVuaXF1ZVJhbmRvbUFycmF5KGNhdE5hbWVzKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmlxdWVSYW5kb20gPSByZXF1aXJlKCd1bmlxdWUtcmFuZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFycikge1xuXHR2YXIgcmFuZCA9IHVuaXF1ZVJhbmRvbSgwLCBhcnIubGVuZ3RoIC0gMSk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gYXJyW3JhbmQoKV07XG5cdH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcblx0dmFyIHByZXY7XG5cdHJldHVybiBmdW5jdGlvbiByYW5kKCkge1xuXHRcdHZhciBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuXHRcdHJldHVybiBwcmV2ID0gbnVtID09PSBwcmV2ICYmIG1pbiAhPT0gbWF4ID8gcmFuZCgpIDogbnVtO1xuXHR9O1xufTtcbiIsInZhciBkaWN0aW9uYXJ5ID0ge1xuICB3b3JkczogW1xuICAgICdhZCcsXG4gICAgJ2FkaXBpc2ljaW5nJyxcbiAgICAnYWxpcXVhJyxcbiAgICAnYWxpcXVpcCcsXG4gICAgJ2FtZXQnLFxuICAgICdhbmltJyxcbiAgICAnYXV0ZScsXG4gICAgJ2NpbGx1bScsXG4gICAgJ2NvbW1vZG8nLFxuICAgICdjb25zZWN0ZXR1cicsXG4gICAgJ2NvbnNlcXVhdCcsXG4gICAgJ2N1bHBhJyxcbiAgICAnY3VwaWRhdGF0JyxcbiAgICAnZGVzZXJ1bnQnLFxuICAgICdkbycsXG4gICAgJ2RvbG9yJyxcbiAgICAnZG9sb3JlJyxcbiAgICAnZHVpcycsXG4gICAgJ2VhJyxcbiAgICAnZWl1c21vZCcsXG4gICAgJ2VsaXQnLFxuICAgICdlbmltJyxcbiAgICAnZXNzZScsXG4gICAgJ2VzdCcsXG4gICAgJ2V0JyxcbiAgICAnZXUnLFxuICAgICdleCcsXG4gICAgJ2V4Y2VwdGV1cicsXG4gICAgJ2V4ZXJjaXRhdGlvbicsXG4gICAgJ2Z1Z2lhdCcsXG4gICAgJ2lkJyxcbiAgICAnaW4nLFxuICAgICdpbmNpZGlkdW50JyxcbiAgICAnaXBzdW0nLFxuICAgICdpcnVyZScsXG4gICAgJ2xhYm9yZScsXG4gICAgJ2xhYm9yaXMnLFxuICAgICdsYWJvcnVtJyxcbiAgICAnTG9yZW0nLFxuICAgICdtYWduYScsXG4gICAgJ21pbmltJyxcbiAgICAnbW9sbGl0JyxcbiAgICAnbmlzaScsXG4gICAgJ25vbicsXG4gICAgJ25vc3RydWQnLFxuICAgICdudWxsYScsXG4gICAgJ29jY2FlY2F0JyxcbiAgICAnb2ZmaWNpYScsXG4gICAgJ3BhcmlhdHVyJyxcbiAgICAncHJvaWRlbnQnLFxuICAgICdxdWknLFxuICAgICdxdWlzJyxcbiAgICAncmVwcmVoZW5kZXJpdCcsXG4gICAgJ3NpbnQnLFxuICAgICdzaXQnLFxuICAgICdzdW50JyxcbiAgICAndGVtcG9yJyxcbiAgICAndWxsYW1jbycsXG4gICAgJ3V0JyxcbiAgICAndmVsaXQnLFxuICAgICd2ZW5pYW0nLFxuICAgICd2b2x1cHRhdGUnICBcbiAgXVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkaWN0aW9uYXJ5OyIsInZhciBnZW5lcmF0b3IgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG9wdGlvbnMgPSAoYXJndW1lbnRzLmxlbmd0aCkgPyBhcmd1bWVudHNbMF0gOiB7fVxuICAgICwgY291bnQgPSBvcHRpb25zLmNvdW50IHx8IDFcbiAgICAsIHVuaXRzID0gb3B0aW9ucy51bml0cyB8fCAnc2VudGVuY2VzJ1xuICAgICwgc2VudGVuY2VMb3dlckJvdW5kID0gb3B0aW9ucy5zZW50ZW5jZUxvd2VyQm91bmQgfHwgNVxuICAgICwgc2VudGVuY2VVcHBlckJvdW5kID0gb3B0aW9ucy5zZW50ZW5jZVVwcGVyQm91bmQgfHwgMTVcblx0ICAsIHBhcmFncmFwaExvd2VyQm91bmQgPSBvcHRpb25zLnBhcmFncmFwaExvd2VyQm91bmQgfHwgM1xuXHQgICwgcGFyYWdyYXBoVXBwZXJCb3VuZCA9IG9wdGlvbnMucGFyYWdyYXBoVXBwZXJCb3VuZCB8fCA3XG5cdCAgLCBmb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCAncGxhaW4nXG4gICAgLCB3b3JkcyA9IG9wdGlvbnMud29yZHMgfHwgcmVxdWlyZSgnLi9kaWN0aW9uYXJ5Jykud29yZHNcbiAgICAsIHJhbmRvbSA9IG9wdGlvbnMucmFuZG9tIHx8IE1hdGgucmFuZG9tXG4gICAgLCBzdWZmaXggPSBvcHRpb25zLnN1ZmZpeCB8fCByZXF1aXJlKCdvcycpLkVPTDtcblxuICB1bml0cyA9IHNpbXBsZVBsdXJhbGl6ZSh1bml0cy50b0xvd2VyQ2FzZSgpKTtcblxuICB2YXIgcmFuZG9tSW50ZWdlciA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICB9O1xuXG4gIHZhciByYW5kb21Xb3JkID0gZnVuY3Rpb24od29yZHMpIHtcbiAgICByZXR1cm4gd29yZHNbcmFuZG9tSW50ZWdlcigwLCB3b3Jkcy5sZW5ndGggLSAxKV07XG4gIH07XG5cbiAgdmFyIHJhbmRvbVNlbnRlbmNlID0gZnVuY3Rpb24od29yZHMsIGxvd2VyQm91bmQsIHVwcGVyQm91bmQpIHtcbiAgICB2YXIgc2VudGVuY2UgPSAnJ1xuICAgICAgLCBib3VuZHMgPSB7bWluOiAwLCBtYXg6IHJhbmRvbUludGVnZXIobG93ZXJCb3VuZCwgdXBwZXJCb3VuZCl9O1xuXG4gICAgd2hpbGUgKGJvdW5kcy5taW4gPCBib3VuZHMubWF4KSB7XG4gICAgICBzZW50ZW5jZSA9IHNlbnRlbmNlICsgJyAnICsgcmFuZG9tV29yZCh3b3Jkcyk7XG4gICAgICBib3VuZHMubWluID0gYm91bmRzLm1pbiArIDE7XG4gICAgfVxuXG4gICAgaWYgKHNlbnRlbmNlLmxlbmd0aCkge1xuICAgICAgc2VudGVuY2UgPSBzZW50ZW5jZS5zbGljZSgxKTtcbiAgICAgIHNlbnRlbmNlID0gc2VudGVuY2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzZW50ZW5jZS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VudGVuY2U7XG4gIH07XG5cbiAgdmFyIHJhbmRvbVBhcmFncmFwaCA9IGZ1bmN0aW9uKHdvcmRzLCBsb3dlckJvdW5kLCB1cHBlckJvdW5kLCBzZW50ZW5jZUxvd2VyQm91bmQsIHNlbnRlbmNlVXBwZXJCb3VuZCkge1xuICAgIHZhciBwYXJhZ3JhcGggPSAnJ1xuICAgICAgLCBib3VuZHMgPSB7bWluOiAwLCBtYXg6IHJhbmRvbUludGVnZXIobG93ZXJCb3VuZCwgdXBwZXJCb3VuZCl9O1xuXG4gICAgd2hpbGUgKGJvdW5kcy5taW4gPCBib3VuZHMubWF4KSB7XG4gICAgICBwYXJhZ3JhcGggPSBwYXJhZ3JhcGggKyAnLiAnICsgcmFuZG9tU2VudGVuY2Uod29yZHMsIHNlbnRlbmNlTG93ZXJCb3VuZCwgc2VudGVuY2VVcHBlckJvdW5kKTtcbiAgICAgIGJvdW5kcy5taW4gPSBib3VuZHMubWluICsgMTtcbiAgICB9XG5cbiAgICBpZiAocGFyYWdyYXBoLmxlbmd0aCkge1xuICAgICAgcGFyYWdyYXBoID0gcGFyYWdyYXBoLnNsaWNlKDIpO1xuICAgICAgcGFyYWdyYXBoID0gcGFyYWdyYXBoICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhZ3JhcGg7XG4gIH1cblxuICB2YXIgaXRlciA9IDBcbiAgICAsIGJvdW5kcyA9IHttaW46IDAsIG1heDogY291bnR9XG4gICAgLCBzdHJpbmcgPSAnJ1xuICAgICwgcHJlZml4ID0gJyc7XG5cbiAgaWYgKGZvcm1hdCA9PSAnaHRtbCcpIHtcbiAgICBvcGVuaW5nVGFnID0gJzxwPic7XG4gICAgY2xvc2luZ1RhZyA9ICc8L3A+JztcbiAgfVxuXG4gIHdoaWxlIChib3VuZHMubWluIDwgYm91bmRzLm1heCkge1xuICAgIHN3aXRjaCAodW5pdHMudG9Mb3dlckNhc2UoKSkge1xuICAgICAgY2FzZSAnd29yZHMnOlxuICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyAnICcgKyByYW5kb21Xb3JkKHdvcmRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZW50ZW5jZXMnOlxuICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyAnLiAnICsgcmFuZG9tU2VudGVuY2Uod29yZHMsIHNlbnRlbmNlTG93ZXJCb3VuZCwgc2VudGVuY2VVcHBlckJvdW5kKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYXJhZ3JhcGhzJzpcbiAgICAgICAgdmFyIG5leHRTdHJpbmcgPSByYW5kb21QYXJhZ3JhcGgod29yZHMsIHBhcmFncmFwaExvd2VyQm91bmQsIHBhcmFncmFwaFVwcGVyQm91bmQsIHNlbnRlbmNlTG93ZXJCb3VuZCwgc2VudGVuY2VVcHBlckJvdW5kKTtcblxuICAgICAgICBpZiAoZm9ybWF0ID09ICdodG1sJykge1xuICAgICAgICAgIG5leHRTdHJpbmcgPSBvcGVuaW5nVGFnICsgbmV4dFN0cmluZyArIGNsb3NpbmdUYWc7XG4gICAgICAgICAgaWYgKGJvdW5kcy5taW4gPCBib3VuZHMubWF4IC0gMSkge1xuICAgICAgICAgICAgbmV4dFN0cmluZyA9IG5leHRTdHJpbmcgKyBzdWZmaXg7IC8vIEVhY2ggcGFyYWdyYXBoIG9uIGEgbmV3IGxpbmVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYm91bmRzLm1pbiA8IGJvdW5kcy5tYXggLSAxKSB7XG4gICAgICAgICAgbmV4dFN0cmluZyA9IG5leHRTdHJpbmcgKyBzdWZmaXggKyBzdWZmaXg7IC8vIERvdWJsZS11cCB0aGUgRU9MIGNoYXJhY3RlciB0byBtYWtlIGRpc3RpbmN0IHBhcmFncmFwaHMsIGxpa2UgY2FycmlhZ2UgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyBuZXh0U3RyaW5nO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGJvdW5kcy5taW4gPSBib3VuZHMubWluICsgMTtcbiAgfVxuXG4gIGlmIChzdHJpbmcubGVuZ3RoKSB7XG4gICAgdmFyIHBvcyA9IDA7XG5cbiAgICBpZiAoc3RyaW5nLmluZGV4T2YoJy4gJykgPT0gMCkge1xuICAgICAgcG9zID0gMjtcbiAgICB9IGVsc2UgaWYgKHN0cmluZy5pbmRleE9mKCcuJykgPT0gMCB8fCBzdHJpbmcuaW5kZXhPZignICcpID09IDApIHtcbiAgICAgIHBvcyA9IDE7XG4gICAgfVxuXG4gICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKHBvcyk7XG5cbiAgICBpZiAodW5pdHMgPT0gJ3NlbnRlbmNlcycpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZyArICcuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gc2ltcGxlUGx1cmFsaXplKHN0cmluZykge1xuICBpZiAoc3RyaW5nLmluZGV4T2YoJ3MnLCBzdHJpbmcubGVuZ3RoIC0gMSkgPT09IC0xKSB7XG4gICAgcmV0dXJuIHN0cmluZyArICdzJztcbiAgfVxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRvcjtcbiIsIi8vIENvcHlyaWdodCAyMDExIEdvb2dsZSBJbmMuXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9IHRoaXMuX19leHRlbmRzIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG52YXIgTXV0YXRpb25PYnNlcnZlckN0b3I7XG5pZiAodHlwZW9mIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKVxuICAgIE11dGF0aW9uT2JzZXJ2ZXJDdG9yID0gV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbmVsc2VcbiAgICBNdXRhdGlvbk9ic2VydmVyQ3RvciA9IE11dGF0aW9uT2JzZXJ2ZXI7XG5cbmlmIChNdXRhdGlvbk9ic2VydmVyQ3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5lcnJvcignRE9NIE11dGF0aW9uIE9ic2VydmVycyBhcmUgcmVxdWlyZWQuJyk7XG4gICAgY29uc29sZS5lcnJvcignaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9ET00vTXV0YXRpb25PYnNlcnZlcicpO1xuICAgIHRocm93IEVycm9yKCdET00gTXV0YXRpb24gT2JzZXJ2ZXJzIGFyZSByZXF1aXJlZCcpO1xufVxuXG52YXIgTm9kZU1hcCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9kZU1hcCgpIHtcbiAgICAgICAgdGhpcy5ub2RlcyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgIH1cbiAgICBOb2RlTWFwLnByb3RvdHlwZS5pc0luZGV4ID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuICtzID09PSBzID4+PiAwO1xuICAgIH07XG5cbiAgICBOb2RlTWFwLnByb3RvdHlwZS5ub2RlSWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgaWQgPSBub2RlW05vZGVNYXAuSURfUFJPUF07XG4gICAgICAgIGlmICghaWQpXG4gICAgICAgICAgICBpZCA9IG5vZGVbTm9kZU1hcC5JRF9QUk9QXSA9IE5vZGVNYXAubmV4dElkXysrO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuICAgIE5vZGVNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChub2RlLCB2YWx1ZSkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLm5vZGVJZChub2RlKTtcbiAgICAgICAgdGhpcy5ub2Rlc1tpZF0gPSBub2RlO1xuICAgICAgICB0aGlzLnZhbHVlc1tpZF0gPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgTm9kZU1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5ub2RlSWQobm9kZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1tpZF07XG4gICAgfTtcblxuICAgIE5vZGVNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVJZChub2RlKSBpbiB0aGlzLm5vZGVzO1xuICAgIH07XG5cbiAgICBOb2RlTWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLm5vZGVJZChub2RlKTtcbiAgICAgICAgZGVsZXRlIHRoaXMubm9kZXNbaWRdO1xuICAgICAgICB0aGlzLnZhbHVlc1tpZF0gPSB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIE5vZGVNYXAucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub2RlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJbmRleChpZCkpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKHRoaXMubm9kZXNbaWRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlcztcbiAgICB9O1xuICAgIE5vZGVNYXAuSURfUFJPUCA9ICdfX211dGF0aW9uX3N1bW1hcnlfbm9kZV9tYXBfaWRfXyc7XG4gICAgTm9kZU1hcC5uZXh0SWRfID0gMTtcbiAgICByZXR1cm4gTm9kZU1hcDtcbn0pKCk7XG5cbi8qKlxuKiAgdmFyIHJlYWNoYWJsZU1hdGNoYWJsZVByb2R1Y3QgPSBbXG4qICAvLyAgU1RBWUVEX09VVCwgIEVOVEVSRUQsICAgICBTVEFZRURfSU4sICAgRVhJVEVEXG4qICAgIFsgU1RBWUVEX09VVCwgIFNUQVlFRF9PVVQsICBTVEFZRURfT1VULCAgU1RBWUVEX09VVCBdLCAvLyBTVEFZRURfT1VUXG4qICAgIFsgU1RBWUVEX09VVCwgIEVOVEVSRUQsICAgICBFTlRFUkVELCAgICAgU1RBWUVEX09VVCBdLCAvLyBFTlRFUkVEXG4qICAgIFsgU1RBWUVEX09VVCwgIEVOVEVSRUQsICAgICBTVEFZRURfSU4sICAgRVhJVEVEICAgICBdLCAvLyBTVEFZRURfSU5cbiogICAgWyBTVEFZRURfT1VULCAgU1RBWUVEX09VVCwgIEVYSVRFRCwgICAgICBFWElURUQgICAgIF0gIC8vIEVYSVRFRFxuKiAgXTtcbiovXG52YXIgTW92ZW1lbnQ7XG4oZnVuY3Rpb24gKE1vdmVtZW50KSB7XG4gICAgTW92ZW1lbnRbTW92ZW1lbnRbXCJTVEFZRURfT1VUXCJdID0gMF0gPSBcIlNUQVlFRF9PVVRcIjtcbiAgICBNb3ZlbWVudFtNb3ZlbWVudFtcIkVOVEVSRURcIl0gPSAxXSA9IFwiRU5URVJFRFwiO1xuICAgIE1vdmVtZW50W01vdmVtZW50W1wiU1RBWUVEX0lOXCJdID0gMl0gPSBcIlNUQVlFRF9JTlwiO1xuICAgIE1vdmVtZW50W01vdmVtZW50W1wiUkVQQVJFTlRFRFwiXSA9IDNdID0gXCJSRVBBUkVOVEVEXCI7XG4gICAgTW92ZW1lbnRbTW92ZW1lbnRbXCJSRU9SREVSRURcIl0gPSA0XSA9IFwiUkVPUkRFUkVEXCI7XG4gICAgTW92ZW1lbnRbTW92ZW1lbnRbXCJFWElURURcIl0gPSA1XSA9IFwiRVhJVEVEXCI7XG59KShNb3ZlbWVudCB8fCAoTW92ZW1lbnQgPSB7fSkpO1xuXG5mdW5jdGlvbiBlbnRlcmVkT3JFeGl0ZWQoY2hhbmdlVHlwZSkge1xuICAgIHJldHVybiBjaGFuZ2VUeXBlID09PSAxIC8qIEVOVEVSRUQgKi8gfHwgY2hhbmdlVHlwZSA9PT0gNSAvKiBFWElURUQgKi87XG59XG5cbnZhciBOb2RlQ2hhbmdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb2RlQ2hhbmdlKG5vZGUsIGNoaWxkTGlzdCwgYXR0cmlidXRlcywgY2hhcmFjdGVyRGF0YSwgb2xkUGFyZW50Tm9kZSwgYWRkZWQsIGF0dHJpYnV0ZU9sZFZhbHVlcywgY2hhcmFjdGVyRGF0YU9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRMaXN0ID09PSBcInVuZGVmaW5lZFwiKSB7IGNoaWxkTGlzdCA9IGZhbHNlOyB9XG4gICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcyA9PT0gXCJ1bmRlZmluZWRcIikgeyBhdHRyaWJ1dGVzID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBjaGFyYWN0ZXJEYXRhID09PSBcInVuZGVmaW5lZFwiKSB7IGNoYXJhY3RlckRhdGEgPSBmYWxzZTsgfVxuICAgICAgICBpZiAodHlwZW9mIG9sZFBhcmVudE5vZGUgPT09IFwidW5kZWZpbmVkXCIpIHsgb2xkUGFyZW50Tm9kZSA9IG51bGw7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBhZGRlZCA9PT0gXCJ1bmRlZmluZWRcIikgeyBhZGRlZCA9IGZhbHNlOyB9XG4gICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlT2xkVmFsdWVzID09PSBcInVuZGVmaW5lZFwiKSB7IGF0dHJpYnV0ZU9sZFZhbHVlcyA9IG51bGw7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBjaGFyYWN0ZXJEYXRhT2xkVmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgY2hhcmFjdGVyRGF0YU9sZFZhbHVlID0gbnVsbDsgfVxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICB0aGlzLmNoaWxkTGlzdCA9IGNoaWxkTGlzdDtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJEYXRhID0gY2hhcmFjdGVyRGF0YTtcbiAgICAgICAgdGhpcy5vbGRQYXJlbnROb2RlID0gb2xkUGFyZW50Tm9kZTtcbiAgICAgICAgdGhpcy5hZGRlZCA9IGFkZGVkO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9sZFZhbHVlcyA9IGF0dHJpYnV0ZU9sZFZhbHVlcztcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJEYXRhT2xkVmFsdWUgPSBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU7XG4gICAgICAgIHRoaXMuaXNDYXNlSW5zZW5zaXRpdmUgPSB0aGlzLm5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmIHRoaXMubm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRoaXMubm9kZS5vd25lckRvY3VtZW50IGluc3RhbmNlb2YgSFRNTERvY3VtZW50O1xuICAgIH1cbiAgICBOb2RlQ2hhbmdlLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVPbGRWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5hdHRyaWJ1dGVPbGRWYWx1ZXMpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodGhpcy5pc0Nhc2VJbnNlbnNpdGl2ZSlcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZU9sZFZhbHVlc1tuYW1lXTtcbiAgICB9O1xuXG4gICAgTm9kZUNoYW5nZS5wcm90b3R5cGUuZ2V0QXR0cmlidXRlTmFtZXNNdXRhdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZU9sZFZhbHVlcylcbiAgICAgICAgICAgIHJldHVybiBuYW1lcztcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLmF0dHJpYnV0ZU9sZFZhbHVlcykge1xuICAgICAgICAgICAgbmFtZXMucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmFtZXM7XG4gICAgfTtcblxuICAgIE5vZGVDaGFuZ2UucHJvdG90eXBlLmF0dHJpYnV0ZU11dGF0ZWQgPSBmdW5jdGlvbiAobmFtZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVPbGRWYWx1ZXMgPSB0aGlzLmF0dHJpYnV0ZU9sZFZhbHVlcyB8fCB7fTtcblxuICAgICAgICBpZiAobmFtZSBpbiB0aGlzLmF0dHJpYnV0ZU9sZFZhbHVlcylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9sZFZhbHVlc1tuYW1lXSA9IG9sZFZhbHVlO1xuICAgIH07XG5cbiAgICBOb2RlQ2hhbmdlLnByb3RvdHlwZS5jaGFyYWN0ZXJEYXRhTXV0YXRlZCA9IGZ1bmN0aW9uIChvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJEYXRhKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmNoYXJhY3RlckRhdGEgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoYXJhY3RlckRhdGFPbGRWYWx1ZSA9IG9sZFZhbHVlO1xuICAgIH07XG5cbiAgICAvLyBOb3RlOiBpcyBpdCBwb3NzaWJsZSB0byByZWNlaXZlIGEgcmVtb3ZhbCBmb2xsb3dlZCBieSBhIHJlbW92YWwuIFRoaXNcbiAgICAvLyBjYW4gb2NjdXIgaWYgdGhlIHJlbW92ZWQgbm9kZSBpcyBhZGRlZCB0byBhbiBub24tb2JzZXJ2ZWQgbm9kZSwgdGhhdFxuICAgIC8vIG5vZGUgaXMgYWRkZWQgdG8gdGhlIG9ic2VydmVkIGFyZWEsIGFuZCB0aGVuIHRoZSBub2RlIHJlbW92ZWQgZnJvbVxuICAgIC8vIGl0LlxuICAgIE5vZGVDaGFuZ2UucHJvdG90eXBlLnJlbW92ZWRGcm9tUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICB0aGlzLmNoaWxkTGlzdCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmFkZGVkIHx8IHRoaXMub2xkUGFyZW50Tm9kZSlcbiAgICAgICAgICAgIHRoaXMuYWRkZWQgPSBmYWxzZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5vbGRQYXJlbnROb2RlID0gcGFyZW50O1xuICAgIH07XG5cbiAgICBOb2RlQ2hhbmdlLnByb3RvdHlwZS5pbnNlcnRlZEludG9QYXJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRMaXN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGRlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIC8vIEFuIG5vZGUncyBvbGRQYXJlbnQgaXNcbiAgICAvLyAgIC1pdHMgcHJlc2VudCBwYXJlbnQsIGlmIGl0cyBwYXJlbnROb2RlIHdhcyBub3QgY2hhbmdlZC5cbiAgICAvLyAgIC1udWxsIGlmIHRoZSBmaXJzdCB0aGluZyB0aGF0IGhhcHBlbmVkIHRvIGl0IHdhcyBhbiBhZGQuXG4gICAgLy8gICAtdGhlIG5vZGUgaXQgd2FzIHJlbW92ZWQgZnJvbSBpZiB0aGUgZmlyc3QgdGhpbmcgdGhhdCBoYXBwZW5lZCB0byBpdFxuICAgIC8vICAgICAgd2FzIGEgcmVtb3ZlLlxuICAgIE5vZGVDaGFuZ2UucHJvdG90eXBlLmdldE9sZFBhcmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRMaXN0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vbGRQYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9sZFBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5hZGRlZClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucGFyZW50Tm9kZTtcbiAgICB9O1xuICAgIHJldHVybiBOb2RlQ2hhbmdlO1xufSkoKTtcblxudmFyIENoaWxkTGlzdENoYW5nZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hpbGRMaXN0Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLmFkZGVkID0gbmV3IE5vZGVNYXAoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVkID0gbmV3IE5vZGVNYXAoKTtcbiAgICAgICAgdGhpcy5tYXliZU1vdmVkID0gbmV3IE5vZGVNYXAoKTtcbiAgICAgICAgdGhpcy5vbGRQcmV2aW91cyA9IG5ldyBOb2RlTWFwKCk7XG4gICAgICAgIHRoaXMubW92ZWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBDaGlsZExpc3RDaGFuZ2U7XG59KSgpO1xuXG52YXIgVHJlZUNoYW5nZXMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUcmVlQ2hhbmdlcywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUcmVlQ2hhbmdlcyhyb290Tm9kZSwgbXV0YXRpb25zKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMucm9vdE5vZGUgPSByb290Tm9kZTtcbiAgICAgICAgdGhpcy5yZWFjaGFibGVDYWNoZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy53YXNSZWFjaGFibGVDYWNoZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5hbnlQYXJlbnRzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFueUF0dHJpYnV0ZXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW55Q2hhcmFjdGVyRGF0YUNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBtID0gMDsgbSA8IG11dGF0aW9ucy5sZW5ndGg7IG0rKykge1xuICAgICAgICAgICAgdmFyIG11dGF0aW9uID0gbXV0YXRpb25zW21dO1xuICAgICAgICAgICAgc3dpdGNoIChtdXRhdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnlQYXJlbnRzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2hhbmdlKG5vZGUpLnJlbW92ZWRGcm9tUGFyZW50KG11dGF0aW9uLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENoYW5nZShub2RlKS5pbnNlcnRlZEludG9QYXJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFueUF0dHJpYnV0ZXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYW5nZSA9IHRoaXMuZ2V0Q2hhbmdlKG11dGF0aW9uLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZS5hdHRyaWJ1dGVNdXRhdGVkKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUsIG11dGF0aW9uLm9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdjaGFyYWN0ZXJEYXRhJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnlDaGFyYWN0ZXJEYXRhQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFuZ2UgPSB0aGlzLmdldENoYW5nZShtdXRhdGlvbi50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuY2hhcmFjdGVyRGF0YU11dGF0ZWQobXV0YXRpb24ub2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBUcmVlQ2hhbmdlcy5wcm90b3R5cGUuZ2V0Q2hhbmdlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IHRoaXMuZ2V0KG5vZGUpO1xuICAgICAgICBpZiAoIWNoYW5nZSkge1xuICAgICAgICAgICAgY2hhbmdlID0gbmV3IE5vZGVDaGFuZ2Uobm9kZSk7XG4gICAgICAgICAgICB0aGlzLnNldChub2RlLCBjaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2U7XG4gICAgfTtcblxuICAgIFRyZWVDaGFuZ2VzLnByb3RvdHlwZS5nZXRPbGRQYXJlbnQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgY2hhbmdlID0gdGhpcy5nZXQobm9kZSk7XG4gICAgICAgIHJldHVybiBjaGFuZ2UgPyBjaGFuZ2UuZ2V0T2xkUGFyZW50KCkgOiBub2RlLnBhcmVudE5vZGU7XG4gICAgfTtcblxuICAgIFRyZWVDaGFuZ2VzLnByb3RvdHlwZS5nZXRJc1JlYWNoYWJsZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSB0aGlzLnJvb3ROb2RlKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLnJlYWNoYWJsZUNhY2hlID0gdGhpcy5yZWFjaGFibGVDYWNoZSB8fCBuZXcgTm9kZU1hcCgpO1xuICAgICAgICB2YXIgaXNSZWFjaGFibGUgPSB0aGlzLnJlYWNoYWJsZUNhY2hlLmdldChub2RlKTtcbiAgICAgICAgaWYgKGlzUmVhY2hhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlzUmVhY2hhYmxlID0gdGhpcy5nZXRJc1JlYWNoYWJsZShub2RlLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgdGhpcy5yZWFjaGFibGVDYWNoZS5zZXQobm9kZSwgaXNSZWFjaGFibGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1JlYWNoYWJsZTtcbiAgICB9O1xuXG4gICAgLy8gQSBub2RlIHdhc1JlYWNoYWJsZSBpZiBpdHMgb2xkUGFyZW50IHdhc1JlYWNoYWJsZS5cbiAgICBUcmVlQ2hhbmdlcy5wcm90b3R5cGUuZ2V0V2FzUmVhY2hhYmxlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMucm9vdE5vZGUpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMud2FzUmVhY2hhYmxlQ2FjaGUgPSB0aGlzLndhc1JlYWNoYWJsZUNhY2hlIHx8IG5ldyBOb2RlTWFwKCk7XG4gICAgICAgIHZhciB3YXNSZWFjaGFibGUgPSB0aGlzLndhc1JlYWNoYWJsZUNhY2hlLmdldChub2RlKTtcbiAgICAgICAgaWYgKHdhc1JlYWNoYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3YXNSZWFjaGFibGUgPSB0aGlzLmdldFdhc1JlYWNoYWJsZSh0aGlzLmdldE9sZFBhcmVudChub2RlKSk7XG4gICAgICAgICAgICB0aGlzLndhc1JlYWNoYWJsZUNhY2hlLnNldChub2RlLCB3YXNSZWFjaGFibGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3YXNSZWFjaGFibGU7XG4gICAgfTtcblxuICAgIFRyZWVDaGFuZ2VzLnByb3RvdHlwZS5yZWFjaGFiaWxpdHlDaGFuZ2UgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAodGhpcy5nZXRJc1JlYWNoYWJsZShub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0V2FzUmVhY2hhYmxlKG5vZGUpID8gMiAvKiBTVEFZRURfSU4gKi8gOiAxIC8qIEVOVEVSRUQgKi87XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRXYXNSZWFjaGFibGUobm9kZSkgPyA1IC8qIEVYSVRFRCAqLyA6IDAgLyogU1RBWUVEX09VVCAqLztcbiAgICB9O1xuICAgIHJldHVybiBUcmVlQ2hhbmdlcztcbn0pKE5vZGVNYXApO1xuXG52YXIgTXV0YXRpb25Qcm9qZWN0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT09EKGFueSlcbiAgICBmdW5jdGlvbiBNdXRhdGlvblByb2plY3Rpb24ocm9vdE5vZGUsIG11dGF0aW9ucywgc2VsZWN0b3JzLCBjYWxjUmVvcmRlcmVkLCBjYWxjT2xkUHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIHRoaXMucm9vdE5vZGUgPSByb290Tm9kZTtcbiAgICAgICAgdGhpcy5tdXRhdGlvbnMgPSBtdXRhdGlvbnM7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICAgICAgICB0aGlzLmNhbGNSZW9yZGVyZWQgPSBjYWxjUmVvcmRlcmVkO1xuICAgICAgICB0aGlzLmNhbGNPbGRQcmV2aW91c1NpYmxpbmcgPSBjYWxjT2xkUHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB0aGlzLnRyZWVDaGFuZ2VzID0gbmV3IFRyZWVDaGFuZ2VzKHJvb3ROb2RlLCBtdXRhdGlvbnMpO1xuICAgICAgICB0aGlzLmVudGVyZWQgPSBbXTtcbiAgICAgICAgdGhpcy5leGl0ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF5ZWRJbiA9IG5ldyBOb2RlTWFwKCk7XG4gICAgICAgIHRoaXMudmlzaXRlZCA9IG5ldyBOb2RlTWFwKCk7XG4gICAgICAgIHRoaXMuY2hpbGRMaXN0Q2hhbmdlTWFwID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNoYXJhY3RlckRhdGFPbmx5ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1hdGNoQ2FjaGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb25zKCk7XG4gICAgfVxuICAgIE11dGF0aW9uUHJvamVjdGlvbi5wcm90b3R5cGUucHJvY2Vzc011dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRyZWVDaGFuZ2VzLmFueVBhcmVudHNDaGFuZ2VkICYmICF0aGlzLnRyZWVDaGFuZ2VzLmFueUF0dHJpYnV0ZXNDaGFuZ2VkKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHZhciBjaGFuZ2VkTm9kZXMgPSB0aGlzLnRyZWVDaGFuZ2VzLmtleXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFuZ2VkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudmlzaXROb2RlKGNoYW5nZWROb2Rlc1tpXSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBNdXRhdGlvblByb2plY3Rpb24ucHJvdG90eXBlLnZpc2l0Tm9kZSA9IGZ1bmN0aW9uIChub2RlLCBwYXJlbnRSZWFjaGFibGUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaXRlZC5oYXMobm9kZSkpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdGhpcy52aXNpdGVkLnNldChub2RlLCB0cnVlKTtcblxuICAgICAgICB2YXIgY2hhbmdlID0gdGhpcy50cmVlQ2hhbmdlcy5nZXQobm9kZSk7XG4gICAgICAgIHZhciByZWFjaGFibGUgPSBwYXJlbnRSZWFjaGFibGU7XG5cbiAgICAgICAgLy8gbm9kZSBpbmhlcml0cyBpdHMgcGFyZW50J3MgcmVhY2hhYmlsaXR5IGNoYW5nZSB1bmxlc3NcbiAgICAgICAgLy8gaXRzIHBhcmVudE5vZGUgd2FzIG11dGF0ZWQuXG4gICAgICAgIGlmICgoY2hhbmdlICYmIGNoYW5nZS5jaGlsZExpc3QpIHx8IHJlYWNoYWJsZSA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZWFjaGFibGUgPSB0aGlzLnRyZWVDaGFuZ2VzLnJlYWNoYWJpbGl0eUNoYW5nZShub2RlKTtcblxuICAgICAgICBpZiAocmVhY2hhYmxlID09PSAwIC8qIFNUQVlFRF9PVVQgKi8pXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gQ2FjaGUgbWF0Y2ggcmVzdWx0cyBmb3Igc3ViLXBhdHRlcm5zLlxuICAgICAgICB0aGlzLm1hdGNoYWJpbGl0eUNoYW5nZShub2RlKTtcblxuICAgICAgICBpZiAocmVhY2hhYmxlID09PSAxIC8qIEVOVEVSRUQgKi8pIHtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJlZC5wdXNoKG5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlYWNoYWJsZSA9PT0gNSAvKiBFWElURUQgKi8pIHtcbiAgICAgICAgICAgIHRoaXMuZXhpdGVkLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB0aGlzLmVuc3VyZUhhc09sZFByZXZpb3VzU2libGluZ0lmTmVlZGVkKG5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlYWNoYWJsZSA9PT0gMiAvKiBTVEFZRURfSU4gKi8pIHtcbiAgICAgICAgICAgIHZhciBtb3ZlbWVudCA9IDIgLyogU1RBWUVEX0lOICovO1xuXG4gICAgICAgICAgICBpZiAoY2hhbmdlICYmIGNoYW5nZS5jaGlsZExpc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlLm9sZFBhcmVudE5vZGUgIT09IG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBtb3ZlbWVudCA9IDMgLyogUkVQQVJFTlRFRCAqLztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVIYXNPbGRQcmV2aW91c1NpYmxpbmdJZk5lZWRlZChub2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2FsY1Jlb3JkZXJlZCAmJiB0aGlzLndhc1Jlb3JkZXJlZChub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBtb3ZlbWVudCA9IDQgLyogUkVPUkRFUkVEICovO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdGF5ZWRJbi5zZXQobm9kZSwgbW92ZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlYWNoYWJsZSA9PT0gMiAvKiBTVEFZRURfSU4gKi8pXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgZm9yICh2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7IGNoaWxkOyBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2l0Tm9kZShjaGlsZCwgcmVhY2hhYmxlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBNdXRhdGlvblByb2plY3Rpb24ucHJvdG90eXBlLmVuc3VyZUhhc09sZFByZXZpb3VzU2libGluZ0lmTmVlZGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhbGNPbGRQcmV2aW91c1NpYmxpbmcpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzQ2hpbGRsaXN0Q2hhbmdlcygpO1xuXG4gICAgICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgbm9kZUNoYW5nZSA9IHRoaXMudHJlZUNoYW5nZXMuZ2V0KG5vZGUpO1xuICAgICAgICBpZiAobm9kZUNoYW5nZSAmJiBub2RlQ2hhbmdlLm9sZFBhcmVudE5vZGUpXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gbm9kZUNoYW5nZS5vbGRQYXJlbnROb2RlO1xuXG4gICAgICAgIHZhciBjaGFuZ2UgPSB0aGlzLmNoaWxkTGlzdENoYW5nZU1hcC5nZXQocGFyZW50Tm9kZSk7XG4gICAgICAgIGlmICghY2hhbmdlKSB7XG4gICAgICAgICAgICBjaGFuZ2UgPSBuZXcgQ2hpbGRMaXN0Q2hhbmdlKCk7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTGlzdENoYW5nZU1hcC5zZXQocGFyZW50Tm9kZSwgY2hhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2hhbmdlLm9sZFByZXZpb3VzLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgY2hhbmdlLm9sZFByZXZpb3VzLnNldChub2RlLCBub2RlLnByZXZpb3VzU2libGluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgTXV0YXRpb25Qcm9qZWN0aW9uLnByb3RvdHlwZS5nZXRDaGFuZ2VkID0gZnVuY3Rpb24gKHN1bW1hcnksIHNlbGVjdG9ycywgY2hhcmFjdGVyRGF0YU9ubHkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RvcnMgPSBzZWxlY3RvcnM7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyRGF0YU9ubHkgPSBjaGFyYWN0ZXJEYXRhT25seTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZW50ZXJlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmVudGVyZWRbaV07XG4gICAgICAgICAgICB2YXIgbWF0Y2hhYmxlID0gdGhpcy5tYXRjaGFiaWxpdHlDaGFuZ2Uobm9kZSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hhYmxlID09PSAxIC8qIEVOVEVSRUQgKi8gfHwgbWF0Y2hhYmxlID09PSAyIC8qIFNUQVlFRF9JTiAqLylcbiAgICAgICAgICAgICAgICBzdW1tYXJ5LmFkZGVkLnB1c2gobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RheWVkSW5Ob2RlcyA9IHRoaXMuc3RheWVkSW4ua2V5cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXllZEluTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gc3RheWVkSW5Ob2Rlc1tpXTtcbiAgICAgICAgICAgIHZhciBtYXRjaGFibGUgPSB0aGlzLm1hdGNoYWJpbGl0eUNoYW5nZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoYWJsZSA9PT0gMSAvKiBFTlRFUkVEICovKSB7XG4gICAgICAgICAgICAgICAgc3VtbWFyeS5hZGRlZC5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaGFibGUgPT09IDUgLyogRVhJVEVEICovKSB7XG4gICAgICAgICAgICAgICAgc3VtbWFyeS5yZW1vdmVkLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoYWJsZSA9PT0gMiAvKiBTVEFZRURfSU4gKi8gJiYgKHN1bW1hcnkucmVwYXJlbnRlZCB8fCBzdW1tYXJ5LnJlb3JkZXJlZCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW92ZW1lbnQgPSB0aGlzLnN0YXllZEluLmdldChub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VtbWFyeS5yZXBhcmVudGVkICYmIG1vdmVtZW50ID09PSAzIC8qIFJFUEFSRU5URUQgKi8pXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnkucmVwYXJlbnRlZC5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN1bW1hcnkucmVvcmRlcmVkICYmIG1vdmVtZW50ID09PSA0IC8qIFJFT1JERVJFRCAqLylcbiAgICAgICAgICAgICAgICAgICAgc3VtbWFyeS5yZW9yZGVyZWQucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5leGl0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5leGl0ZWRbaV07XG4gICAgICAgICAgICB2YXIgbWF0Y2hhYmxlID0gdGhpcy5tYXRjaGFiaWxpdHlDaGFuZ2Uobm9kZSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hhYmxlID09PSA1IC8qIEVYSVRFRCAqLyB8fCBtYXRjaGFibGUgPT09IDIgLyogU1RBWUVEX0lOICovKVxuICAgICAgICAgICAgICAgIHN1bW1hcnkucmVtb3ZlZC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIE11dGF0aW9uUHJvamVjdGlvbi5wcm90b3R5cGUuZ2V0T2xkUGFyZW50Tm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciBjaGFuZ2UgPSB0aGlzLnRyZWVDaGFuZ2VzLmdldChub2RlKTtcbiAgICAgICAgaWYgKGNoYW5nZSAmJiBjaGFuZ2UuY2hpbGRMaXN0KVxuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZS5vbGRQYXJlbnROb2RlID8gY2hhbmdlLm9sZFBhcmVudE5vZGUgOiBudWxsO1xuXG4gICAgICAgIHZhciByZWFjaGFiaWxpdHlDaGFuZ2UgPSB0aGlzLnRyZWVDaGFuZ2VzLnJlYWNoYWJpbGl0eUNoYW5nZShub2RlKTtcbiAgICAgICAgaWYgKHJlYWNoYWJpbGl0eUNoYW5nZSA9PT0gMCAvKiBTVEFZRURfT1VUICovIHx8IHJlYWNoYWJpbGl0eUNoYW5nZSA9PT0gMSAvKiBFTlRFUkVEICovKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2dldE9sZFBhcmVudE5vZGUgcmVxdWVzdGVkIG9uIGludmFsaWQgbm9kZS4nKTtcblxuICAgICAgICByZXR1cm4gbm9kZS5wYXJlbnROb2RlO1xuICAgIH07XG5cbiAgICBNdXRhdGlvblByb2plY3Rpb24ucHJvdG90eXBlLmdldE9sZFByZXZpb3VzU2libGluZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgbm9kZUNoYW5nZSA9IHRoaXMudHJlZUNoYW5nZXMuZ2V0KG5vZGUpO1xuICAgICAgICBpZiAobm9kZUNoYW5nZSAmJiBub2RlQ2hhbmdlLm9sZFBhcmVudE5vZGUpXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gbm9kZUNoYW5nZS5vbGRQYXJlbnROb2RlO1xuXG4gICAgICAgIHZhciBjaGFuZ2UgPSB0aGlzLmNoaWxkTGlzdENoYW5nZU1hcC5nZXQocGFyZW50Tm9kZSk7XG4gICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2dldE9sZFByZXZpb3VzU2libGluZyByZXF1ZXN0ZWQgb24gaW52YWxpZCBub2RlLicpO1xuXG4gICAgICAgIHJldHVybiBjaGFuZ2Uub2xkUHJldmlvdXMuZ2V0KG5vZGUpO1xuICAgIH07XG5cbiAgICBNdXRhdGlvblByb2plY3Rpb24ucHJvdG90eXBlLmdldE9sZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBhdHRyTmFtZSkge1xuICAgICAgICB2YXIgY2hhbmdlID0gdGhpcy50cmVlQ2hhbmdlcy5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmICghY2hhbmdlIHx8ICFjaGFuZ2UuYXR0cmlidXRlcylcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdnZXRPbGRBdHRyaWJ1dGUgcmVxdWVzdGVkIG9uIGludmFsaWQgbm9kZS4nKTtcblxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFuZ2UuZ2V0QXR0cmlidXRlT2xkVmFsdWUoYXR0ck5hbWUpO1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdnZXRPbGRBdHRyaWJ1dGUgcmVxdWVzdGVkIGZvciB1bmNoYW5nZWQgYXR0cmlidXRlIG5hbWUuJyk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBNdXRhdGlvblByb2plY3Rpb24ucHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWROb2RlcyA9IGZ1bmN0aW9uIChpbmNsdWRlQXR0cmlidXRlcykge1xuICAgICAgICBpZiAoIXRoaXMudHJlZUNoYW5nZXMuYW55QXR0cmlidXRlc0NoYW5nZWQpXG4gICAgICAgICAgICByZXR1cm4ge307XG5cbiAgICAgICAgdmFyIGF0dHJpYnV0ZUZpbHRlcjtcbiAgICAgICAgdmFyIGNhc2VJbnNlbnNpdGl2ZUZpbHRlcjtcbiAgICAgICAgaWYgKGluY2x1ZGVBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXIgPSB7fTtcbiAgICAgICAgICAgIGNhc2VJbnNlbnNpdGl2ZUZpbHRlciA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmNsdWRlQXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyTmFtZSA9IGluY2x1ZGVBdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlclthdHRyTmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNhc2VJbnNlbnNpdGl2ZUZpbHRlclthdHRyTmFtZS50b0xvd2VyQ2FzZSgpXSA9IGF0dHJOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnRyZWVDaGFuZ2VzLmtleXMoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gdGhpcy50cmVlQ2hhbmdlcy5nZXQobm9kZSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZS5hdHRyaWJ1dGVzKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBpZiAoMiAvKiBTVEFZRURfSU4gKi8gIT09IHRoaXMudHJlZUNoYW5nZXMucmVhY2hhYmlsaXR5Q2hhbmdlKG5vZGUpIHx8IDIgLyogU1RBWUVEX0lOICovICE9PSB0aGlzLm1hdGNoYWJpbGl0eUNoYW5nZShub2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IG5vZGU7XG4gICAgICAgICAgICB2YXIgY2hhbmdlZEF0dHJOYW1lcyA9IGNoYW5nZS5nZXRBdHRyaWJ1dGVOYW1lc011dGF0ZWQoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2hhbmdlZEF0dHJOYW1lcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyTmFtZSA9IGNoYW5nZWRBdHRyTmFtZXNbal07XG5cbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlRmlsdGVyICYmICFhdHRyaWJ1dGVGaWx0ZXJbYXR0ck5hbWVdICYmICEoY2hhbmdlLmlzQ2FzZUluc2Vuc2l0aXZlICYmIGNhc2VJbnNlbnNpdGl2ZUZpbHRlclthdHRyTmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IGNoYW5nZS5nZXRBdHRyaWJ1dGVPbGRWYWx1ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09PSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyTmFtZSkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhc2VJbnNlbnNpdGl2ZUZpbHRlciAmJiBjaGFuZ2UuaXNDYXNlSW5zZW5zaXRpdmUpXG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gY2FzZUluc2Vuc2l0aXZlRmlsdGVyW2F0dHJOYW1lXTtcblxuICAgICAgICAgICAgICAgIHJlc3VsdFthdHRyTmFtZV0gPSByZXN1bHRbYXR0ck5hbWVdIHx8IFtdO1xuICAgICAgICAgICAgICAgIHJlc3VsdFthdHRyTmFtZV0ucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIE11dGF0aW9uUHJvamVjdGlvbi5wcm90b3R5cGUuZ2V0T2xkQ2hhcmFjdGVyRGF0YSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciBjaGFuZ2UgPSB0aGlzLnRyZWVDaGFuZ2VzLmdldChub2RlKTtcbiAgICAgICAgaWYgKCFjaGFuZ2UgfHwgIWNoYW5nZS5jaGFyYWN0ZXJEYXRhKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2dldE9sZENoYXJhY3RlckRhdGEgcmVxdWVzdGVkIG9uIGludmFsaWQgbm9kZS4nKTtcblxuICAgICAgICByZXR1cm4gY2hhbmdlLmNoYXJhY3RlckRhdGFPbGRWYWx1ZTtcbiAgICB9O1xuXG4gICAgTXV0YXRpb25Qcm9qZWN0aW9uLnByb3RvdHlwZS5nZXRDaGFyYWN0ZXJEYXRhQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRyZWVDaGFuZ2VzLmFueUNoYXJhY3RlckRhdGFDaGFuZ2VkKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuXG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMudHJlZUNoYW5nZXMua2V5cygpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIGlmICgyIC8qIFNUQVlFRF9JTiAqLyAhPT0gdGhpcy50cmVlQ2hhbmdlcy5yZWFjaGFiaWxpdHlDaGFuZ2UodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IHRoaXMudHJlZUNoYW5nZXMuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZS5jaGFyYWN0ZXJEYXRhIHx8IHRhcmdldC50ZXh0Q29udGVudCA9PSBjaGFuZ2UuY2hhcmFjdGVyRGF0YU9sZFZhbHVlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgTXV0YXRpb25Qcm9qZWN0aW9uLnByb3RvdHlwZS5jb21wdXRlTWF0Y2hhYmlsaXR5Q2hhbmdlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgICAgICBpZiAoIXRoaXMubWF0Y2hDYWNoZSlcbiAgICAgICAgICAgIHRoaXMubWF0Y2hDYWNoZSA9IFtdO1xuICAgICAgICBpZiAoIXRoaXMubWF0Y2hDYWNoZVtzZWxlY3Rvci51aWRdKVxuICAgICAgICAgICAgdGhpcy5tYXRjaENhY2hlW3NlbGVjdG9yLnVpZF0gPSBuZXcgTm9kZU1hcCgpO1xuXG4gICAgICAgIHZhciBjYWNoZSA9IHRoaXMubWF0Y2hDYWNoZVtzZWxlY3Rvci51aWRdO1xuICAgICAgICB2YXIgcmVzdWx0ID0gY2FjaGUuZ2V0KGVsKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBzZWxlY3Rvci5tYXRjaGFiaWxpdHlDaGFuZ2UoZWwsIHRoaXMudHJlZUNoYW5nZXMuZ2V0KGVsKSk7XG4gICAgICAgICAgICBjYWNoZS5zZXQoZWwsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgTXV0YXRpb25Qcm9qZWN0aW9uLnByb3RvdHlwZS5tYXRjaGFiaWxpdHlDaGFuZ2UgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBUT0RPKHJhZmFlbHcpOiBJbmNsdWRlIFBJLCBDREFUQT9cbiAgICAgICAgLy8gT25seSBpbmNsdWRlIHRleHQgbm9kZXMuXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlckRhdGFPbmx5KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIE5vZGUuQ09NTUVOVF9OT0RFOlxuICAgICAgICAgICAgICAgIGNhc2UgTm9kZS5URVhUX05PREU6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyIC8qIFNUQVlFRF9JTiAqLztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMCAvKiBTVEFZRURfT1VUICovO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm8gZWxlbWVudCBmaWx0ZXIuIEluY2x1ZGUgYWxsIG5vZGVzLlxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0b3JzKVxuICAgICAgICAgICAgcmV0dXJuIDIgLyogU1RBWUVEX0lOICovO1xuXG4gICAgICAgIC8vIEVsZW1lbnQgZmlsdGVyLiBFeGNsdWRlIG5vbi1lbGVtZW50cy5cbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKVxuICAgICAgICAgICAgcmV0dXJuIDAgLyogU1RBWUVEX09VVCAqLztcblxuICAgICAgICB2YXIgZWwgPSBub2RlO1xuXG4gICAgICAgIHZhciBtYXRjaENoYW5nZXMgPSB0aGlzLnNlbGVjdG9ycy5tYXAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY29tcHV0ZU1hdGNoYWJpbGl0eUNoYW5nZShzZWxlY3RvciwgZWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgYWNjdW0gPSAwIC8qIFNUQVlFRF9PVVQgKi87XG4gICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICB3aGlsZSAoYWNjdW0gIT09IDIgLyogU1RBWUVEX0lOICovICYmIGkgPCBtYXRjaENoYW5nZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoQ2hhbmdlc1tpXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMiAvKiBTVEFZRURfSU4gKi86XG4gICAgICAgICAgICAgICAgICAgIGFjY3VtID0gMiAvKiBTVEFZRURfSU4gKi87XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMSAvKiBFTlRFUkVEICovOlxuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjdW0gPT09IDUgLyogRVhJVEVEICovKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW0gPSAyIC8qIFNUQVlFRF9JTiAqLztcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW0gPSAxIC8qIEVOVEVSRUQgKi87XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNSAvKiBFWElURUQgKi86XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2N1bSA9PT0gMSAvKiBFTlRFUkVEICovKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW0gPSAyIC8qIFNUQVlFRF9JTiAqLztcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW0gPSA1IC8qIEVYSVRFRCAqLztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2N1bTtcbiAgICB9O1xuXG4gICAgTXV0YXRpb25Qcm9qZWN0aW9uLnByb3RvdHlwZS5nZXRDaGlsZGxpc3RDaGFuZ2UgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IHRoaXMuY2hpbGRMaXN0Q2hhbmdlTWFwLmdldChlbCk7XG4gICAgICAgIGlmICghY2hhbmdlKSB7XG4gICAgICAgICAgICBjaGFuZ2UgPSBuZXcgQ2hpbGRMaXN0Q2hhbmdlKCk7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTGlzdENoYW5nZU1hcC5zZXQoZWwsIGNoYW5nZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hhbmdlO1xuICAgIH07XG5cbiAgICBNdXRhdGlvblByb2plY3Rpb24ucHJvdG90eXBlLnByb2Nlc3NDaGlsZGxpc3RDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGlsZExpc3RDaGFuZ2VNYXApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdGhpcy5jaGlsZExpc3RDaGFuZ2VNYXAgPSBuZXcgTm9kZU1hcCgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtdXRhdGlvbiA9IHRoaXMubXV0YXRpb25zW2ldO1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgIT0gJ2NoaWxkTGlzdCcpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRyZWVDaGFuZ2VzLnJlYWNoYWJpbGl0eUNoYW5nZShtdXRhdGlvbi50YXJnZXQpICE9PSAyIC8qIFNUQVlFRF9JTiAqLyAmJiAhdGhpcy5jYWxjT2xkUHJldmlvdXNTaWJsaW5nKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gdGhpcy5nZXRDaGlsZGxpc3RDaGFuZ2UobXV0YXRpb24udGFyZ2V0KTtcblxuICAgICAgICAgICAgdmFyIG9sZFByZXZpb3VzID0gbXV0YXRpb24ucHJldmlvdXNTaWJsaW5nO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZWNvcmRPbGRQcmV2aW91cyhub2RlLCBwcmV2aW91cykge1xuICAgICAgICAgICAgICAgIGlmICghbm9kZSB8fCBjaGFuZ2Uub2xkUHJldmlvdXMuaGFzKG5vZGUpIHx8IGNoYW5nZS5hZGRlZC5oYXMobm9kZSkgfHwgY2hhbmdlLm1heWJlTW92ZWQuaGFzKG5vZGUpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXMgJiYgKGNoYW5nZS5hZGRlZC5oYXMocHJldmlvdXMpIHx8IGNoYW5nZS5tYXliZU1vdmVkLmhhcyhwcmV2aW91cykpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjaGFuZ2Uub2xkUHJldmlvdXMuc2V0KG5vZGUsIHByZXZpb3VzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tqXTtcbiAgICAgICAgICAgICAgICByZWNvcmRPbGRQcmV2aW91cyhub2RlLCBvbGRQcmV2aW91cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlLmFkZGVkLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuYWRkZWQuZGVsZXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZS5yZW1vdmVkLnNldChub2RlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlLm1heWJlTW92ZWQuZGVsZXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9sZFByZXZpb3VzID0gbm9kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVjb3JkT2xkUHJldmlvdXMobXV0YXRpb24ubmV4dFNpYmxpbmcsIG9sZFByZXZpb3VzKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2pdO1xuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2UucmVtb3ZlZC5oYXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlLnJlbW92ZWQuZGVsZXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2UubWF5YmVNb3ZlZC5zZXQobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlLmFkZGVkLnNldChub2RlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgTXV0YXRpb25Qcm9qZWN0aW9uLnByb3RvdHlwZS53YXNSZW9yZGVyZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAoIXRoaXMudHJlZUNoYW5nZXMuYW55UGFyZW50c0NoYW5nZWQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzQ2hpbGRsaXN0Q2hhbmdlcygpO1xuXG4gICAgICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgbm9kZUNoYW5nZSA9IHRoaXMudHJlZUNoYW5nZXMuZ2V0KG5vZGUpO1xuICAgICAgICBpZiAobm9kZUNoYW5nZSAmJiBub2RlQ2hhbmdlLm9sZFBhcmVudE5vZGUpXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gbm9kZUNoYW5nZS5vbGRQYXJlbnROb2RlO1xuXG4gICAgICAgIHZhciBjaGFuZ2UgPSB0aGlzLmNoaWxkTGlzdENoYW5nZU1hcC5nZXQocGFyZW50Tm9kZSk7XG4gICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmIChjaGFuZ2UubW92ZWQpXG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlLm1vdmVkLmdldChub2RlKTtcblxuICAgICAgICBjaGFuZ2UubW92ZWQgPSBuZXcgTm9kZU1hcCgpO1xuICAgICAgICB2YXIgcGVuZGluZ01vdmVEZWNpc2lvbiA9IG5ldyBOb2RlTWFwKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gaXNNb3ZlZChub2RlKSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UubWF5YmVNb3ZlZC5oYXMobm9kZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgZGlkTW92ZSA9IGNoYW5nZS5tb3ZlZC5nZXQobm9kZSk7XG4gICAgICAgICAgICBpZiAoZGlkTW92ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBkaWRNb3ZlO1xuXG4gICAgICAgICAgICBpZiAocGVuZGluZ01vdmVEZWNpc2lvbi5oYXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBkaWRNb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVuZGluZ01vdmVEZWNpc2lvbi5zZXQobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZGlkTW92ZSA9IGdldFByZXZpb3VzKG5vZGUpICE9PSBnZXRPbGRQcmV2aW91cyhub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBlbmRpbmdNb3ZlRGVjaXNpb24uaGFzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcGVuZGluZ01vdmVEZWNpc2lvbi5kZWxldGUobm9kZSk7XG4gICAgICAgICAgICAgICAgY2hhbmdlLm1vdmVkLnNldChub2RlLCBkaWRNb3ZlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlkTW92ZSA9IGNoYW5nZS5tb3ZlZC5nZXQobm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkaWRNb3ZlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9sZFByZXZpb3VzQ2FjaGUgPSBuZXcgTm9kZU1hcCgpO1xuICAgICAgICBmdW5jdGlvbiBnZXRPbGRQcmV2aW91cyhub2RlKSB7XG4gICAgICAgICAgICB2YXIgb2xkUHJldmlvdXMgPSBvbGRQcmV2aW91c0NhY2hlLmdldChub2RlKTtcbiAgICAgICAgICAgIGlmIChvbGRQcmV2aW91cyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBvbGRQcmV2aW91cztcblxuICAgICAgICAgICAgb2xkUHJldmlvdXMgPSBjaGFuZ2Uub2xkUHJldmlvdXMuZ2V0KG5vZGUpO1xuICAgICAgICAgICAgd2hpbGUgKG9sZFByZXZpb3VzICYmIChjaGFuZ2UucmVtb3ZlZC5oYXMob2xkUHJldmlvdXMpIHx8IGlzTW92ZWQob2xkUHJldmlvdXMpKSkge1xuICAgICAgICAgICAgICAgIG9sZFByZXZpb3VzID0gZ2V0T2xkUHJldmlvdXMob2xkUHJldmlvdXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob2xkUHJldmlvdXMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBvbGRQcmV2aW91cyA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgb2xkUHJldmlvdXNDYWNoZS5zZXQobm9kZSwgb2xkUHJldmlvdXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gb2xkUHJldmlvdXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJldmlvdXNDYWNoZSA9IG5ldyBOb2RlTWFwKCk7XG4gICAgICAgIGZ1bmN0aW9uIGdldFByZXZpb3VzKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c0NhY2hlLmhhcyhub2RlKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXNDYWNoZS5nZXQobm9kZSk7XG5cbiAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgd2hpbGUgKHByZXZpb3VzICYmIChjaGFuZ2UuYWRkZWQuaGFzKHByZXZpb3VzKSB8fCBpc01vdmVkKHByZXZpb3VzKSkpXG4gICAgICAgICAgICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c1NpYmxpbmc7XG5cbiAgICAgICAgICAgIHByZXZpb3VzQ2FjaGUuc2V0KG5vZGUsIHByZXZpb3VzKTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cztcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nZS5tYXliZU1vdmVkLmtleXMoKS5mb3JFYWNoKGlzTW92ZWQpO1xuICAgICAgICByZXR1cm4gY2hhbmdlLm1vdmVkLmdldChub2RlKTtcbiAgICB9O1xuICAgIHJldHVybiBNdXRhdGlvblByb2plY3Rpb247XG59KSgpO1xuXG52YXIgU3VtbWFyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3VtbWFyeShwcm9qZWN0aW9uLCBxdWVyeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnByb2plY3Rpb24gPSBwcm9qZWN0aW9uO1xuICAgICAgICB0aGlzLmFkZGVkID0gW107XG4gICAgICAgIHRoaXMucmVtb3ZlZCA9IFtdO1xuICAgICAgICB0aGlzLnJlcGFyZW50ZWQgPSBxdWVyeS5hbGwgfHwgcXVlcnkuZWxlbWVudCA/IFtdIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnJlb3JkZXJlZCA9IHF1ZXJ5LmFsbCA/IFtdIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIHByb2plY3Rpb24uZ2V0Q2hhbmdlZCh0aGlzLCBxdWVyeS5lbGVtZW50RmlsdGVyLCBxdWVyeS5jaGFyYWN0ZXJEYXRhKTtcblxuICAgICAgICBpZiAocXVlcnkuYWxsIHx8IHF1ZXJ5LmF0dHJpYnV0ZSB8fCBxdWVyeS5hdHRyaWJ1dGVMaXN0KSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gcXVlcnkuYXR0cmlidXRlID8gW3F1ZXJ5LmF0dHJpYnV0ZV0gOiBxdWVyeS5hdHRyaWJ1dGVMaXN0O1xuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZUNoYW5nZWQgPSBwcm9qZWN0aW9uLmF0dHJpYnV0ZUNoYW5nZWROb2RlcyhmaWx0ZXIpO1xuXG4gICAgICAgICAgICBpZiAocXVlcnkuYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSBhdHRyaWJ1dGVDaGFuZ2VkW3F1ZXJ5LmF0dHJpYnV0ZV0gfHwgW107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlZCA9IGF0dHJpYnV0ZUNoYW5nZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5LmF0dHJpYnV0ZUxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkuYXR0cmlidXRlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkLmhhc093blByb3BlcnR5KGF0dHJOYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkW2F0dHJOYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlcnkuYWxsIHx8IHF1ZXJ5LmNoYXJhY3RlckRhdGEpIHtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJEYXRhQ2hhbmdlZCA9IHByb2plY3Rpb24uZ2V0Q2hhcmFjdGVyRGF0YUNoYW5nZWQoKTtcblxuICAgICAgICAgICAgaWYgKHF1ZXJ5LmNoYXJhY3RlckRhdGEpXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSBjaGFyYWN0ZXJEYXRhQ2hhbmdlZDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlckRhdGFDaGFuZ2VkID0gY2hhcmFjdGVyRGF0YUNoYW5nZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5yZW9yZGVyZWQpXG4gICAgICAgICAgICB0aGlzLmdldE9sZFByZXZpb3VzU2libGluZyA9IHByb2plY3Rpb24uZ2V0T2xkUHJldmlvdXNTaWJsaW5nLmJpbmQocHJvamVjdGlvbik7XG4gICAgfVxuICAgIFN1bW1hcnkucHJvdG90eXBlLmdldE9sZFBhcmVudE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0aW9uLmdldE9sZFBhcmVudE5vZGUobm9kZSk7XG4gICAgfTtcblxuICAgIFN1bW1hcnkucHJvdG90eXBlLmdldE9sZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChub2RlLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3Rpb24uZ2V0T2xkQXR0cmlidXRlKG5vZGUsIG5hbWUpO1xuICAgIH07XG5cbiAgICBTdW1tYXJ5LnByb3RvdHlwZS5nZXRPbGRDaGFyYWN0ZXJEYXRhID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdGlvbi5nZXRPbGRDaGFyYWN0ZXJEYXRhKG5vZGUpO1xuICAgIH07XG5cbiAgICBTdW1tYXJ5LnByb3RvdHlwZS5nZXRPbGRQcmV2aW91c1NpYmxpbmcgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0aW9uLmdldE9sZFByZXZpb3VzU2libGluZyhub2RlKTtcbiAgICB9O1xuICAgIHJldHVybiBTdW1tYXJ5O1xufSkoKTtcblxuLy8gVE9ETyhyYWZhZWx3KTogQWxsb3cgJzonIGFuZCAnLicgYXMgdmFsaWQgbmFtZSBjaGFyYWN0ZXJzLlxudmFyIHZhbGlkTmFtZUluaXRpYWxDaGFyID0gL1thLXpBLVpfXSsvO1xudmFyIHZhbGlkTmFtZU5vbkluaXRpYWxDaGFyID0gL1thLXpBLVowLTlfXFwtXSsvO1xuXG4vLyBUT0RPKHJhZmFlbHcpOiBDb25zaWRlciBhbGxvd2luZyBiYWNrc2xhc2ggaW4gdGhlIGF0dHJWYWx1ZS5cbi8vIFRPRE8ocmFmYWVsdyk6IFRoZXJlJ3MgZ290IGEgdG8gYmUgd2F5IHRvIHJlcHJlc2VudCB0aGlzIHN0YXRlIG1hY2hpbmVcbi8vIG1vcmUgY29tcGFjdGx5Pz8/XG5mdW5jdGlvbiBlc2NhcGVRdW90ZXModmFsdWUpIHtcbiAgICByZXR1cm4gJ1wiJyArIHZhbHVlLnJlcGxhY2UoL1wiLywgJ1xcXFxcXFwiJykgKyAnXCInO1xufVxuXG52YXIgUXVhbGlmaWVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWFsaWZpZXIoKSB7XG4gICAgfVxuICAgIFF1YWxpZmllci5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuYXR0clZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnMpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyVmFsdWUgPT0gb2xkVmFsdWU7XG5cbiAgICAgICAgdmFyIHRva2VucyA9IG9sZFZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdHRyVmFsdWUgPT09IHRva2Vuc1tpXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgUXVhbGlmaWVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXR0ck5hbWUgPT09ICdjbGFzcycgJiYgdGhpcy5jb250YWlucylcbiAgICAgICAgICAgIHJldHVybiAnLicgKyB0aGlzLmF0dHJWYWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5hdHRyTmFtZSA9PT0gJ2lkJyAmJiAhdGhpcy5jb250YWlucylcbiAgICAgICAgICAgIHJldHVybiAnIycgKyB0aGlzLmF0dHJWYWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5jb250YWlucylcbiAgICAgICAgICAgIHJldHVybiAnWycgKyB0aGlzLmF0dHJOYW1lICsgJ349JyArIGVzY2FwZVF1b3Rlcyh0aGlzLmF0dHJWYWx1ZSkgKyAnXSc7XG5cbiAgICAgICAgaWYgKCdhdHRyVmFsdWUnIGluIHRoaXMpXG4gICAgICAgICAgICByZXR1cm4gJ1snICsgdGhpcy5hdHRyTmFtZSArICc9JyArIGVzY2FwZVF1b3Rlcyh0aGlzLmF0dHJWYWx1ZSkgKyAnXSc7XG5cbiAgICAgICAgcmV0dXJuICdbJyArIHRoaXMuYXR0ck5hbWUgKyAnXSc7XG4gICAgfTtcbiAgICByZXR1cm4gUXVhbGlmaWVyO1xufSkoKTtcblxudmFyIFNlbGVjdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZWxlY3RvcigpIHtcbiAgICAgICAgdGhpcy51aWQgPSBTZWxlY3Rvci5uZXh0VWlkKys7XG4gICAgICAgIHRoaXMucXVhbGlmaWVycyA9IFtdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0b3IucHJvdG90eXBlLCBcImNhc2VJbnNlbnNpdGl2ZVRhZ05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhZ05hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0b3IucHJvdG90eXBlLCBcInNlbGVjdG9yU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWdOYW1lICsgdGhpcy5xdWFsaWZpZXJzLmpvaW4oJycpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcblxuICAgIFNlbGVjdG9yLnByb3RvdHlwZS5pc01hdGNoaW5nID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiBlbFtTZWxlY3Rvci5tYXRjaGVzU2VsZWN0b3JdKHRoaXMuc2VsZWN0b3JTdHJpbmcpO1xuICAgIH07XG5cbiAgICBTZWxlY3Rvci5wcm90b3R5cGUud2FzTWF0Y2hpbmcgPSBmdW5jdGlvbiAoZWwsIGNoYW5nZSwgaXNNYXRjaGluZykge1xuICAgICAgICBpZiAoIWNoYW5nZSB8fCAhY2hhbmdlLmF0dHJpYnV0ZXMpXG4gICAgICAgICAgICByZXR1cm4gaXNNYXRjaGluZztcblxuICAgICAgICB2YXIgdGFnTmFtZSA9IGNoYW5nZS5pc0Nhc2VJbnNlbnNpdGl2ZSA/IHRoaXMuY2FzZUluc2Vuc2l0aXZlVGFnTmFtZSA6IHRoaXMudGFnTmFtZTtcbiAgICAgICAgaWYgKHRhZ05hbWUgIT09ICcqJyAmJiB0YWdOYW1lICE9PSBlbC50YWdOYW1lKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHZhciBhdHRyaWJ1dGVPbGRWYWx1ZXMgPSBbXTtcbiAgICAgICAgdmFyIGFueUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1YWxpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBxdWFsaWZpZXIgPSB0aGlzLnF1YWxpZmllcnNbaV07XG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBjaGFuZ2UuZ2V0QXR0cmlidXRlT2xkVmFsdWUocXVhbGlmaWVyLmF0dHJOYW1lKTtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlcy5wdXNoKG9sZFZhbHVlKTtcbiAgICAgICAgICAgIGFueUNoYW5nZWQgPSBhbnlDaGFuZ2VkIHx8IChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW55Q2hhbmdlZClcbiAgICAgICAgICAgIHJldHVybiBpc01hdGNoaW5nO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWFsaWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcXVhbGlmaWVyID0gdGhpcy5xdWFsaWZpZXJzW2ldO1xuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gYXR0cmlidXRlT2xkVmFsdWVzW2ldO1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgb2xkVmFsdWUgPSBlbC5nZXRBdHRyaWJ1dGUocXVhbGlmaWVyLmF0dHJOYW1lKTtcbiAgICAgICAgICAgIGlmICghcXVhbGlmaWVyLm1hdGNoZXMob2xkVmFsdWUpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBTZWxlY3Rvci5wcm90b3R5cGUubWF0Y2hhYmlsaXR5Q2hhbmdlID0gZnVuY3Rpb24gKGVsLCBjaGFuZ2UpIHtcbiAgICAgICAgdmFyIGlzTWF0Y2hpbmcgPSB0aGlzLmlzTWF0Y2hpbmcoZWwpO1xuICAgICAgICBpZiAoaXNNYXRjaGluZylcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhc01hdGNoaW5nKGVsLCBjaGFuZ2UsIGlzTWF0Y2hpbmcpID8gMiAvKiBTVEFZRURfSU4gKi8gOiAxIC8qIEVOVEVSRUQgKi87XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhc01hdGNoaW5nKGVsLCBjaGFuZ2UsIGlzTWF0Y2hpbmcpID8gNSAvKiBFWElURUQgKi8gOiAwIC8qIFNUQVlFRF9PVVQgKi87XG4gICAgfTtcblxuICAgIFNlbGVjdG9yLnBhcnNlU2VsZWN0b3JzID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvcnMgPSBbXTtcbiAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3RvcjtcbiAgICAgICAgdmFyIGN1cnJlbnRRdWFsaWZpZXI7XG5cbiAgICAgICAgZnVuY3Rpb24gbmV3U2VsZWN0b3IoKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWFsaWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlbGVjdG9yLnF1YWxpZmllcnMucHVzaChjdXJyZW50UXVhbGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1YWxpZmllciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxlY3RvcnMucHVzaChjdXJyZW50U2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBuZXdRdWFsaWZpZXIoKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1YWxpZmllcilcbiAgICAgICAgICAgICAgICBjdXJyZW50U2VsZWN0b3IucXVhbGlmaWVycy5wdXNoKGN1cnJlbnRRdWFsaWZpZXIpO1xuXG4gICAgICAgICAgICBjdXJyZW50UXVhbGlmaWVyID0gbmV3IFF1YWxpZmllcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIFdISVRFU1BBQ0UgPSAvXFxzLztcbiAgICAgICAgdmFyIHZhbHVlUXVvdGVDaGFyO1xuICAgICAgICB2YXIgU1lOVEFYX0VSUk9SID0gJ0ludmFsaWQgb3IgdW5zdXBwb3J0ZWQgc2VsZWN0b3Igc3ludGF4Lic7XG5cbiAgICAgICAgdmFyIFNFTEVDVE9SID0gMTtcbiAgICAgICAgdmFyIFRBR19OQU1FID0gMjtcbiAgICAgICAgdmFyIFFVQUxJRklFUiA9IDM7XG4gICAgICAgIHZhciBRVUFMSUZJRVJfTkFNRV9GSVJTVF9DSEFSID0gNDtcbiAgICAgICAgdmFyIFFVQUxJRklFUl9OQU1FID0gNTtcbiAgICAgICAgdmFyIEFUVFJfTkFNRV9GSVJTVF9DSEFSID0gNjtcbiAgICAgICAgdmFyIEFUVFJfTkFNRSA9IDc7XG4gICAgICAgIHZhciBFUVVJVl9PUl9BVFRSX1FVQUxfRU5EID0gODtcbiAgICAgICAgdmFyIEVRVUFMID0gOTtcbiAgICAgICAgdmFyIEFUVFJfUVVBTF9FTkQgPSAxMDtcbiAgICAgICAgdmFyIFZBTFVFX0ZJUlNUX0NIQVIgPSAxMTtcbiAgICAgICAgdmFyIFZBTFVFID0gMTI7XG4gICAgICAgIHZhciBRVU9URURfVkFMVUUgPSAxMztcbiAgICAgICAgdmFyIFNFTEVDVE9SX1NFUEFSQVRPUiA9IDE0O1xuXG4gICAgICAgIHZhciBzdGF0ZSA9IFNFTEVDVE9SO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgYyA9IGlucHV0W2krK107XG5cbiAgICAgICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFNFTEVDVE9SOlxuICAgICAgICAgICAgICAgICAgICBpZiAoYy5tYXRjaCh2YWxpZE5hbWVJbml0aWFsQ2hhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NlbGVjdG9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VsZWN0b3IudGFnTmFtZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFRBR19OQU1FO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PSAnKicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NlbGVjdG9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VsZWN0b3IudGFnTmFtZSA9ICcqJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gUVVBTElGSUVSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NlbGVjdG9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdRdWFsaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZWxlY3Rvci50YWdOYW1lID0gJyonO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1YWxpZmllci5hdHRyTmFtZSA9ICdjbGFzcyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVhbGlmaWVyLmNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gUVVBTElGSUVSX05BTUVfRklSU1RfQ0hBUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2VsZWN0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1F1YWxpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlbGVjdG9yLnRhZ05hbWUgPSAnKic7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVhbGlmaWVyLmF0dHJOYW1lID0gJ2lkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gUVVBTElGSUVSX05BTUVfRklSU1RfQ0hBUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09ICdbJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2VsZWN0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1F1YWxpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlbGVjdG9yLnRhZ05hbWUgPSAnKic7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVhbGlmaWVyLmF0dHJOYW1lID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEFUVFJfTkFNRV9GSVJTVF9DSEFSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYy5tYXRjaChXSElURVNQQUNFKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFNZTlRBWF9FUlJPUik7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFRBR19OQU1FOlxuICAgICAgICAgICAgICAgICAgICBpZiAoYy5tYXRjaCh2YWxpZE5hbWVOb25Jbml0aWFsQ2hhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZWxlY3Rvci50YWdOYW1lICs9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UXVhbGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVhbGlmaWVyLmF0dHJOYW1lID0gJ2NsYXNzJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFsaWZpZXIuY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBRVUFMSUZJRVJfTkFNRV9GSVJTVF9DSEFSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdRdWFsaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFsaWZpZXIuYXR0ck5hbWUgPSAnaWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBRVUFMSUZJRVJfTkFNRV9GSVJTVF9DSEFSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT0gJ1snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdRdWFsaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFsaWZpZXIuYXR0ck5hbWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gQVRUUl9OQU1FX0ZJUlNUX0NIQVI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjLm1hdGNoKFdISVRFU1BBQ0UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNFTEVDVE9SX1NFUEFSQVRPUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNFTEVDVE9SO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihTWU5UQVhfRVJST1IpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBRVUFMSUZJRVI6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UXVhbGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVhbGlmaWVyLmF0dHJOYW1lID0gJ2NsYXNzJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFsaWZpZXIuY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBRVUFMSUZJRVJfTkFNRV9GSVJTVF9DSEFSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdRdWFsaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFsaWZpZXIuYXR0ck5hbWUgPSAnaWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBRVUFMSUZJRVJfTkFNRV9GSVJTVF9DSEFSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT0gJ1snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdRdWFsaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFsaWZpZXIuYXR0ck5hbWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gQVRUUl9OQU1FX0ZJUlNUX0NIQVI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjLm1hdGNoKFdISVRFU1BBQ0UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNFTEVDVE9SX1NFUEFSQVRPUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNFTEVDVE9SO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihTWU5UQVhfRVJST1IpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBRVUFMSUZJRVJfTkFNRV9GSVJTVF9DSEFSOlxuICAgICAgICAgICAgICAgICAgICBpZiAoYy5tYXRjaCh2YWxpZE5hbWVJbml0aWFsQ2hhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFsaWZpZXIuYXR0clZhbHVlID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gUVVBTElGSUVSX05BTUU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFNZTlRBWF9FUlJPUik7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFFVQUxJRklFUl9OQU1FOlxuICAgICAgICAgICAgICAgICAgICBpZiAoYy5tYXRjaCh2YWxpZE5hbWVOb25Jbml0aWFsQ2hhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFsaWZpZXIuYXR0clZhbHVlICs9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UXVhbGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVhbGlmaWVyLmF0dHJOYW1lID0gJ2NsYXNzJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFsaWZpZXIuY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBRVUFMSUZJRVJfTkFNRV9GSVJTVF9DSEFSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdRdWFsaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFsaWZpZXIuYXR0ck5hbWUgPSAnaWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBRVUFMSUZJRVJfTkFNRV9GSVJTVF9DSEFSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT0gJ1snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdRdWFsaWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gQVRUUl9OQU1FX0ZJUlNUX0NIQVI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjLm1hdGNoKFdISVRFU1BBQ0UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNFTEVDVE9SX1NFUEFSQVRPUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTRUxFQ1RPUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoU1lOVEFYX0VSUk9SKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgQVRUUl9OQU1FX0ZJUlNUX0NIQVI6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjLm1hdGNoKHZhbGlkTmFtZUluaXRpYWxDaGFyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1YWxpZmllci5hdHRyTmFtZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEFUVFJfTkFNRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMubWF0Y2goV0hJVEVTUEFDRSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihTWU5UQVhfRVJST1IpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBBVFRSX05BTUU6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjLm1hdGNoKHZhbGlkTmFtZU5vbkluaXRpYWxDaGFyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1YWxpZmllci5hdHRyTmFtZSArPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYy5tYXRjaChXSElURVNQQUNFKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBFUVVJVl9PUl9BVFRSX1FVQUxfRU5EO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PSAnficpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFsaWZpZXIuY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBFUVVBTDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVhbGlmaWVyLmF0dHJWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRV9GSVJTVF9DSEFSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PSAnXScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gUVVBTElGSUVSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihTWU5UQVhfRVJST1IpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBFUVVJVl9PUl9BVFRSX1FVQUxfRU5EOlxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PSAnficpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFsaWZpZXIuY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBFUVVBTDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVhbGlmaWVyLmF0dHJWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRV9GSVJTVF9DSEFSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PSAnXScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gUVVBTElGSUVSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYy5tYXRjaChXSElURVNQQUNFKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFNZTlRBWF9FUlJPUik7XG5cbiAgICAgICAgICAgICAgICBjYXNlIEVRVUFMOlxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PSAnPScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFsaWZpZXIuYXR0clZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFX0ZJUlNUX0NIQVI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFNZTlRBWF9FUlJPUik7XG5cbiAgICAgICAgICAgICAgICBjYXNlIEFUVFJfUVVBTF9FTkQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09ICddJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBRVUFMSUZJRVI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjLm1hdGNoKFdISVRFU1BBQ0UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoU1lOVEFYX0VSUk9SKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgVkFMVUVfRklSU1RfQ0hBUjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMubWF0Y2goV0hJVEVTUEFDRSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PSAnXCInIHx8IGMgPT0gXCInXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUXVvdGVDaGFyID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gUVVPVEVEX1ZBTFVFO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVhbGlmaWVyLmF0dHJWYWx1ZSArPSBjO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgVkFMVUU6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjLm1hdGNoKFdISVRFU1BBQ0UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEFUVFJfUVVBTF9FTkQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PSAnXScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gUVVBTElGSUVSO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT0gXCInXCIgfHwgYyA9PSAnXCInKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoU1lOVEFYX0VSUk9SKTtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVhbGlmaWVyLmF0dHJWYWx1ZSArPSBjO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgUVVPVEVEX1ZBTFVFOlxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PSB2YWx1ZVF1b3RlQ2hhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBBVFRSX1FVQUxfRU5EO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVhbGlmaWVyLmF0dHJWYWx1ZSArPSBjO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgU0VMRUNUT1JfU0VQQVJBVE9SOlxuICAgICAgICAgICAgICAgICAgICBpZiAoYy5tYXRjaChXSElURVNQQUNFKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTRUxFQ1RPUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoU1lOVEFYX0VSUk9SKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgU0VMRUNUT1I6XG4gICAgICAgICAgICBjYXNlIFRBR19OQU1FOlxuICAgICAgICAgICAgY2FzZSBRVUFMSUZJRVI6XG4gICAgICAgICAgICBjYXNlIFFVQUxJRklFUl9OQU1FOlxuICAgICAgICAgICAgY2FzZSBTRUxFQ1RPUl9TRVBBUkFUT1I6XG4gICAgICAgICAgICAgICAgLy8gVmFsaWQgZW5kIHN0YXRlcy5cbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RvcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihTWU5UQVhfRVJST1IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWxlY3RvcnMubGVuZ3RoKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoU1lOVEFYX0VSUk9SKTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0b3JzO1xuICAgIH07XG4gICAgU2VsZWN0b3IubmV4dFVpZCA9IDE7XG4gICAgU2VsZWN0b3IubWF0Y2hlc1NlbGVjdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Wyd3ZWJraXRNYXRjaGVzU2VsZWN0b3InXSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHJldHVybiAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJztcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Wydtb3pNYXRjaGVzU2VsZWN0b3InXSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHJldHVybiAnbW96TWF0Y2hlc1NlbGVjdG9yJztcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Wydtc01hdGNoZXNTZWxlY3RvciddID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgcmV0dXJuICdtc01hdGNoZXNTZWxlY3Rvcic7XG5cbiAgICAgICAgcmV0dXJuICdtYXRjaGVzU2VsZWN0b3InO1xuICAgIH0pKCk7XG4gICAgcmV0dXJuIFNlbGVjdG9yO1xufSkoKTtcblxudmFyIGF0dHJpYnV0ZUZpbHRlclBhdHRlcm4gPSAvXihbYS16QS1aOl9dK1thLXpBLVowLTlfXFwtOlxcLl0qKSQvO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpIHtcbiAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZSAhPSAnc3RyaW5nJylcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgcmVxdWVzdCBvcGlvbi4gYXR0cmlidXRlIG11c3QgYmUgYSBub24temVybyBsZW5ndGggc3RyaW5nLicpO1xuXG4gICAgYXR0cmlidXRlID0gYXR0cmlidXRlLnRyaW0oKTtcblxuICAgIGlmICghYXR0cmlidXRlKVxuICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCByZXF1ZXN0IG9waW9uLiBhdHRyaWJ1dGUgbXVzdCBiZSBhIG5vbi16ZXJvIGxlbmd0aCBzdHJpbmcuJyk7XG5cbiAgICBpZiAoIWF0dHJpYnV0ZS5tYXRjaChhdHRyaWJ1dGVGaWx0ZXJQYXR0ZXJuKSlcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgcmVxdWVzdCBvcHRpb24uIGludmFsaWQgYXR0cmlidXRlIG5hbWU6ICcgKyBhdHRyaWJ1dGUpO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFbGVtZW50QXR0cmlidXRlcyhhdHRyaWJzKSB7XG4gICAgaWYgKCFhdHRyaWJzLnRyaW0oKS5sZW5ndGgpXG4gICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIHJlcXVlc3Qgb3B0aW9uOiBlbGVtZW50QXR0cmlidXRlcyBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGF0dHJpYnV0ZS4nKTtcblxuICAgIHZhciBsb3dlckF0dHJpYnV0ZXMgPSB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHt9O1xuXG4gICAgdmFyIHRva2VucyA9IGF0dHJpYnMuc3BsaXQoL1xccysvKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmFtZSA9IHRva2Vuc1tpXTtcbiAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgdmFyIG5hbWUgPSB2YWxpZGF0ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgdmFyIG5hbWVMb3dlciA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGxvd2VyQXR0cmlidXRlc1tuYW1lTG93ZXJdKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgcmVxdWVzdCBvcHRpb246IG9ic2VydmluZyBtdWx0aXBsZSBjYXNlIHZhcmlhdGlvbnMgb2YgdGhlIHNhbWUgYXR0cmlidXRlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG5cbiAgICAgICAgYXR0cmlidXRlc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIGxvd2VyQXR0cmlidXRlc1tuYW1lTG93ZXJdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cmlidXRlcyk7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRGaWx0ZXJBdHRyaWJ1dGVzKHNlbGVjdG9ycykge1xuICAgIHZhciBhdHRyaWJ1dGVzID0ge307XG5cbiAgICBzZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgc2VsZWN0b3IucXVhbGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChxdWFsaWZpZXIpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNbcXVhbGlmaWVyLmF0dHJOYW1lXSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpO1xufVxuXG52YXIgTXV0YXRpb25TdW1tYXJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNdXRhdGlvblN1bW1hcnkob3B0cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBNdXRhdGlvblN1bW1hcnkudmFsaWRhdGVPcHRpb25zKG9wdHMpO1xuICAgICAgICB0aGlzLm9ic2VydmVyT3B0aW9ucyA9IE11dGF0aW9uU3VtbWFyeS5jcmVhdGVPYnNlcnZlck9wdGlvbnModGhpcy5vcHRpb25zLnF1ZXJpZXMpO1xuICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLm9wdGlvbnMucm9vdE5vZGU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSB0aGlzLm9wdGlvbnMuY2FsbGJhY2s7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50RmlsdGVyID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgdGhpcy5vcHRpb25zLnF1ZXJpZXMubWFwKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5LmVsZW1lbnRGaWx0ZXIgPyBxdWVyeS5lbGVtZW50RmlsdGVyIDogW107XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRGaWx0ZXIubGVuZ3RoKVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50RmlsdGVyID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMuY2FsY1Jlb3JkZXJlZCA9IHRoaXMub3B0aW9ucy5xdWVyaWVzLnNvbWUoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gcXVlcnkuYWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnF1ZXJ5VmFsaWRhdG9ycyA9IFtdOyAvLyBUT0RPKHJhZmFlbHcpOiBTaG91bGRuJ3QgYWx3YXlzIGRlZmluZSB0aGlzLlxuICAgICAgICBpZiAoTXV0YXRpb25TdW1tYXJ5LmNyZWF0ZVF1ZXJ5VmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5VmFsaWRhdG9ycyA9IHRoaXMub3B0aW9ucy5xdWVyaWVzLm1hcChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTXV0YXRpb25TdW1tYXJ5LmNyZWF0ZVF1ZXJ5VmFsaWRhdG9yKF90aGlzLnJvb3QsIHF1ZXJ5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyQ3RvcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICBfdGhpcy5vYnNlcnZlckNhbGxiYWNrKG11dGF0aW9ucyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgfVxuICAgIE11dGF0aW9uU3VtbWFyeS5jcmVhdGVPYnNlcnZlck9wdGlvbnMgPSBmdW5jdGlvbiAocXVlcmllcykge1xuICAgICAgICB2YXIgb2JzZXJ2ZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBhdHRyaWJ1dGVGaWx0ZXI7XG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlck9wdGlvbnMuYXR0cmlidXRlcyAmJiAhYXR0cmlidXRlRmlsdGVyKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgb2JzZXJ2ZXJPcHRpb25zLmF0dHJpYnV0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgb2JzZXJ2ZXJPcHRpb25zLmF0dHJpYnV0ZU9sZFZhbHVlID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gb2JzZXJ2ZSBhbGwuXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIHRvIG9ic2VydmVkLlxuICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyID0gYXR0cmlidXRlRmlsdGVyIHx8IHt9O1xuICAgICAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXJbYXR0cmlidXRlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyW2F0dHJpYnV0ZS50b0xvd2VyQ2FzZSgpXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeS5jaGFyYWN0ZXJEYXRhKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXJPcHRpb25zLmNoYXJhY3RlckRhdGEgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyT3B0aW9ucy5jaGFyYWN0ZXJEYXRhT2xkVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHF1ZXJ5LmFsbCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVBdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXJPcHRpb25zLmNoYXJhY3RlckRhdGEgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyT3B0aW9ucy5jaGFyYWN0ZXJEYXRhT2xkVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHF1ZXJ5LmF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVBdHRyaWJ1dGVzKFtxdWVyeS5hdHRyaWJ1dGUudHJpbSgpXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlcyA9IGVsZW1lbnRGaWx0ZXJBdHRyaWJ1dGVzKHF1ZXJ5LmVsZW1lbnRGaWx0ZXIpLmNvbmNhdChxdWVyeS5hdHRyaWJ1dGVMaXN0IHx8IFtdKTtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICBvYnNlcnZlQXR0cmlidXRlcyhhdHRyaWJ1dGVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGF0dHJpYnV0ZUZpbHRlcilcbiAgICAgICAgICAgIG9ic2VydmVyT3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVGaWx0ZXIpO1xuXG4gICAgICAgIHJldHVybiBvYnNlcnZlck9wdGlvbnM7XG4gICAgfTtcblxuICAgIE11dGF0aW9uU3VtbWFyeS52YWxpZGF0ZU9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gTXV0YXRpb25TdW1tYXJ5Lm9wdGlvbktleXMpKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIG9wdGlvbjogJyArIHByb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgb3B0aW9uczogY2FsbGJhY2sgaXMgcmVxdWlyZWQgYW5kIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gICAgICAgIGlmICghb3B0aW9ucy5xdWVyaWVzIHx8ICFvcHRpb25zLnF1ZXJpZXMubGVuZ3RoKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgb3B0aW9uczogcXVlcmllcyBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHF1ZXJ5IHJlcXVlc3Qgb2JqZWN0LicpO1xuXG4gICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6IG9wdGlvbnMuY2FsbGJhY2ssXG4gICAgICAgICAgICByb290Tm9kZTogb3B0aW9ucy5yb290Tm9kZSB8fCBkb2N1bWVudCxcbiAgICAgICAgICAgIG9ic2VydmVPd25DaGFuZ2VzOiAhIW9wdGlvbnMub2JzZXJ2ZU93bkNoYW5nZXMsXG4gICAgICAgICAgICBvbGRQcmV2aW91c1NpYmxpbmc6ICEhb3B0aW9ucy5vbGRQcmV2aW91c1NpYmxpbmcsXG4gICAgICAgICAgICBxdWVyaWVzOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5xdWVyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IG9wdGlvbnMucXVlcmllc1tpXTtcblxuICAgICAgICAgICAgLy8gYWxsXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5hbGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocmVxdWVzdCkubGVuZ3RoID4gMSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgcmVxdWVzdCBvcHRpb24uIGFsbCBoYXMgbm8gb3B0aW9ucy4nKTtcblxuICAgICAgICAgICAgICAgIG9wdHMucXVlcmllcy5wdXNoKHsgYWxsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhdHRyaWJ1dGVcbiAgICAgICAgICAgIGlmICgnYXR0cmlidXRlJyBpbiByZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0ge1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IHZhbGlkYXRlQXR0cmlidXRlKHJlcXVlc3QuYXR0cmlidXRlKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBxdWVyeS5lbGVtZW50RmlsdGVyID0gU2VsZWN0b3IucGFyc2VTZWxlY3RvcnMoJypbJyArIHF1ZXJ5LmF0dHJpYnV0ZSArICddJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocmVxdWVzdCkubGVuZ3RoID4gMSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgcmVxdWVzdCBvcHRpb24uIGF0dHJpYnV0ZSBoYXMgbm8gb3B0aW9ucy4nKTtcblxuICAgICAgICAgICAgICAgIG9wdHMucXVlcmllcy5wdXNoKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZWxlbWVudFxuICAgICAgICAgICAgaWYgKCdlbGVtZW50JyBpbiByZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3RPcHRpb25Db3VudCA9IE9iamVjdC5rZXlzKHJlcXVlc3QpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHJlcXVlc3QuZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEZpbHRlcjogU2VsZWN0b3IucGFyc2VTZWxlY3RvcnMocmVxdWVzdC5lbGVtZW50KVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5oYXNPd25Qcm9wZXJ0eSgnZWxlbWVudEF0dHJpYnV0ZXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeS5hdHRyaWJ1dGVMaXN0ID0gdmFsaWRhdGVFbGVtZW50QXR0cmlidXRlcyhyZXF1ZXN0LmVsZW1lbnRBdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdE9wdGlvbkNvdW50LS07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RPcHRpb25Db3VudCA+IDEpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIHJlcXVlc3Qgb3B0aW9uLiBlbGVtZW50IG9ubHkgYWxsb3dzIGVsZW1lbnRBdHRyaWJ1dGVzIG9wdGlvbi4nKTtcblxuICAgICAgICAgICAgICAgIG9wdHMucXVlcmllcy5wdXNoKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyRGF0YVxuICAgICAgICAgICAgaWYgKHJlcXVlc3QuY2hhcmFjdGVyRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhyZXF1ZXN0KS5sZW5ndGggPiAxKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCByZXF1ZXN0IG9wdGlvbi4gY2hhcmFjdGVyRGF0YSBoYXMgbm8gb3B0aW9ucy4nKTtcblxuICAgICAgICAgICAgICAgIG9wdHMucXVlcmllcy5wdXNoKHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgcmVxdWVzdCBvcHRpb24uIFVua25vd24gcXVlcnkgcmVxdWVzdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRzO1xuICAgIH07XG5cbiAgICBNdXRhdGlvblN1bW1hcnkucHJvdG90eXBlLmNyZWF0ZVN1bW1hcmllcyA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgaWYgKCFtdXRhdGlvbnMgfHwgIW11dGF0aW9ucy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gW107XG5cbiAgICAgICAgdmFyIHByb2plY3Rpb24gPSBuZXcgTXV0YXRpb25Qcm9qZWN0aW9uKHRoaXMucm9vdCwgbXV0YXRpb25zLCB0aGlzLmVsZW1lbnRGaWx0ZXIsIHRoaXMuY2FsY1Jlb3JkZXJlZCwgdGhpcy5vcHRpb25zLm9sZFByZXZpb3VzU2libGluZyk7XG5cbiAgICAgICAgdmFyIHN1bW1hcmllcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5xdWVyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW1tYXJpZXMucHVzaChuZXcgU3VtbWFyeShwcm9qZWN0aW9uLCB0aGlzLm9wdGlvbnMucXVlcmllc1tpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1bW1hcmllcztcbiAgICB9O1xuXG4gICAgTXV0YXRpb25TdW1tYXJ5LnByb3RvdHlwZS5jaGVja3BvaW50UXVlcnlWYWxpZGF0b3JzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXJ5VmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnJlY29yZFByZXZpb3VzU3RhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIE11dGF0aW9uU3VtbWFyeS5wcm90b3R5cGUucnVuUXVlcnlWYWxpZGF0b3JzID0gZnVuY3Rpb24gKHN1bW1hcmllcykge1xuICAgICAgICB0aGlzLnF1ZXJ5VmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKVxuICAgICAgICAgICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZShzdW1tYXJpZXNbaW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIE11dGF0aW9uU3VtbWFyeS5wcm90b3R5cGUuY2hhbmdlc1RvUmVwb3J0ID0gZnVuY3Rpb24gKHN1bW1hcmllcykge1xuICAgICAgICByZXR1cm4gc3VtbWFyaWVzLnNvbWUoZnVuY3Rpb24gKHN1bW1hcnkpIHtcbiAgICAgICAgICAgIHZhciBzdW1tYXJ5UHJvcHMgPSBbXG4gICAgICAgICAgICAgICAgJ2FkZGVkJywgJ3JlbW92ZWQnLCAncmVvcmRlcmVkJywgJ3JlcGFyZW50ZWQnLFxuICAgICAgICAgICAgICAgICd2YWx1ZUNoYW5nZWQnLCAnY2hhcmFjdGVyRGF0YUNoYW5nZWQnXTtcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5UHJvcHMuc29tZShmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdW1tYXJ5W3Byb3BdICYmIHN1bW1hcnlbcHJvcF0ubGVuZ3RoO1xuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmF0dHJpYnV0ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0ck5hbWVzID0gT2JqZWN0LmtleXMoc3VtbWFyeS5hdHRyaWJ1dGVDaGFuZ2VkKTtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cnNDaGFuZ2VkID0gYXR0ck5hbWVzLnNvbWUoZnVuY3Rpb24gKGF0dHJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXN1bW1hcnkuYXR0cmlidXRlQ2hhbmdlZFthdHRyTmFtZV0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChhdHRyc0NoYW5nZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgTXV0YXRpb25TdW1tYXJ5LnByb3RvdHlwZS5vYnNlcnZlckNhbGxiYWNrID0gZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5vYnNlcnZlT3duQ2hhbmdlcylcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgIHZhciBzdW1tYXJpZXMgPSB0aGlzLmNyZWF0ZVN1bW1hcmllcyhtdXRhdGlvbnMpO1xuICAgICAgICB0aGlzLnJ1blF1ZXJ5VmFsaWRhdG9ycyhzdW1tYXJpZXMpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub2JzZXJ2ZU93bkNoYW5nZXMpXG4gICAgICAgICAgICB0aGlzLmNoZWNrcG9pbnRRdWVyeVZhbGlkYXRvcnMoKTtcblxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VzVG9SZXBvcnQoc3VtbWFyaWVzKSlcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soc3VtbWFyaWVzKTtcblxuICAgICAgICAvLyBkaXNjb25uZWN0KCkgbWF5IGhhdmUgYmVlbiBjYWxsZWQgZHVyaW5nIHRoZSBjYWxsYmFjay5cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMub2JzZXJ2ZU93bkNoYW5nZXMgJiYgdGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2twb2ludFF1ZXJ5VmFsaWRhdG9ycygpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMucm9vdCwgdGhpcy5vYnNlcnZlck9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIE11dGF0aW9uU3VtbWFyeS5wcm90b3R5cGUucmVjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignQWxyZWFkeSBjb25uZWN0ZWQnKTtcblxuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5yb290LCB0aGlzLm9ic2VydmVyT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGVja3BvaW50UXVlcnlWYWxpZGF0b3JzKCk7XG4gICAgfTtcblxuICAgIE11dGF0aW9uU3VtbWFyeS5wcm90b3R5cGUudGFrZVN1bW1hcmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdOb3QgY29ubmVjdGVkJyk7XG5cbiAgICAgICAgdmFyIHN1bW1hcmllcyA9IHRoaXMuY3JlYXRlU3VtbWFyaWVzKHRoaXMub2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZXNUb1JlcG9ydChzdW1tYXJpZXMpID8gc3VtbWFyaWVzIDogdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICBNdXRhdGlvblN1bW1hcnkucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdW1tYXJpZXMgPSB0aGlzLnRha2VTdW1tYXJpZXMoKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBzdW1tYXJpZXM7XG4gICAgfTtcbiAgICBNdXRhdGlvblN1bW1hcnkuTm9kZU1hcCA9IE5vZGVNYXA7XG4gICAgTXV0YXRpb25TdW1tYXJ5LnBhcnNlRWxlbWVudEZpbHRlciA9IFNlbGVjdG9yLnBhcnNlU2VsZWN0b3JzO1xuXG4gICAgTXV0YXRpb25TdW1tYXJ5Lm9wdGlvbktleXMgPSB7XG4gICAgICAgICdjYWxsYmFjayc6IHRydWUsXG4gICAgICAgICdxdWVyaWVzJzogdHJ1ZSxcbiAgICAgICAgJ3Jvb3ROb2RlJzogdHJ1ZSxcbiAgICAgICAgJ29sZFByZXZpb3VzU2libGluZyc6IHRydWUsXG4gICAgICAgICdvYnNlcnZlT3duQ2hhbmdlcyc6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBNdXRhdGlvblN1bW1hcnk7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE11dGF0aW9uU3VtbWFyeSJdfQ==
