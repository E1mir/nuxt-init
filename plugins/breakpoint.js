export default ({ store }) => {
  window.onNuxtReady(() => {
    store.commit('app/SET_WIDTH', window.innerWidth)
    window.addEventListener(
      'resize',
      () => store.commit('app/SET_WIDTH', window.innerWidth),
      { passive: true }
    )
  })
}
