import { default as items } from './index-items.js';


// const itemEl = ({ id, title, link, color, price, img }) => `<li class="staff-item" data-modal-open data-target="#@${id}{" >
//               <img src="${img}" alt="" class="staff-img" />
//             <button
//               type="button"
//               class="staff-btn"
//               data-sb-id-or-vendor-code="${id}"
//               data-sb-product-name="${title}"
//               data-sb-product-price="${price}"
//               data-sb-product-quantity="1"
//               data-sb-product-img="${img}"
//             >
//               <span class="staff-btn-text">Додати до Кошику</span>
//             </button>
//             <div href="" class="staff-link">
//               <h3 class="staff-item-title">${title}</h3>

//               <ul class="staff-size-list product__size">
//                 <li
//                   class="staff-size-item product__size-element"
//                   data-sb-curent-id-or-vendor-code="${id}-XS"
//                   data-sb-curent-size="XS"
//                 >
//                   XS
//                 </li>

//                 <li
//                   class="staff-size-item product__size-element"
//                   data-sb-curent-id-or-vendor-code="${id}-S"
//                   data-sb-curent-size="S"
//                 >
//                   S
//                 </li>

//                 <li
//                   class="staff-size-item product__size-element"
//                   data-sb-curent-id-or-vendor-code="${id}-M"
//                   data-sb-curent-size="M"
//                 >
//                   M
//                 </li>

//                 <li
//                   class="staff-size-item product__size-element"
//                   data-sb-curent-id-or-vendor-code="${id}-L"
//                   data-sb-curent-size="L"
//                 >
//                   L
//                 </li>

//                 <li
//                   class="staff-size-item product__size-element"
//                   data-sb-curent-id-or-vendor-code="${id}-XL"
//                   data-sb-curent-size="XL"
//                 >
//                   XL
//                 </li>
//               </ul>
//               <!-- LIST 2 -->
//               <ul class="staff-color-list product__size">
//                 ${color}
//               </ul>

//               <div class="product__quantity"></div>
//               <span class="staff-item-bottom-text">${title}</span>
//               <span class="staff-ordinary-price product__price-number">${price}</span>
//               <a href="${link}" class="staff-foto">Фото</a>
//             </div>
//           </li>
//           <div class="backdrop is-hidden" data-modal data-card="${id}">
//   <div class="swiper">
//   <!-- Additional required wrapper -->
//   <div class="swiper-wrapper">
//     <!-- Slides -->
//     <div class="swiper-slide">
//     <li class="staff-item">
//               <img src="${img}" alt="" class="staff-img" />
//             <button
//               type="button"
//               class="staff-btn"
//               data-sb-id-or-vendor-code="${id}"
//               data-sb-product-name="${title}"
//               data-sb-product-price="${price}"
//               data-sb-product-quantity="1"
//               data-sb-product-img="${img}"
//             >
//               <span class="staff-btn-text">Додати до Кошику</span>
//             </button>
//             <div href="" class="staff-link">
//               <h3 class="staff-item-title">${title}</h3>

//               <ul class="staff-size-list product__size">
//                 <li
//                   class="staff-size-item product__size-element"
//                   data-sb-curent-id-or-vendor-code="${id}-XS"
//                   data-sb-curent-size="XS"
//                 >
//                   XS
//                 </li>

//                 <li
//                   class="staff-size-item product__size-element"
//                   data-sb-curent-id-or-vendor-code="${id}-S"
//                   data-sb-curent-size="S"
//                 >
//                   S
//                 </li>

//                 <li
//                   class="staff-size-item product__size-element"
//                   data-sb-curent-id-or-vendor-code="${id}-M"
//                   data-sb-curent-size="M"
//                 >
//                   M
//                 </li>

//                 <li
//                   class="staff-size-item product__size-element"
//                   data-sb-curent-id-or-vendor-code="${id}-L"
//                   data-sb-curent-size="L"
//                 >
//                   L
//                 </li>

//                 <li
//                   class="staff-size-item product__size-element"
//                   data-sb-curent-id-or-vendor-code="${id}-XL"
//                   data-sb-curent-size="XL"
//                 >
//                   XL
//                 </li>
//               </ul>
//               <!-- LIST 2 -->
//               <ul class="staff-color-list product__size">
//                 ${color}
//               </ul>

//               <div class="product__quantity"></div>
//               <span class="staff-item-bottom-text">${title}</span>
//               <span class="staff-ordinary-price product__price-number">${price}</span>
//               <a href="${link}" class="staff-foto">Фото</a>
//             </div>
//           </li>
//     </div>
//   </div>
// </div>
// </div>


// `;


// const refs = {
//   list: document.querySelector('.staff-list'),
//     list2: document.querySelector('.staff'),
// };
// const lis = items.map(item => itemEl(item));

// const render = () => {
//   refs.list.insertAdjacentHTML('afterbegin', lis.join(''));
// };
// render();


// // const markupEl = ({ id, title, link, color, price, img }) => `
// // `;


// // const lis2 = items.map(item => markupEl(item));


// // const render2 = () => {
// //   refs.list2.insertAdjacentHTML('beforeend', lis2.join(''));
// // };

// // render2();


// (() => {
//   const refs = {
//     openModalBtn: document.querySelectorAll('[data-modal-open]'),
//     closeModalBtn: document.querySelectorAll('[data-modal-close]'),
//     modal: document.querySelectorAll('[data-modal]'),
//   };
//   refs.openModalBtn.forEach(function (li) {
//     li.addEventListener('click', toggleModal);
//   })
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal(e) {
//     refs.modal.forEach(function (modalEl) {
//       modalEl.classList.toggle('is-hidden');
//     })
//     document.body.classList.toggle('no-scroll')
//   }
// })();


const galleryEl = document.querySelector(".staff-list");

const galleryM = createGalleryM(items);
galleryEl.insertAdjacentHTML("beforeend", galleryM);


function createGalleryM(gallery) {
    return gallery.map(({ id, title, link, color, price, img }) => {
        return `
        <li class="staff-item modal" data-modal-open >
              <img src="${img}" alt="" class="staff-img" />
            <button
              type="button"
              class="staff-btn"
              data-sb-id-or-vendor-code="${id}"
              data-sb-product-name="${title}"
              data-sb-product-price="${price}"
              data-sb-product-quantity="1"
              data-sb-product-img="${img}"
            >
              <span class="staff-btn-text">Додати до Кошику</span>
            </button>
            <div href="" class="staff-link">
              <h3 class="staff-item-title">${title}</h3>

              <ul class="staff-size-list product__size">
                <li
                  class="staff-size-item product__size-element"
                  data-sb-curent-id-or-vendor-code="${id}-XS"
                  data-sb-curent-size="XS"
                >
                  XS
                </li>

                <li
                  class="staff-size-item product__size-element"
                  data-sb-curent-id-or-vendor-code="${id}-S"
                  data-sb-curent-size="S"
                >
                  S
                </li>

                <li
                  class="staff-size-item product__size-element"
                  data-sb-curent-id-or-vendor-code="${id}-M"
                  data-sb-curent-size="M"
                >
                  M
                </li>

                <li
                  class="staff-size-item product__size-element"
                  data-sb-curent-id-or-vendor-code="${id}-L"
                  data-sb-curent-size="L"
                >
                  L
                </li>

                <li
                  class="staff-size-item product__size-element"
                  data-sb-curent-id-or-vendor-code="${id}-XL"
                  data-sb-curent-size="XL"
                >
                  XL
                </li>
              </ul>
              <!-- LIST 2 -->
              <ul class="staff-color-list product__size">
                ${color}
              </ul>

              <div class="product__quantity"></div>
              <span class="staff-item-bottom-text">${title}</span>
              <span class="staff-ordinary-price product__price-number">${price}</span>
              <a href="${link}" class="staff-foto">Фото</a>
            </div>
          </li>
    `;
    })
        .join('');
}

galleryEl.addEventListener('click', onImgClick);

function onImgClick(event) {
  console.log(event.target);
    
    // if (event.currentTarget.nodeName !== 'LI') {
    //     return;
    // }

  const imgUrl = event.target.src;

  let instanceLightBox = basicLightbox.create(` ${event.target.closest('.staf-item')}`, {
        onShow: () => (event.target.src = imgUrl),
    });

    instanceLightBox.show();

}

galleryEl.addEventListener('keydown', onEscKeydown);

function onEscKeydown(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscCode = event.code === ESC_KEY_CODE;

    if (instanceLightBox.visible() && isEscCode) {
        instanceLightBox.close(() => window.removeEventListener('keydown', onEscKeydown));
    }
}
