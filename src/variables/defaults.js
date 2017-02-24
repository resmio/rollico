var colors = require('./colors')

var defaults = {
  // colors
  actionColor: colors.pacificBlue,
  actionColorDarker: colors.easternBlue,
  baseFontColor: colors.mattherhorn,
  hiperlinkColor: colors.oceanBlue,
  // borders
  baseBorderColor: colors.alto,
  baseBorder: '1px solid ' + this.baseBorderColor,
  baseBorderRadius: '4px',
  // background colors
  baseBackgroundColor: colors.white,
  secondaryBackgroundColor: colors.whiteSand,
  // typography
  baseFontSize: '16px',
  baseFontFamily: '"Open Sans", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif',
  // animations
  baseDuration: '150ms',
  baseTiming: 'ease',
  // forms
  formBoxShadow: 'inset 0 1px 3px ' + colors.gallery
}

module.exports = defaults
