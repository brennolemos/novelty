const gulp = require('gulp');
const sequence = require('run-sequence');

require('./gulpTasks/app');
require('./gulpTasks/deps');

gulp.task('default', () => {
    sequence('deps', 'app', 'monitorarMudancas');
    // gulp.start('deps', 'app', 'servidor');
});