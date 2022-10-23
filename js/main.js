// const sizeItemEl = document.querySelectorAll('.staff-size-item');

// sizeItemEl.forEach(itemEl => {
//   item.addEventListener('click', (e) =>{
//         list.forEach(el=>{ el.classList.remove('active') });
//     item.classList.add('active');
// });
const sizeItemEl = document.querySelectorAll('.staff-size-item');

sizeItemEl.forEach(item => {
  item.addEventListener('click', e => {
    sizeItemEl.forEach(el => {
      el.classList.remove('staff-size-item--active');
    });
    item.classList.toggle('staff-size-item--active');
  });
});
