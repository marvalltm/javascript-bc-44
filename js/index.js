'use strict';
/**
 *  ================ Example 1 ==================
 * Поширення подій. Спливання подій. stopPropogation
 * Event.target ( на якому відбулась подія )
 * Event.currentTarget ( на якому знаходиться лістенер )
 * параметри AddEventListeners(event, callback, options)
 */

// const section = document.querySelector('.section');
// const div = document.querySelector('.div');
// const p = document.querySelector('.description');
// const button = document.querySelector('.action');

// // console.log(window);
// const eventHandler = function (event) {
//   event.stopPropagation();
//   // event.stopImmediatePropagation();
//   // if (event.target.nodeName === 'BUTTON') {
//   //   event.asome = 'sdmfhsdjkfhsdjkfhsdjkfhjksdhfjksdhjkdshjkf';
//   // }
//   console.group('Event: ', event);
//   console.log('CurrentTarget: ', event.currentTarget);
//   console.log('Target: ', event.target);
//   console.groupEnd();
//   // console.log(event.currentTarget.nodeName);
// };

// // const eventHandler = function (event) {
// //   (event.target === event.currentTarget || event.target === button) && console.log(event);
// // };

// section.addEventListener('click', eventHandler);
// div.addEventListener('click', eventHandler);
// p.addEventListener('click', eventHandler);
// button.addEventListener('click', eventHandler);

/*
 * параметри addEventListener(event, callback, options)
 *
 */

// passive
// const form = document.querySelector('.form');
// const eventHandler = function (event) {
//   event.preventDefault();
//   console.log(event);
// };

// form.addEventListener('submit', eventHandler, {
//   // capture: true,
//   // once: true,
//   passive: true,
// });

// const section = document.querySelector('.section');
// const div = document.querySelector('.div');
// const p = document.querySelector('.description');
// const button = document.querySelector('.action');

// const eventHandler = function (event) {
//   console.log(event.currentTarget.nodeName);
// };

// section.addEventListener('click', eventHandler, {
//   // capture: true,
//   // once: true,
//   // passive: true,
// });
// div.addEventListener('click', eventHandler, {
//   // capture: true,
//   // once: true,
//   // passive: true,
// });
// p.addEventListener('click', eventHandler, {
//   // capture: true,
//   // once: true,
//   // passive: true,
// });
// button.addEventListener('click', eventHandler, {
//   // capture: true,
//   // once: true,
//   // passive: true,
// });

/**
 *  ================ Example 2 ==================
 * Делегування подій
 * Написати генерацію календаря.
 * Написати делегування подій для календаря, таким чином, щом при клікі на день, він позначався як віделиний.
 * Якщо ми будему клікати на день тиждня, то будуть виділятись всі дні цього тижня.
 */

// console.log(moment());

const makeCalendarObjects = function () {
  const startOfMonth = moment().startOf('month'); // дата початку місяця
  const daysOfMonth = moment().daysInMonth(); //кількысть днів в місяці
  let daysCount; // кількість ячеєк для календаря.
  if (daysOfMonth / 7 > 4) {
    if (startOfMonth.days() === 0 || startOfMonth.days() === 6) {
      daysCount = 42;
    } else {
      daysCount = 35;
    }
  } else {
    if (startOfMonth.days() === 1) {
      daysCount = 28;
    } else {
      daysCount = 35;
    }
  }
  const weeks = [];
  let week = [];
  for (let i = 1; i <= daysCount; i += 1) {
    const day = startOfMonth.days() === 0 ? 7 : startOfMonth.days();
    if (day > i) {
      week.push({ index: i, day: null });
    } else {
      week.push({
        index: i,
        day: startOfMonth.month() === moment().month() ? startOfMonth.date() : null,
      });
      startOfMonth.add(1, 'd');
    }
    if (week.length === 7) {
      weeks.push([...week]);
      week = [];
    }
  }
  console.log(weeks);
  return weeks;
};

const makeCalendarMarkUp = function (calendarObjects) {
  let calendar = calendarObjects
    .map(week => {
      return `<tr>\n
        ${week
          .map(({ day }, index) => {
            return `
            <td
              class="table-day"
              data-day="${day ? day : ''}"
              data-week="${index + 1}" >${day ? day : ''}
            </td>\n`;
          })
          .join('')}
      </tr>\n`;
    })
    .join('');
  return `
    <table>
        <thead>
          <tr>
              <th class="table-day" data-week="1" data-main="true">Пнд</th>
              <th class="table-day" data-week="2" data-main="true">Вт</th>
              <th class="table-day" data-week="3" data-main="true">Ср</th>
              <th class="table-day" data-week="4" data-main="true">Чт</th>
              <th class="table-day" data-week="5" data-main="true">Пт</th>
              <th class="table-day" data-week="6" data-main="true">Сбт</th>
              <th class="table-day" data-week="7" data-main="true">Нд</th>
          </tr>
        </thead>
        <tbody>
          ${calendar}
        </tbody>
    </table>
    `;
};

const root = document.querySelector('.calendar'); // DIV.calendar

// const objects = makeCalendarObjects();
// const markup = makeCalendarMarkUp(objects);
// root.insertAdjacentHTML('afterbegin', markup);

root.insertAdjacentHTML('afterbegin', makeCalendarMarkUp(makeCalendarObjects()));

const handler = event => {
  const tds = document.querySelectorAll('[data-day]');
  console.log(tds);
  if (event.target.dataset.main) {
    tds.forEach(item => {
      if (item.dataset.week === event.target.dataset.week) {
        if (item.dataset.day) {
          item.classList.add('selected');
        }
      } else {
        item.classList.remove('selected');
      }
    });
  } else if (event.target.dataset.day) {
    tds.forEach(item => {
      if (item === event.target) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    });
  }
};

root.addEventListener('click', handler);
