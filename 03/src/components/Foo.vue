<template>
  <div class="foo">
    <h1 @click="onHandleClick">Foo</h1>
    <p>Component</p>
  </div>
</template>

<script>
export default {
  methods: {
    onHandleClick() {
      alert('foo');
    }
  },
}
</script>

<style>
.foo {
  background: yellowgreen;
}
</style>
