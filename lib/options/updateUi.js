import { themeSelect, replaceTextInput } from './elements';

export function updateTheme() {
  const theme = themeSelect.options[theme.selectedIndex].value;

  chrome.storage.local.set({theme});
}

export function updateReplaceText() {
  const replaceText = !!replaceTextInput.checked;

  chrome.storage.local.set({replaceText});
}
