export const state = () => ({
  width: 1366
})

export const mutations = {
  SET_WIDTH (state, width) {
    state.width = width
  }
}

export const getters = {
  xs: (state) => state.width < 576,
  sm: (state) => state.width >= 576 && state.width < 768,
  md: (state) => state.width >= 768 && state.width < 992,
  lg: (state) => state.width >= 992 && state.width < 1200,
  xl: (state) => state.width >= 1200 && state.width < 1400,
  xxl: (state) => state.width >= 1400,
  smAndDown: (state) => state.width < 768,
  mdAndDown: (state) => state.width < 992,
  lgAndDown: (state) => state.width < 1200,
  xlAndDown: (state) => state.width < 1400,
  smAndUp: (state) => state.width >= 768,
  mdAndUp: (state) => state.width >= 992,
  lgAndUp: (state) => state.width >= 1200,
  xlAndUp: (state) => state.width >= 1400,
  gapSize: (state) => (state.width < 968 ? 16 : 24)
}
