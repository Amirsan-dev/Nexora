// Url and Api key

// const allProductsUrl =
//   "https://bbbxnpocgxdwkobvubbb.supabase.co/rest/v1/all-products?select=*,product_images(*)&order=id.asc";

const allProductsUrl =
  "https://bbbxnpocgxdwkobvubbb.supabase.co/rest/v1/all-products?select=*,product_images(*)&order=id.asc";

const key = "sb_publishable_xCj8247yZyi_BQ4kUEwBUg_KvBkhW6h";

// DOM

const productsWrapperElem = document.querySelector(".products-wrapper");
const CategoryInputs = document.querySelectorAll(".Category-input");

let categoryArray = [];
let IsCategory;

const getCategoryFromUrl = () => {
  let params = new URLSearchParams(document.location.search);
  let category = params.get("category");
  IsCategory = category;
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
  console.log(data[0]);
  console.log("category is " + IsCategory);
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
  } else {
    createProductsBanner(data);
    setCategoriesProducts(data);
  }
};

const getProductId = (id) => {
  console.log(id);
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
};

const setRelatedProduct = (data, category) => {
  // console.log(data);
  const filteredProduct = data.filter((product) => {
    return product.category === category;
  });
  console.log(filteredProduct);
  categoryArray.push(...filteredProduct);

  document.querySelector(`#${category.toLowerCase()}`).checked = true;
};

const setCategoriesProducts = (data) => {
  CategoryInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      categoryArray = [];
      CategoryInputs.forEach((input) => {
        if (input.id === "gaming" && input.checked) {
          setRelatedProduct(data, "Gaming");
          console.log("gaming is ok");
        } else if (input.id === "laptops" && input.checked) {
          setRelatedProduct(data, "Laptops");
          console.log("laptops is ok");
        } else if (input.id === "smartphones" && input.checked) {
          setRelatedProduct(data, "Smartphones");
          console.log("smartphones is ok");
        } else if (input.id === "accessories" && input.checked) {
          setRelatedProduct(data, "Accessories");
          console.log("accessories is ok");
        }
      });
      // console.log(e.target.id, e.target.checked);
    });
  });
};
