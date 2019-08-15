export default function({
  isHMR,
  req,
  store
}) {
  if (isHMR) return
  if (process.server) {
    const locale = req.cookies.lang || 'zh-HK'
    store.commit('SET_LANG', locale)
  }

  // console.log(Date.now(), 'i18n')
}
