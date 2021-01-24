import data from './img.js';

function _(e) {
  return document.getElementById(e);
}

let count = 0;

_('mainImg').setAttribute('src', data[count].path);
_('imgTitle').innerText = data[count].name;

_('prev').addEventListener('click', () => {
    let imgBefore = _('mainImg').src;
    _('mainImg').setAttribute('src', imgBefore);
    _('mainImg').classList.toggle('transparent');
    setTimeout (function() {
      if (count === 0) {
        count = data.length - 1;
      } else {
        count -= 1;
      }
      _('mainImg').classList.toggle('transparent');
      _('mainImg').setAttribute('src', data[count].path);
      _('imgTitle').innerText = data[count].name;
    }, 300);
  });

_('next').addEventListener('click', () => {
    let imgBefore = _('mainImg').src;
    _('mainImg').setAttribute('src', imgBefore);
    _('mainImg').classList.toggle('transparent');
    setTimeout (function() {
      if (count >= data.length - 1) {
        count = 0;
      } else {
        count += 1;
      }
      _('mainImg').classList.toggle('transparent');
      _('mainImg').setAttribute('src', data[count].path);
      _('imgTitle').innerText = data[count].name;
    }, 300);
  });


const myDay = new Date();
const myYear = myDay.getFullYear();
_('copy').innerText = (myYear - 2) + '-' + (myYear + 2);
