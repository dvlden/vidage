export default {
    root: {
        src: './src/',
        dest: './dist/'
    },

    tasks: {
        styles: {
            path: 'styles',
            extensions: ['sass', 'scss'],

            addons: {
                sass: {
                    outputStyle: 'expanded',
                    precision: 4
                },

                nano: {
                    discardComments: { removeAll: true },
                    discardUnused: false,
                    reduceIdents: false,
                    zindex: false
                },

                prefixer: {
                    browsers: ['last 3 version']
                }
            }
        },

        scripts: {
            path: 'scripts',
            extensions: ['js'],
            entry: 'Vidage.js',

            addons: {
                babelify: {
                    presets: ['es2015'],
                    plugins: ['add-module-exports']
                },

                browserify: {
                    debug: false,
                    standalone: 'Vidage'
                }
            }
        }
    }
}
