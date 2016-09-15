import config from '../config'
import gulp from 'gulp'
import util from 'gulp-util'
import path from 'path'
import newer from 'gulp-newer'
import sass from 'gulp-sass'
import nano from 'gulp-cssnano'
import rename from 'gulp-rename'
import prefixer from 'gulp-autoprefixer'

const task = config.tasks.styles
const addons = task.addons
const paths = {
    src: path.join(
        config.root.src,
        task.path,
        `/**/*.{${task.extensions}}`
    ),
    dest: path.join(
        config.root.dest,
        task.path
    )
}

export function stylesTask () {
    gulp.src(paths.src)
        .pipe(newer(paths.dest))
        .pipe(sass(addons.sass))
        .on('error', e => util.log(e))
        .pipe(prefixer(addons.autoprefixer))
        .pipe(gulp.dest(paths.dest))
        .pipe(nano(addons.nano))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.dest))
}

gulp.task('styles', stylesTask)
