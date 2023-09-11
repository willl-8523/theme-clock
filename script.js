const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Fev',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

toggleEl.addEventListener('click', (e) => {
  const html = document.querySelector('html');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light mode';
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  // Give hours between 0 -> 12
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM'

  /**
   * hourEl.style.transform = `translate(-50%, -100%) 
   * rotate(${scale(hoursForClock, 0, 11, 0, 360, )}deg)`;
   */

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock, 12, 360)}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 60, 360)}deg)`;
    
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 60, 360)}deg)`;
    
  timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span>${date}</span>`
}

/**
 * StarkOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-number
 * 
 * const scale = (num, in_min, in_max, out_min, out_max) => {
 * return ((num - in_min) * (out_max - out_min) / (in_max -
 * in_min) + out_min);
 * };

 */

const scale = (num, maxHour, maxDeg) => {
  return (maxDeg * num) / maxHour;
};

setTime();

setInterval(setTime, 1000);
