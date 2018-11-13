module.exports = {
  rootUrl: 'http://yandex.ru',
  gridUrl: 'http://127.0.0.1:4444/wd/hub',

  calibrate: false,

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ["disable-gpu", "no-sandbox"]
        }
      }
    }
  },
  system: {
    plugins: {
      'html-reporter/gemini': {
        enabled: true,
        path: 'out/gemini-reports',
        defaultView: 'all',
      }
    }
  }
};
