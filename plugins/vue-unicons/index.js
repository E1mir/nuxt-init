import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'

import {
  nuxtLogo
} from './custom-icons'

import {
  uniSmileBeam
} from 'vue-unicons/dist/icons'

Unicon.add([
  uniSmileBeam,
  // Custom icons
  nuxtLogo
])

Vue.use(Unicon)
