import config from '../config'
import handleErrors from '../helpers/handleErrors'

import gulp from 'gulp'
import path from 'path'
import browserify from 'browserify'
import babelify from 'babelify'
import rollup from 'gulp-rollup'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import uglify from 'gulp-uglify'
import stripDebug from 'gulp-strip-debug'

const task = config.tasks.scripts
const paths = {
    src: path.join(config.root.src, task.path, `/**/*.${config.tasks.scripts.extensions}`),
    dest: path.join(config.root.dest, task.path)
}

export function scriptsTask () {
    const entryFile = task.entry
    const entryPoint = path.join(config.root.src, task.path, entryFile)

    browserify(entryPoint, task.browserify)
        .transform(babelify, task.babelify)
        .bundle()
        .on('error', handleErrors)
        .pipe(source(entryFile))
        .pipe(buffer())
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest))
}

gulp.task('scripts', scriptsTask)
