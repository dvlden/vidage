import gulp from 'gulp'
import sequence from 'gulp-sequence'

export function defaultTask (cb) {
    sequence(
        'scripts',
        'styles',
        cb
    )
}

gulp.task('default', defaultTask)
