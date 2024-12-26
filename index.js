let time = document.querySelector('.time');
let bg = document.querySelector('.wrapper');
let hero_bg = document.querySelector('.hero');
let btn = document.querySelector('.btn');
let del = document.querySelector('.samovnyshenie');
let img = document.querySelector('.img')
let time_bg = document.querySelector('.time-box');

btn.addEventListener('click', funTic);
let time_ = setInterval(ticTac, 1000);
function ticTac() {
  time.textContent = moment().format('HH:mm:ss');
}
function funTic() {
  clearInterval(time_);
  time_bg.style.background = '#fff';
  time.style.color = '#000'
  img.style.display = 'none';
  hero_bg.style.backgroundImage = 'url(img/bg.png)';
  bg.style.backgroundColor = '#fff'
  del.style.display = 'none';
}
