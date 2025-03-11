export default {
  install(app) {
    app.config.globalProperties.$getOS = () => {
      let ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) ||
                   (isAndroid && !/(?:Mobile)/.test(ua)) ||
                   (isFireFox && /(?:Tablet)/.test(ua)),
        isIPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isIPhone && !isAndroid && !isSymbian && !isWindowsPhone;

      return {
        isTablet,
        isIPhone,
        isAndroid,
        isPc
      };
    };
  }
};
