<template>
  <section class="error">
    <div class="error-wrapper">
      <h2 class="error__code">
        Error: {{ error.statusCode }}
      </h2>
      <p class="error__message">
        {{ error.message }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'blank',
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &-wrapper {
    text-align: center;
  }

  &__code {
    font-size: 30px;
    font-weight: bold;
  }

  &__message {
    font-size: 16px;
    margin-top: $spacing-sm;
  }
}
</style>
