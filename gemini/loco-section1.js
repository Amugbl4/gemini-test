gemini.suite('section1', function (suite) {
    suite
        .setUrl('/sinara.frontend/dist/locomotive.html')
        .setCaptureElements('.section.section--equal-v.pb-0')
        .capture('plain', function (actions) {
            actions.wait(2000);
        })
        .setCaptureElements('.btn.btn--outline-gray.mt-default-1.js-tab__btn')
                .capture('clicked', function (actions) { 
                    actions.click('.btn.btn--outline-gray.mt-default-1.js-tab__btn')
                    actions.wait(2000);
        })
    });
