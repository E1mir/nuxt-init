<template>
  <section>
    <div class="app-container">
      <h1 class="title">
        {{ $t('common.welcome') }}
        <Unicon
          class="title__icon"
          name="smile-beam"
          height="40"
          width="40"
          hover-fill="#00DC82"
        />
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
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 50px;
  margin-bottom: $spacing-md;
  &__icon {
    margin-left: 5px;
    cursor: pointer;
  }
}
</style>
