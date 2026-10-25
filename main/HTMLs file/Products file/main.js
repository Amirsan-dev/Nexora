const allProductsUrl =
  "https://bbbxnpocgxdwkobvubbb.supabase.co/rest/v1/all-products?select=*,product_images(*)&order=id.asc";

const key = "sb_publishable_xCj8247yZyi_BQ4kUEwBUg_KvBkhW6h";

// DOM

const productsWrapperElem = document.querySelector(".products-wrapper");
const CategoryInputs = document.querySelectorAll(".Category-input");
const optionsElem = document.querySelectorAll(".option");
const selectElem = document.querySelector(".select-elem");
const optionFirstElem = document.querySelector(".option-first");
const minimumPrice = document.querySelector(".minimum-price");
const maximumPriceElem = document.querySelector(".maximum-price");
const rangeInputPrice = document.querySelector(".range-input-price");
const minDisPriceElem = document.querySelector(".min-dis-price");
const maxAblPriceElem = document.querySelector(".max-abl-price");
const inStockCheck = document.querySelector("#in-stock");
const onSaleCheck = document.querySelector("#on-sale");
const searchInput = document.querySelector("#search-input");

let maxPrice;
let minPrice;
// let categoryArray = [];
let IsCategory;
let allProducts = [];
let copyProducts = [];
let searchedProduct;

const mainSortFun = async () => {
  copyProducts = [...allProducts];
  copyProducts = searchProductFun(copyProducts);
  copyProducts = isSearchValue(copyProducts);
  copyProducts = onSaleFun(copyProducts);
  copyProducts = inStockFun(copyProducts);
  copyProducts = sortProductByTextInputPrice(copyProducts);
  copyProducts = sortProductByRangeInputPrice(copyProducts);
  copyProducts = sortingProduct(copyProducts);
  copyProducts = setCategoriesProducts(copyProducts);
  createPagination(copyProducts);
  copyProducts = createProduct(copyProducts);
  createProductsBanner(copyProducts);
};

const isSearchValue = (data) => {
  if (searchInput.value.trim()) {
    return data.filter((product) => {
      return product.name.toLowerCase().includes(searchedProduct.toLowerCase());
    });
  } else {
    return data;
  }
};

const searchProductFun = (data) => {
  searchedProduct = searchInput.value.trim();
  if (searchedProduct) {
    console.log(searchedProduct);
    return data.filter((product) => {
      return product.name.toLowerCase().includes(searchedProduct.toLowerCase());
    });
  } else {
    return data;
  }
};

const onSaleFun = (data) => {
  if (onSaleCheck.checked) {
    return data.filter((product) => {
      return product.on_sale === true;
    });
  } else {
    return data;
  }
};

const inStockFun = (data) => {
  if (inStockCheck.checked) {
    return data.filter((product) => {
      return product.in_stock === true;
    });
  } else {
    return data;
  }
};

const setInputRangeValue = (data) => {
  const copyData = [...data];
  const sortedData = copyData.sort((a, b) => {
    return a.price - b.price;
  });

  minimumPrice.innerHTML = `$${sortedData[0].price}`;
  maximumPriceElem.innerHTML = `$${sortedData[sortedData.length - 1].price}`;
  rangeInputPrice.min = sortedData[0].price;
  minPrice = sortedData[0].price;
  rangeInputPrice.max = sortedData[sortedData.length - 1].price;
  rangeInputPrice.value = sortedData[sortedData.length - 1].price;
  minDisPriceElem.value = sortedData[0].price;
  maxAblPriceElem.max = sortedData[sortedData.length - 1].price;
  maxAblPriceElem.value = sortedData[sortedData.length - 1].price;
};

const sortProductByRangeInputPrice = (data) => {
  maxPrice = maxAblPriceElem.value;
  rangeInputPrice.value = maxPrice;
  if (maxPrice < minPrice) {
    maxPrice = minPrice;
  }
  return data.filter((product) => {
    return product.price <= maxPrice;
  });
};

const sortProductByTextInputPrice = (data) => {
  maxPrice = rangeInputPrice.value;
  maxAblPriceElem.value = maxPrice;
  return data.filter((product) => {
    return product.price <= maxPrice;
  });
};

const isNewFun = (data) => {
  return data.filter((item) => {
    return item.is_new === true;
  });
};

const sortLowToHightProduct = (data) => {
  return data.sort((a, b) => {
    return a.price - b.price;
  });
};

const sortHightToLowProduct = (data) => {
  return data.sort((a, b) => {
    return b.price - a.price;
  });
};

const sortTopRatedProduct = (data) => {
  return data.sort((a, b) => {
    return b.rating - a.rating;
  });
};

const sortingProduct = (data) => {
  optionFirstElem.disabled = true;
  let selectElemValue = selectElem.value;

  if (selectElemValue === "Newest") {
    isNewFun(data);
    return isNewFun(data);
  } else if (selectElemValue === "Low-to-High") {
    sortLowToHightProduct(data);
    return sortLowToHightProduct(data);
  } else if (selectElemValue === "High-to-Low") {
    sortHightToLowProduct(data);
    return sortHightToLowProduct(data);
  } else if (selectElemValue === "Best-Rated") {
    sortTopRatedProduct(data);
    return sortTopRatedProduct(data);
  } else {
    return data;
  }
};

const getCategoryFromUrl = () => {
  let params = new URLSearchParams(document.location.search);
  let category = params.get("category");
  IsCategory = category;
};

const IsCategoryOn = (data) => {
  if (IsCategory) {
    if (IsCategory === "gaming") {
      setRelatedProduct(data, "Gaming");
    } else if (IsCategory === "laptops") {
      setRelatedProduct(data, "Laptops");
      console.log("ha ha laptops");
    } else if (IsCategory === "smartphones") {
      setRelatedProduct(data, "Smartphones");
      console.log("ha ha smartphones");
    } else if (IsCategory === "accessories") {
      setRelatedProduct(data, "Accessories");
      console.log("ha ha accessories");
    }
  }
};

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
  // console.log(allProducts);
  setInputRangeValue(data);
  IsCategoryOn(data);
  mainSortFun();
};

const createProductsBanner = (data) => {
  productsWrapperElem.innerHTML = "";
  data.forEach((product) => {
    const discountPercentage = Math.round(
      ((product.old_price - product.price) / product.old_price) * 100,
    );
    productsWrapperElem.insertAdjacentHTML(
      "beforeend",
      `
        <div class="group overflow-hidden">
            <!-- offer elem -->
            <span
                class="product-offer absolute top-3 left-3 rounded-[5px] bg-Accent-Primary/90 text-bg-primary w-10 h-6 flex items-center justify-center text-xs"
            >${discountPercentage}%</span>
                <!-- neon elem -->
                    <span
                      class="w-[50%] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-[250ms] h-[50%] absolute inset-0 m-auto rounded-full blur-[100px] bg-Accent-Primary/30"
                    ></span>
                    <!-- fav elem -->
                    <button
                      class="size-8 absolute top-3 right-3 rounded-full border border-border bg-bg-secondary flex items-center justify-center cursor-pointer transition hover:border-Accent-Primary text-text-secondary hover:text-Accent-Primary"
                    >
                      <svg class="size-4">
                        <use xlink:href="#heart-icon"></use>
                      </svg>
                    </button>
                    <!-- top -->
                    <div class="w-full h-57.5 bg-Accent-Primary/5">
                    <img class="w-full h-full" src="${product.product_images[0].image_url}" alt="product-img">
                    </div>
                    <!-- bottom -->
                    <div class="flex flex-col p-3">
                      <h4
                        class="text-xs text-Accent-Primary font-medium mb-2.5"
                      >
                        ${product.category}
                      </h4>
                      <a
                        href="../product file/index.html?id=${product.id}"
                        class="text-text-primary text-[15px] font-semibold h-11.25 line-clamp-2 mb-2.5"
                      >
                       ${product.name}
                      </a>
                      <!-- score -->
                      <div class="flex items-center gap-2 mb-3">
                        <!-- score wrapper -->
                        <div class="flex items-center gap-0.5">
                          <svg class="size-2.5">
                            <use xlink:href="#full-star"></use>
                          </svg>
                          <svg class="size-2.5">
                            <use xlink:href="#full-star"></use>
                          </svg>
                          <svg class="size-2.5">
                            <use xlink:href="#full-star"></use>
                          </svg>
                          <svg class="size-2.5">
                            <use xlink:href="#full-star"></use>
                          </svg>
                          <svg class="size-2.5">
                            <use xlink:href="#full-star"></use>
                          </svg>
                        </div>
                        <p class="rating-counter text-text-secondary text-xs">
                          (${product.reviews})
                        </p>
                      </div>
                      <div class="flex items-center gap-3">
                        <div class="flex flex-col">
                          <span
                            class="product-deleted-price relative text-[10px] text-text-secondary"
                            >$${product.old_price}</span
                          >
                          <span
                            class="main-price text-[16px] text-text-primary font-bold"
                            >$${product.price}</span
                          >
                        </div>
                        <button
                          class="flex items-center justify-center rounded-md w-full h-10 bg-Accent-Primary text-sm text-bg-primary font-bold cursor-pointer transition duration-[250ms] hover:-translate-y-0.5 hover:shadow-normal"
                          onclick="getProductId(${product.id})"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
        `,
    );
  });
};

const mainOnLoadFunc = () => {
  getCategoryFromUrl();
  getProductsByFetch();
  IsInLocalStorageLength();
};

const setRelatedProduct = (data, category) => {
  document.querySelector(`#${category.toLowerCase()}`).checked = true;

  return data.filter((product) => {
    return product.category === category;
  });
};

const setCategoriesProducts = (data) => {
  const foundedInputs = [...CategoryInputs].filter((input) => {
    return input.checked === true;
  });

  if (foundedInputs.length) {
    return data.filter((product) => {
      return foundedInputs.some((item) => {
        let category = item.id.charAt(0).toUpperCase() + item.id.slice(1);
        return product.category === category;
      });
    });
  } else {
    return data;
  }
};

searchInput.addEventListener("keyup", mainSortFun);
onSaleCheck.addEventListener("change", mainSortFun);
inStockCheck.addEventListener("change", mainSortFun);
rangeInputPrice.addEventListener("input", mainSortFun);
maxAblPriceElem.addEventListener("keyup", mainSortFun);
selectElem.addEventListener("change", mainSortFun);
CategoryInputs.forEach((input) => {
  input.addEventListener("change", mainSortFun);
});

// ? basket btn dom

const basketBtn = document.querySelector("#basket-btn");
const desktopBasketElem = document.querySelector(".desktop-basket");
const desktopBasketOverlay = document.querySelector(".desktop-basket-overlay");

const showBasket = () => {
  desktopBasketElem.classList.add("desktop-basket--show");
  desktopBasketOverlay.classList.add("desktop-basket-overlay--show");
};

const hideBasket = () => {
  desktopBasketElem.classList.remove("desktop-basket--show");
  desktopBasketOverlay.classList.remove("desktop-basket-overlay--show");
};

basketBtn.addEventListener("mouseover", showBasket);
basketBtn.addEventListener("mouseout", hideBasket);

//! basket btn logic

let basket = [];
const basketProductWrapper = document.querySelector(".basket-product-wrapper");
const productCountElem = document.querySelector(".product-count");
const finalPriceBasketElem = document.querySelector(".final-price-basket");

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
    calculateFinalPrice(basket);
  } else {
    let copiedProduct = { ...foundedProduct, qty: 1 };
    basket.push(copiedProduct);
    console.log(basket);
    saveProductsToLocalStorage();
    createBasketBanner(basket);
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
    finalPriceBasketElem.innerHTML = "$ 0";
  } else {
    basket.forEach((product) => {
      finalPrice += product.price * product.qty;
      productCounter += 1 * product.qty;
    });

    productCountElem.innerHTML = `(${productCounter})`;
    finalPriceBasketElem.innerHTML = `$${finalPrice}`;
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
  calculateFinalPrice(basket);
  if (basket.length < 1) {
    createEmptyBasketBanner();
  }
};

// ! Pagination Logic

const paginationWrapper = document.querySelector(".pagination-wrapper");
const paginationItems = document.querySelectorAll(".pagination-item");
let pageNumber = 1;

const createPagination = (copyProducts) => {
  let productPerPage = 6;
  let numOfPaginationItem = Math.floor(copyProducts.length / productPerPage);

  if (copyProducts.length % productPerPage > 0) {
    numOfPaginationItem += 1;
  }
  paginationWrapper.innerHTML = "";
  for (let i = 0; i < numOfPaginationItem; i++) {
    paginationWrapper.insertAdjacentHTML(
      "beforeend",
      `
      <button class="pagination-item">${i + 1}</button>
      `,
    );
  }
  const paginationItems = document.querySelectorAll(".pagination-item");
  paginationItems.forEach((pagination) => {
    if (+pagination.innerHTML === pageNumber) {
      pagination.classList.add("pagination-item--active");
    }
  });

  paginationItems.forEach((pagination) => {
    pagination.addEventListener("click", (e) => {
      pageNumber = e.target.innerHTML;
      paginationItems.forEach((pagination) => {
        pagination.classList.remove("pagination-item--active");
      });
      pageNumber = +e.target.innerHTML;
      mainSortFun();
    });
  });
};

const createProduct = (copyProducts) => {
  let sliceNumb = (pageNumber - 1) * 6;
  return copyProducts.splice(sliceNumb, 6);
};
