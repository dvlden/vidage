import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { uglify } from 'rollup-plugin-uglify'

const helpers = {
  package: require('./package.json'),
  isProduction: () => {
    return process.env.MODE === 'production'
  },
  uglifyInProduction: () => {
    return helpers.isProduction() && uglify()
  }
}

export default {
  input: 'src/scripts/vidage.js',

  plugins: [
    postcss({
      extract: true,
      extensions: ['.scss'],
      minimize: helpers.isProduction(),
      plugins: [
        require('autoprefixer')()
      ]
    }),
    resolve(),
    babel(),
    helpers.uglifyInProduction()
  ],

  output: [
    {
      file: helpers.package.main,
      format: 'umd',
      name: 'Vidage'
    }
  ]
}
