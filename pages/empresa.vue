<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-lg font-bold">Empresa</h1>
      <p>
        {{ services }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [],
    };
  },
  // middleware: 'auth',
  async fetch() {
    this.services = await this.axios.get('https://jsonplaceholder.typicode.com/users')
  },
};
</script>