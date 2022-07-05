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
  mounted() {
    console.log(this.$name("Caio"))
    console.log(this.$dayjs().format())
  },
  head() {
    return {
      titleTemplate: '%s - Home',
    }
  },
};
</script>