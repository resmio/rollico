module.exports = {
  output: 'build/test.css',
  plugins: [
    require('postcss-import')({root: 'src'}),
    require('autoprefixer')({browsers: '> 5%', })
  ]
}
