import { Base64 } from 'js-base64'

export default {
  install: (app) => {
    app.config.globalProperties.$btoa = Base64.encode
    app.config.globalProperties.$atob = Base64.decode
  }
}
