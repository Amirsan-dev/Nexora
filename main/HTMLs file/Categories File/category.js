const allProductsUrl =
  "https://bbbxnpocgxdwkobvubbb.supabase.co/rest/v1/all-products?select=*,product_images(*)&order=id.asc";

const key = "sb_publishable_xCj8247yZyi_BQ4kUEwBUg_KvBkhW6h";

let allProducts = [];

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
            class="flex md:items-center justify-between gap-x-4 md:flex-row flex-col-reverse gap-y-2 flex-wrap-reverse border border-border p-4 md:p-2 rounded-[10px]"
          >
            <!-- left  -->
            <div class="flex items-center justify-center gap-4">
              <button
                class="add-to-cart-from-searchbar-btn  w-30 h-10 rounded-[10px] font-bold text-text-primary text-[16px] bg-btn-bg cursor-pointer hover:bg-btn-hover hover:shadow-normal transition" onclick="getProductId(${product.id})"
              >
                Add to Cart
              </button>

            </div>
            <!-- right -->
            <div class="flex items-center justify-end gap-4">
              <a href="main/HTMLs file/product file/index.html?id=${product.id}" class="text-text-primary text-[16px] font-bold"
                >${product.name}</a
              >
              <div
                class="size-15 rounded-[10px] border border-border overflow-hidden shrink-0 bg-card-bg"
              >
                <img src="${product.product_images[0].image_url}" alt="product-img" class="w-full h-full" />
              </div>
            </div>
          </div>
      `,
    );
  });
};

const categoryMainOnLoadFun = () => {
  getProductsByFetch();
  IsInLocalStorageLength();
};

searchedInput.addEventListener("keyup", createProductsInSearchBar);

// ! basket

let basket = [];
const basketProductWrapper = document.querySelector(".basket-product-wrapper");
const productCountElem = document.querySelector(".product-count");
const finalPriceBasketElem = document.querySelector(".final-price-basket");
const mobileBasketWrapper = document.querySelector(".mobile-basket-wrapper");
const mobileBasketProductCount = document.querySelector(
  ".mobile-basket-product-count",
);
const basketMobileTotalPrice = document.querySelector(
  ".basket-mobile-total-price",
);
const productCounterDesktop = document.querySelector(
  ".product-counter-desctop",
);

const getProductId = (id) => {
  console.log(basket);
  getProductById(id);
};

const getProductById = (id) => {
  const foundedProduct = allProducts.find((product) => {
    return product.id === id;
  });

  isInBasketFun(foundedProduct);
};

const isInBasketFun = (foundedProduct) => {
  let foundedInBasket = basket.find((product) => {
    return product.id === foundedProduct.id;
  });

  if (foundedInBasket) {
    foundedInBasket.qty += 1;
    saveProductsToLocalStorage();
    createBasketBanner(basket);
    createMobileBasketBanner(basket);
    calculateFinalPrice(basket);
  } else {
    let copiedProduct = { ...foundedProduct, qty: 1 };
    basket.push(copiedProduct);
    console.log(basket);
    saveProductsToLocalStorage();
    createBasketBanner(basket);
    createMobileBasketBanner(basket);
    calculateFinalPrice(basket);
  }
};

const saveProductsToLocalStorage = () => {
  let stringBasket = JSON.stringify(basket);
  localStorage.setItem("basket", stringBasket);
};

const IsInLocalStorageLength = () => {
  console.log("hi amir");
  let receivedBasket = localStorage.getItem("basket");
  let parsedBasket = JSON.parse(receivedBasket);

  if (parsedBasket.length > 0) {
    basket = parsedBasket;
    createBasketBanner(basket);
    createMobileBasketBanner(basket);
    calculateFinalPrice(basket);
  } else {
    basket = [];
    console.log(basket);
    createEmptyBasketBanner();
    calculateFinalPrice();
  }
};

const createBasketBanner = (basket) => {
  basketProductWrapper.innerHTML = "";
  basket.forEach((product) => {
    console.log(product);
    basketProductWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <div
            class="flex items-center justify-between w-full h-20 border border-border rounded-[10px] bg-bg-secondary hover:border-Accent-Primary/60 p-2 transition"
        >
         <!-- left -->
         <div class="flex flex-col gap-1.5">
           <h6 class="text-text-secondary text-sm">
             price :
             <span class="text-sm font-bold text-text-primary"
               >$${product.price}</span
             >
           </h6>
           <div
             class="flex items-center justify-center gap-1 child:size-7 child:rounded-[10px] child:bg-bg-secondary child:border child: child:border-border child:flex child:items-center child:justify-center"
           >
             <button
               class="hover:text-text-primary hover:border-Accent-Primary/60 cursor-pointer text-text-secondary transition" onclick="decreaseProductFun(${product.id})"
             >
               <svg class="size-4 transition">
                 <use xlink:href="#minus-icon"></use>
               </svg>
             </button>
             <span class="text-text-primary text-xs font-bold"
               >${product.qty}</span
             >
             <button
               class="hover:text-text-primary hover:border-Accent-Primary/60 cursor-pointer text-text-secondary transition" onclick="increaseProductFun(${product.id})"
             >
               <svg class="size-4 transition">
                 <use xlink:href="#plus-icon"></use>
               </svg>
             </button>
             <button
                  class="hover:text-red-600 hover:border-Accent-Primary/60 cursor-pointer text-text-secondary transition" onclick="deleteProduct(${product.id})"
                >
                  <svg class="size-4 transition">
                    <use xlink:href="#trash-icon"></use>
                  </svg>
                </button>
              </div>
            </div>
            <!-- right -->
            <div class="flex items-center gap-2">
              <a
                href="../product file/index.html?id=${product.id}"
                class="text-xs font-bold line-clamp-2 max-w-25 text-text-primary"
                >${product.name}</a
              >
              <div
                class="w-17 rounded-[10px] border border-border overflow-hidden"
              >
                <img
                  src="${product.product_images[0].image_url}"
                  class="size-full"
                  alt="product-img"
                />
              </div>
            </div>
          </div>
      `,
    );
  });
};

const createMobileBasketBanner = (basket) => {
  mobileBasketWrapper.innerHTML = "";
  basket.forEach((product) => {
    mobileBasketWrapper.insertAdjacentHTML(
      "beforeend",
      `
              <!-- product -->
        <a
          href="#"
          class="flex flex-col gap-y-3 p-2 border border-border rounded-[10px] hover:border-Accent-Primary transition"
        >

          <div class="flex items-center justify-end gap-x-3">
            <h4
              class="text-text-primary text-[16px] font-bold line-clamp-2"
            >
              ${product.name}
            </h4>
            <div
              class="size-12 rounded-[10px] border border-border bg-card-bg overflow-hidden shrink-0"
            >
              <img src="${product.product_images[0].image_url}" alt="product-img" class="w-full h-full" />
            </div>
          </div>

        </a>
      `,
    );
  });
};

const createEmptyBasketBanner = () => {
  basketProductWrapper.innerHTML = "";
  basketProductWrapper.insertAdjacentHTML(
    "beforeend",
    `
      <div class="w-full h-full rounded-2xl bg-card-bg flex items-center justify-center text-xl text-text-primary font-bold">There is no product yet</div>
    `,
  );
};

const calculateFinalPrice = (basket) => {
  let finalPrice = 0;
  let productCounter = 0;

  if (!basket) {
    productCountElem.innerHTML = "(0)";
    mobileBasketProductCount.innerHTML = "(0)";
    productCounterDesktop.innerHTML = "0";
    finalPriceBasketElem.innerHTML = "$ 0";
    basketMobileTotalPrice.innerHTML = "$ 0";
  } else {
    basket.forEach((product) => {
      finalPrice += product.price * product.qty;
      productCounter += 1 * product.qty;
    });

    productCountElem.innerHTML = `(${productCounter})`;
    productCounterDesktop.innerHTML = productCounter;
    mobileBasketProductCount.innerHTML = `(${productCounter})`;
    finalPriceBasketElem.innerHTML = `$${finalPrice}`;
    basketMobileTotalPrice.innerHTML = `$${finalPrice}`;
  }
};

const decreaseProductFun = (id) => {
  let foundedInBasket = basket.find((product) => {
    return product.id === id;
  });

  foundedInBasket.qty -= 1;

  if (foundedInBasket.qty < 1) {
    deleteProduct(id);
  } else {
    saveProductsToLocalStorage();
    createBasketBanner(basket);
    createMobileBasketBanner(basket);
    calculateFinalPrice(basket);
  }
};
const increaseProductFun = (id) => {
  let foundedInBasket = basket.find((product) => {
    return product.id === id;
  });

  foundedInBasket.qty += 1;
  saveProductsToLocalStorage();
  createBasketBanner(basket);
  createMobileBasketBanner(basket);
  calculateFinalPrice(basket);
};
const deleteProduct = (id) => {
  console.log(id);
  let foundedInBasket = basket.findIndex((product) => {
    return product.id === id;
  });

  basket.splice(foundedInBasket, 1);
  saveProductsToLocalStorage();
  createBasketBanner(basket);
  createMobileBasketBanner(basket);
  calculateFinalPrice(basket);
  if (basket.length < 1) {
    createEmptyBasketBanner();
  }
};
