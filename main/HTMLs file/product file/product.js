//! Url and Api key By ID

const UrlOfProduct =
  "https://bbbxnpocgxdwkobvubbb.supabase.co/rest/v1/all-products?select=*,product_images(*)";

const key = "sb_publishable_xCj8247yZyi_BQ4kUEwBUg_KvBkhW6h";

// ! Url For All Product

const allProductsUrl =
  "https://bbbxnpocgxdwkobvubbb.supabase.co/rest/v1/all-products?select=*,product_images(*)&order=id.asc";

//! DOM

let productID;
const productHeaderLink = document.querySelector(".product-header-link");
const productOfferMain = document.querySelector(".product-offer--main");
const mainImgElem = document.querySelector(".main-img");
const secondProductImg = document.querySelector(".second-product-img");
const thirdProductImg = document.querySelector(".third-product-img");
const forthProductImg = document.querySelector(".forth-product-img");
const fifthProductImg = document.querySelector(".fifth-product-img");
const productCategoryElem = document.querySelector(".product-category");
const productTitle = document.querySelector(".product-title");
const rateNumberElem = document.querySelector(".rate-number");
const commentCountElem = document.querySelector(".comment-count");
const mainPriceElem = document.querySelector(".main-price");
const oldPriceElem = document.querySelector(".old-price");
const savedMoneyElem = document.querySelector(".saved-money");
const shortDescription = document.querySelector(".short-description");
const stockOrOnSale = document.querySelector(".stock-or-sale");
const minusBtn = document.querySelector(".minus-btn");
const userProductCount = document.querySelector(".user-product-count");
const plusBtn = document.querySelector(".plus-btn");
const addToCartBtn = document.querySelector(".add-to-cart-btn");
const mainDesciption = document.querySelector(".description");
const specWrapper = document.querySelector(".spec-wrapper");
const relatedProductWrapper = document.querySelector(
  ".related-product-wrapper",
);

let productCount = 1;
let category = "";

const createRelatedProducts = (products) => {
    relatedProductWrapper.innerHTML = ""
      products.forEach((product) => {
    const discountPercentage = Math.round(
      ((product.old_price - product.price) / product.old_price) * 100,
    );
    relatedProductWrapper.insertAdjacentHTML(
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

const getAllProducts = async () => {
  const response = await fetch(allProductsUrl, {
    method: "GET",
    headers: {
      apikey: `${key}`,
      Authorization: `Bearer ${key}`,
    },
  });
  const data = await response.json();
  //   console.log(data)
  setRelatedProduct(data);
};

const setRelatedProduct = (data) => {
  //   console.log(data);
  const filteredProduct = data.filter((product) => {
    return product.category === category;
  });

  //   console.log(filteredProduct);

  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  let num3 = Math.floor(Math.random() * 10);
  while (num1 === num2 || num1 === num3 || num2 === num3) {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    num3 = Math.floor(Math.random() * 10);
  }
  let relatedProductArray = [];
  relatedProductArray.push(filteredProduct[num1]);
  relatedProductArray.push(filteredProduct[num2]);
  relatedProductArray.push(filteredProduct[num3]);
  createRelatedProducts(relatedProductArray);
};

const setSpecsOfProduct = (product) => {
  for (spec in product.specs) {
    // console.log(spec);
    specWrapper.insertAdjacentHTML(
      "beforeend",
      `
            <div
                class="flex flex-wrap py-4 border-b border-border child:w-[30%]  gap-x-15 sm:gap-20"
            >
                <span class="spec-key text-text-secondary text-xs">${spec}</span>
                <span class="spec-value text-text-primary text-xs">
                    ${product.specs[spec]}</span
                >
            </div>
        `,
    );
  }
};

const createProductInfo = (data) => {
  const product = data[0];

  const discountPercentage = Math.round(
    ((product.old_price - product.price) / product.old_price) * 100,
  );
  productHeaderLink.innerHTML = product.name;
  productOfferMain.innerHTML = `${discountPercentage}%`;
  mainImgElem.src = product.product_images[0].image_url;
  secondProductImg.src = product.product_images[1].image_url;
  thirdProductImg.src = product.product_images[2].image_url;
  forthProductImg.src = product.product_images[3].image_url;
  fifthProductImg.src = product.product_images[4].image_url;
  productCategoryElem.innerHTML = product.category;
  productTitle.innerHTML = product.name;
  rateNumberElem.innerHTML = product.rating;
  commentCountElem.innerHTML = product.reviews;
  mainPriceElem.innerHTML = `$${product.price.toLocaleString()}`;
  oldPriceElem.innerHTML = `$${product.old_price.toLocaleString()}`;
  savedMoneyElem.innerHTML = `$${product.old_price - product.price}`;
  shortDescription.innerHTML = product.short_description;
  if (product.in_stock) {
    stockOrOnSale.innerHTML = "In Stock";
  }
  mainDesciption.innerHTML = product.description;

  specWrapper.innerHTML = "";
  setSpecsOfProduct(product);
};

const getProductsByFetch = async () => {
  const response = await fetch(`${UrlOfProduct}&id=eq.${productID}`, {
    method: "GET",
    headers: {
      apikey: `${key}`,
      Authorization: `Bearer ${key}`,
    },
  });
  const data = await response.json();
  category = data[0].category;
  createProductInfo(data);
};

const getProductIdFromUrl = () => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const id = parseInt(params.get("id"), 10);
  productID = id;
};

// ! onLoad Function

const MainOnLoadFunc = async () => {
  getProductIdFromUrl();
  await getProductsByFetch();
  getAllProducts();
};

// !product count logic

const minusProduct = () => {
  if (productCount !== 1) {
    productCount -= 1;
  }
  userProductCount.innerHTML = productCount;
};
const plusProduct = () => {
  if (productCount <= 4) {
    productCount += 1;
  }
  userProductCount.innerHTML = productCount;
};

// ! add to cart func

const addToCartFunc = () => {
  console.log(productID);
};

// ! Event listeners

minusBtn.addEventListener("click", minusProduct);
plusBtn.addEventListener("click", plusProduct);
addToCartBtn.addEventListener("click", addToCartFunc);
