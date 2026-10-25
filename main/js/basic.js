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
const searchProductOverlay = document.querySelector(".search-product-overlay");
const searchedInput = document.querySelector("#searched-input");
const productWrapperInSearchbar = document.querySelector(
  ".product-wrapper-in-searchbar",
);

const allProductsUrl =
  "https://bbbxnpocgxdwkobvubbb.supabase.co/rest/v1/all-products?select=*,product_images(*)&order=id.asc";

const key = "sb_publishable_xCj8247yZyi_BQ4kUEwBUg_KvBkhW6h";

let isOpen = false;
let basketIsOpen = false;
let allProducts = [];

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

const getProductsByFetch = async () => {
  const response = await fetch(allProductsUrl, {
    method: "GET",
    headers: {
      apikey: `${key}`,
      Authorization: `Bearer ${key}`,
    },
  });
  const data = await response.json();
  allProducts = data;
};

const createProductsInSearchBar = () => {
  productWrapperInSearchbar.innerHTML = "";
  let searchedProduct = searchedInput.value;
  const foundedProducts = allProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchedProduct.toLowerCase());
  });
  console.log(foundedProducts);
  foundedProducts.forEach((product) => {
    productWrapperInSearchbar.insertAdjacentHTML(
      "beforeend",
      `
                <!-- product -->
          <div
            class="flex items-center justify-between border border-border p-2 rounded-[10px]"
          >
            <!-- left  -->
            <div class="flex items-center gap-4">
              <button
                class="add-to-cart-from-searchbar-btn  w-30 h-10 rounded-[10px] font-bold text-text-primary text-[16px] bg-Accent-Primary/60 cursor-pointer hover:bg-Accent-Primary hover:shadow-normal transition"
              >
                Add to Cart
              </button>
              <button
                class="view-product-from-searchbar-btn w-30 h-10 rounded-[10px] font-bold text-text-primary text-[16px] bg-Accent-Secondary/60 cursor-pointer hover:bg-Accent-Secondary hover:shadow-normal transition"
              >
                visit Product
              </button>
            </div>
            <!-- right -->
            <div class="flex items-center justify-center gap-4">
              <a href="#" class="text-text-primary text-[16px] font-bold"
                >${product.name}}</a
              >
              <div
                class="size-15 rounded-[10px] border border-border overflow-hidden bg-card-bg"
              >
                <img src="${product.product_images[0].image_url}" alt="product-img" class="w-full h-full" />
              </div>
            </div>
          </div>
      `,
    );
  });
};

const mainOnLoadFun = () => {
  getProductsByFetch();
};

mobileBasketMenu.addEventListener("click", mobileBasketHandler);
overlayElem.addEventListener("click", mobileMenuHandler);
basketOverlayElem.addEventListener("click", mobileBasketHandler);
mobileNavBtn.addEventListener("click", mobileMenuHandler);
searchBtn.addEventListener("click", showSearchBar);
searchBarXMark.addEventListener("click", closeSearchBar);
searchedInput.addEventListener("keyup", createProductsInSearchBar);
