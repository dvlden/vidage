import notify from 'gulp-notify'

export default function (err, cb) {
    notify.onError(err.toString().split(': ').join(':\n')).apply(this, arguments)

    if (typeof this.emit === 'function') {
        this.emit('end')
    }
}
