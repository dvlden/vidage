import autoprefixer from 'autoprefixer'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const helpers = {
  package: require('./package.json'),
  isProduction: () => {
    return process.env.MODE === 'production'
  },
  minifyInProduction: () => {
    return helpers.isProduction() && terser()
  },
  libName: (name) => (
    name.replace(/@.*\//, '').split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('')
  )
}

export default {
  input: 'src/scripts/vidage.js',

  plugins: [
    postcss({
      extract: true,
      extensions: ['.scss'],
      minimize: helpers.isProduction(),
      plugins: [
        autoprefixer()
      ]
    }),
    babel({ babelHelpers: 'runtime' }),
    resolve(),
    commonjs(),
    helpers.minifyInProduction()
  ],

  output: [
    {
      file: helpers.package.main,
      format: 'umd',
      name: helpers.libName(helpers.package.name)
    }
  ]
}
