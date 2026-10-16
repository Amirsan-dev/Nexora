const mobileNavBtn = document.querySelector(".mobile-nav");
const hambergerMenuElem = document.querySelector(".hamberger-menu");
const overlayElem = document.querySelector(".overlay");
const basketOverlayElem = document.querySelector(".basket-overlay");
const searchBarOverlayElem = document.querySelector(".search-bar-overlay");
const leftMobileMenu = document.querySelector("#left-mobile-menu");
const mobileBasketMenu = document.querySelector("#basket-btn-mobile");
const rightMobileBasket = document.querySelector("#right-mobile-basket");
const searchBtn = document.querySelector("#search-btn");
const searchBarElem = document.querySelector(".search-bar");
const searchBarXMark = document.querySelector(".search-bar-x-mark");

let isOpen = false;
let basketIsOpen = false;

const openHandler = () => {
  hambergerMenuElem.classList.add("hamberger-menu--active");
  leftMobileMenu.classList.add("left-mobile-menu");
  overlayElem.classList.remove("hidden");
};

const closeHandler = () => {
  hambergerMenuElem.classList.remove("hamberger-menu--active");
  leftMobileMenu.classList.remove("left-mobile-menu");
  overlayElem.classList.add("hidden");
};

const mobileMenuHandler = () => {
  if (isOpen) {
    isOpen = false;
    closeHandler();
  } else {
    isOpen = true;
    openHandler();
  }
};

const mobileBasketHandler = () => {
  if (basketIsOpen) {
    basketIsOpen = false;
    closeBasketHandler();
  } else {
    basketIsOpen = true;
    openBasketHandler();
  }
};

const openBasketHandler = () => {
  rightMobileBasket.classList.add("right-mobile-menu");
  basketOverlayElem.classList.remove("hidden");
};
const closeBasketHandler = () => {
  rightMobileBasket.classList.remove("right-mobile-menu");
  basketOverlayElem.classList.add("hidden");
};

const showSearchBar = () => {
  searchBarElem.classList.remove("hidden");
  searchBarOverlayElem.classList.remove("hidden");
};

const closeSearchBar = () => {
  searchBarElem.classList.add("hidden");
  searchBarOverlayElem.classList.add("hidden");
};

window.addEventListener("keyup", (event) => {
  if (event.key === "Escape" && isOpen) {
    isOpen = false;
    closeHandler();
  } else if (event.key === "Escape" && basketIsOpen) {
    basketIsOpen = false;
    closeBasketHandler();
  }
});

mobileBasketMenu.addEventListener("click", mobileBasketHandler);
overlayElem.addEventListener("click", mobileMenuHandler);
basketOverlayElem.addEventListener("click", mobileBasketHandler);
mobileNavBtn.addEventListener("click", mobileMenuHandler);
searchBtn.addEventListener("click", showSearchBar);
searchBarXMark.addEventListener("click", closeSearchBar);


