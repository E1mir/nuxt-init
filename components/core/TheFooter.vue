<template>
  <footer class="footer">
    {{ $t('common.copyright', {year: currentYear}) }}
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
