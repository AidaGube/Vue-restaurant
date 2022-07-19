import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    promotions: [],
    productDetails: {},
    cartItems: new Map(),
    error: null,
    searchedItems: "",
    category: 0,
  },
  getters: {
    totalSumOfProducts(state) {
      const price = state.cartItems;
      let sum = 0;

      for (const product of price.values()) {
        sum += product.price * product.count;
      }
      return sum;
    },
    totalCountOfProducts(state) {
      const price = state.cartItems;
      let count = 0;

      for (const product of price.values()) {
        count += product.count;
      }
      return count;
    },

    totalDeliveryOfProducts(state) {
      const price = state.cartItems;
      let delivery = 100;

      for (const product of price.values()) {
        delivery -= product.count;
      }
      return delivery;
    },
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    },
    SET_PROMOTION(state, data) {
      state.promotions = data;
    },
    SET_CATEGORY(state, value) {
      state.category = value;
    },
    SET_DETAIL_PRODUCT(state, data) {
      state.productDetails = data;
    },
    ADD_PRODUCT_TO_CART(state, product) {
      const isProductAlreadyAdded = state.cartItems.get(product.id);

      if (isProductAlreadyAdded) {
        const modifiedProduct = {
          ...product,
          count: isProductAlreadyAdded.count + 1,
        };
        state.cartItems.set(product.id, modifiedProduct);
      } else {
        state.cartItems.set(product.id, { ...product, count: 1 });
      }
    },
    DELETE_PRODUCT_IN_CART(state, id) {
      state.cartItems.delete(id);
    },
    DEC_TO_CART(state, id) {
      const currentProduct = state.cartItems.get(id);

      if (currentProduct.count > 0) {
        currentProduct.count = currentProduct.count - 1;
      }
    },
    ADD_TO_CART(state, id) {
      const currentProduct = state.cartItems.get(id);
      currentProduct.count = currentProduct.count + 1;
    },
    SEARCH_ITEMS(state, text) {
      state.searchedItems = text;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();

      commit("SET_PRODUCTS", data);
    },
    async getPromotion({ commit }) {
      const response = await fetch("http://localhost:3000/promotion");
      const data = await response.json();

      commit("SET_PROMOTION", data);
    },
    async getProductDetails({ commit }, id) {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      const data = await response.json();

      commit("SET_DETAIL_PRODUCT", data);
    },
    async addProduct({ dispatch }, product) {
      await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      dispatch("getProducts");
    },
    async addPromotion({ dispatch }, product) {
      await fetch("http://localhost:3000/promotion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      dispatch("getPromotion");
    },
    async setCategory(context, value) {
      const query = value !== null ? `?category=${value}` : "";

      const response = await fetch(`http://localhost:3000/products${query}`);
      const data = await response.json();

      context.commit("SET_PRODUCTS", data);
      context.commit("SET_CATEGORY", value);
    },
    async deleteProduct ({commit},id) {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE"
      })
    }
  },
});
