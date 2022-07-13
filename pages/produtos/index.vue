<template>
  <div>
    <h1 class="text-lg font-bold">Produtos</h1>
    <v-form>
      <NuxtLink to="/produtos/product-a">Produto A</NuxtLink>
      <NuxtLink to="/produtos/product-b">Produto B</NuxtLink>
      <div
        v-for="product in products"
        :key="product.id"
        class="border-b border-gray-400 py-3"
      >
        {{ product.title }}
      </div>
    </v-form>
  </div>
</template>


<script>
export default {
  head() {
    return {
      titleTemplate: "%s - Produtos",
    };
  },
  async asyncData({ $axios }) {
    const products = await $axios.get("/posts");
    return {
      products,
    };
  },
};
</script>