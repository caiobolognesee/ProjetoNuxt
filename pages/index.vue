<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-lg font-bold">Home</h1>
    </div>
    {{ $store.state.user }}
  </div>
</template>

<script>
export default {
  asyncData({ $config }) {
    console.log($config);
  },
  mounted() {
    console.log(this.$config.facebook_api_key);
    console.log(this.$name("Caio"));
    console.log(this.$dayjs().format());
  },
  head() {
    return {
      titleTemplate: "%s - Home",
    };
  },
};
</script>