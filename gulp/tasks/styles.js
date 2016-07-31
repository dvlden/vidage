import config from '../config';

import gulp from 'gulp';
import util from 'gulp-util';
import path from 'path';
import newer from 'gulp-newer';
// import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import cssNano from 'gulp-cssnano';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';

const PATH = {
    src: path.join(config.root.src, config.tasks.styles.path, `/**/*.${config.tasks.styles.extensions}`),
    dest: path.join(config.root.dest, config.tasks.styles.path)
}

export function stylesTask () {
    gulp.src(PATH.src)
        .pipe(newer(PATH.dest))
        // .pipe(sourcemaps.init())
        .pipe(sass(config.tasks.styles.sass).on('error', e => util.log(e)))
        .pipe(cssNano(config.tasks.styles.nano))
        .pipe(autoprefixer(config.tasks.styles.autoprefixer))
        // .pipe(sourcemaps.write())
        .pipe(notify({
            onLast: true,
            title: 'Task complete!',
            message: 'Finished compiling, merging and minifying styles.'
        }))
        .pipe(gulp.dest(`${config.root.dest}/${config.tasks.styles.path}`))
}

gulp.task('styles', stylesTask)
