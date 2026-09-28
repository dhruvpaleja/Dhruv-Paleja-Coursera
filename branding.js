// Route only the product's repository link; activation/provider flows remain upstream.
'use strict';
document.addEventListener('click', event => {
  if (!(event.target instanceof Element) || !event.target.closest('#starRepoBtn')) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  chrome.tabs.create({ url: 'https://github.com/dhruvpaleja/Dhruv-Paleja-Coursera' });
}, true);
