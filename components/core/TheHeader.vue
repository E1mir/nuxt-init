<template>
  <header class="header">
    <NuxtLink
      :to="localePath('/')"
      class="header__brand"
    >
      <img
        src="/nuxt-logo.svg"
        alt="Logo"
      >
    </NuxtLink>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style lang="scss" scoped>
.header {
  height: 70px;
  &__brand {
    img {
      max-height: 40px;
    }
  }
}
</style>
