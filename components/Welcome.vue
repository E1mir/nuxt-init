<template>
  <section>
    <div class="app-container">
      <h1 class="title">
        {{ $t('common.welcome') }}
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Test'
}
</script>

<style lang="scss" scoped>
.title {
  text-transform: uppercase;
  font-size: 50px;
  margin-bottom: $spacing-md;
}
</style>
