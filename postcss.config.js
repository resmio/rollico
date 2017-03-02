// This might be interesting
// https://github.com/ai/browserslist#custom-usage-data
module.exports = {
  plugins: [
    // ⚠️ order matters!!!
    require('postcss-import')({root: 'src'}),
    require('postcss-nesting')({}),
    require('postcss-custom-properties')({variables: require('./src/variables')}),
    require('postcss-calc')({}),
    require('postcss-color-function')({}),
    require('autoprefixer')({browsers: '> 5%'}),
    require('cssnano')({})
  ]
}
