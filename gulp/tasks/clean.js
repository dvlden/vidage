import config from '../config'
import gulp from 'gulp'
import del from 'del'

export function cleanTask (cb) {
    del([ config.root.dest ]).then(paths => {
        cb()
    })
}

gulp.task('clean', cleanTask)
