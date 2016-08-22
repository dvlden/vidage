import config from '../config'
import handleErrors from '../helpers/handleErrors'

import gulp from 'gulp'
import path from 'path'
import newer from 'gulp-newer'
import sass from 'gulp-sass'
import nano from 'gulp-cssnano'
import prefixer from 'gulp-autoprefixer'

const paths = {
    src: path.join(config.root.src, config.tasks.styles.path, `/**/*.${config.tasks.styles.extensions}`),
    dest: path.join(config.root.dest, config.tasks.styles.path)
}

export function stylesTask () {
    gulp.src(paths.src)
        .pipe(newer(paths.dest))
        .pipe(sass(config.tasks.styles.sass))
        .on('error', handleErrors)
        .pipe(nano(config.tasks.styles.nano))
        .pipe(prefixer(config.tasks.styles.autoprefixer))
        .pipe(gulp.dest(`${paths.dest}`))
}

gulp.task('styles', stylesTask)
