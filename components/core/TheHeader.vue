<template>
  <header class="header">
    <div class="app-container">
      <NuxtLink
        :to="localePath('/')"
        class="header__brand"
      >
        <img
          src="/nuxt-logo.svg"
          alt="Logo"
        >
      </NuxtLink>
    </div>
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
      margin-top: $spacing-xs;
      max-height: 40px;
    }
  }
}
</style>
