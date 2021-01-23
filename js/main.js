import data from './img.js';

function _(e) {
  return document.getElementById(e);
}

let count = 0;

_('mainImg').setAttribute('src', data[count].path);
_('imgTitle').innerText = data[count].name;

_('prev').addEventListener('click', () => {
    if (count === 0) {
      count = data.length - 1;
    } else {
      count -= 1;
    }
    _('mainImg').setAttribute('src', data[count].path);
    _('imgTitle').innerText = data[count].name;
  });

_('next').addEventListener('click', () => {
    if (count >= data.length - 1) {
      count = 0;
    } else {
      count += 1;
    }
    _('mainImg').setAttribute('src', data[count].path);
    _('imgTitle').innerText = data[count].name;
  });


const myDay = new Date();
const myYear = myDay.getFullYear();
_('copy').innerText = (myYear - 2) + '-' + (myYear + 2);
