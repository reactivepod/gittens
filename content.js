import 'babel/polyfill';
import gittenify from './lib/content/gittenify';

chrome.storage.local.get(null, gittenify);
