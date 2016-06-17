import config from '../config';

import gulp from 'gulp';
import del from 'del';
import cache from 'gulp-cache';

export function cleanTask (cb) {
    del([config.root.dest], {
        dot: true
    }).then( paths => cb )

    cache.clearAll(cb)
}

gulp.task('clean', cleanTask)
