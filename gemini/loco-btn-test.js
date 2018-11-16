gemini.suite('button', function(suite) {
    suite
        .setUrl('/sinara.frontend/dist/locomotive.html')
        .setCaptureElements('.btn')
        .before(function(actions, find) {
            this.button = find('.btn');
        })
        .capture('plain')
        .capture('hovered', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find) {
            actions.mouseDown(this.button);
        })
        .capture('clicked', function(actions, find) {
            actions.mouseUp(this.button);
        });
});