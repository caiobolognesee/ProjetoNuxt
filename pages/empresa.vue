<template>
  <div>
    <h1 class="text-lg font-bold">Empresa</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s - Empresa',
    }
  },
  middleware: 'auth'
};
</script>