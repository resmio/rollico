// This might be interesting
// https://github.com/ai/browserslist#custom-usage-data
module.exports = {
  plugins: [
    require('postcss-custom-properties')({variables: require('./src/variables')}),
    require('postcss-import')({root: 'src'}),
    require('autoprefixer')({browsers: '> 5%', })
  ]
}
