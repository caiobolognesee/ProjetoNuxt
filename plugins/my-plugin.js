export default (context, inject) => {
  inject('name', 'Caio')
  inject('name', (name) => `ola ${name}`)
};