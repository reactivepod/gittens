import 'babel/polyfill';
import gittenify from './content/gittenify';

chrome.storage.local.get(null, gittenify);
