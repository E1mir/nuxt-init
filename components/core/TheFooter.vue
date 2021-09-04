<template>
  <footer class="footer">
    <div class="app-container">
      {{ $t('common.copyright', {year: currentYear}) }}
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

</style>
