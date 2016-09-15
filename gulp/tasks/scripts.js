import config from '../config'
import gulp from 'gulp'
import util from 'gulp-util'
import path from 'path'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import stripDebug from 'gulp-strip-debug'

const task = config.tasks.scripts
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

export function scriptsTask () {
    const entryPoint = path.join(config.root.src, task.path, task.entry)

    browserify(entryPoint, addons.browserify)
        .transform(babelify, addons.babelify)
        .bundle()
        .on('error', e => util.log(e))
        .pipe(source(task.entry))
        .pipe(buffer())
        // .pipe(stripDebug())
        .pipe(gulp.dest(paths.dest))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.dest))
}

gulp.task('scripts', scriptsTask)
