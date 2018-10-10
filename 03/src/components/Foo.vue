<template>
  <div class="foo">
    <h1 @click="onHandleClick">Foo Component</h1>
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
