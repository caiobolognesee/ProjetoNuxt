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
  head() {
    return {
      titleTemplate: '%s - Home',
    }
  },
};
</script>