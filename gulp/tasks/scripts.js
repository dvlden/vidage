import config from '../config';

import gulp from 'gulp';
import util from 'gulp-util';
import path from 'path';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import stripDebug from 'gulp-strip-debug';
import notify from 'gulp-notify';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

const PATH = {
    src: path.join(config.root.src, config.tasks.scripts.path, `/**/*.${config.tasks.scripts.extensions}`),
    dest: path.join(config.root.dest, config.tasks.scripts.path)
}

export function scriptsTask () {
    browserify({
        debug: true,
        entries: path.join(config.root.src, config.tasks.scripts.path, 'Vidage.js'),
        standalone: 'Vidage'
    })
        .transform(babelify, { presets: ['es2015'], plugins: ['add-module-exports'] })
        .bundle()
        .on('error', e => util.log(e))
        .pipe(source('Vidage.js'))
        .pipe(buffer())
        // .pipe(gulp.dest(PATH.dest))
        .pipe(stripDebug())
        // .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(notify({
            onLast: true,
            title: 'Task complete!',
            message: 'Finished compiling, merging and uglifying scripts.'
        }))
        .pipe(gulp.dest(PATH.dest))
}

gulp.task('scripts', scriptsTask)
