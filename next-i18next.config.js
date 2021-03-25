const i18nConfig = require('./next.config')

module.exports = {
  i18n: i18nConfig,
  serializeConfig: false,
  react: {
    useSuspense: false,
  },
}
