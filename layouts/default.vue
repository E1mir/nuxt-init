<template>
  <div class="layout">
    <TheHeader class="layout__header" />
    <Nuxt class="layout__main" />
    <TheFooter class="layout__footer" />
  </div>
</template>

<script>
import TheHeader from '~/components/core/TheHeader.vue'
import TheFooter from '~/components/core/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  &__header, &__footer {
    flex-shrink: 0;
  }

  &__main {
    flex-grow: 1
  }
}
</style>
