<template>
  <h1 class="title">
    {{ $t('common.welcome') }}
  </h1>
</template>

<script>
export default {
  name: "Test"
}
</script>

<style lang="scss" scoped>
.title {
  text-transform: uppercase;
  font-size: 50px;
  font-family: sans-serif;
}
</style>
