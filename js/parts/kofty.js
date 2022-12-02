const itemEl = ({ id, title, link, color, price, img }) => `<li class="staff-item">
            <a href="${link}" class="staff-img-link">
              <img src="${img}" alt="" class="staff-img" />
            </a>
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
          </li>`;
const items = [
  {
    link: 'https://www.instagram.com/p/CkoKHyhqLGg/?igshid=NjZiMGI4OTY=',
    img: '../img/koft/kof-20.jpg',
    price: 990,
    title: 'Светер',
    id: 'В1363/1030',
    color: `<li class="staff-color-item">білий</li>
                <li class="staff-color-item">сірий</li>`,
  },
  {
    link: 'https://www.instagram.com/p/CkligHxKfSo/?igshid=NjZiMGI4OTY=',
    img: '../img/koft/kof-19.jpg',
    price: 590,
    title: 'світшот',
    id: '6220-900',
    color: `<li class="staff-color-item">молочний</li>
                <li class="staff-color-item">червоний</li>`,
  },
  {
    link: 'https://www.instagram.com/p/CkkT6FBKlxM/?igshid=NjZiMGI4OTY=',
    img: '../img/koft/kof-18.jpg',
    price: 550,
    title: 'Лонгслів',
    id: 'RG6220/911',
    color: `<li class="staff-color-item">чорний</li>
                <li class="staff-color-item">білий</li>`,
  },
  {
    link: 'https://www.instagram.com/p/CkfkFHzKCWJ/?igshid=NjZiMGI4OTY=',
    img: '../img/koft/kof-17.jpg',
    price: 890,
    title: 'Світшот',
    id: 'S1531/144',
    color: `<li class="staff-color-item">графіт</li>
                <li class="staff-color-item">беж</li>
                <li class="staff-color-item">капучіно</li>`,
  },
];
const refs = {
  list: document.querySelector('.staff-list'),
};
const render = () => {
  const lis = items.map(item => itemEl(item));
  refs.list.insertAdjacentHTML('afterbegin', lis.join(''));
};

render();
