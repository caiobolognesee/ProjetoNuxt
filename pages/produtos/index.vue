<template>
  <div>
    <v-form>
      <div>
        {{ products }}
        <!-- colocar um auto complete para selecionar o produto e ir para a pagina dele -->
      </div>
    </v-form>
  </div>
</template>


<script>
export default {
  data() {},
  async asyncData() {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("promise solved");
      }, 10000);
    });
    return {
      products: [{ name: "product-a" }, { name: "product-b" }],
    };
  },
  methods: {},
};
</script>