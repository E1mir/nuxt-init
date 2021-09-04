<template>
  <footer class="footer">
    <div class="app-container">
      <div class="footer__left">
        <span>
          {{ $t('common.copyright', {year: currentYear}) }}
        </span>
        <div class="change-language">
          <select
            v-model="locale"
            @change="onLanguageSwitch"
          >
            <option
              v-for="l in appLocales"
              :key="l.code"
              :value="l.code"
            >
              {{ l.code }}
            </option>
          </select>
        </div>
      </div>
      <div class="footer__right" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',

  data () {
    return {
      locale: this.$i18n.locale
    }
  },

  computed: {
    currentYear () {
      return new Date().getFullYear()
    },
    appLocales () {
      return this.$i18n.locales
    }
  },

  methods: {
    onLanguageSwitch () {
      this.$i18n.setLocale(this.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  &__left {
    display: flex;
    .change-language {
      margin-left: 30px;
      select {
        outline: none;
      }
    }
  }
}
</style>
