var colors = require('./colors')

var defaults = {
  // colors
  actionColor: colors.pacificBlue,
  actionColorDarker: colors.easternBlue,
  baseFontColor: colors.emperor,
  hiperlinkColor: colors.oceanBlue,
  // borders
  baseBorderColor: colors.alto,
  baseBorder: '1px solid ' + colors.alto,
  baseBorderRadius: '4px',
  // background colors
  baseBackgroundColor: colors.white,
  secondaryBackgroundColor: colors.whiteSand,
  // typography
  baseFontSize: '16px',
  baseLineHeight: '1.5',
  headingLineHeight: '1.2',
  baseFontFamily: '"Open Sans", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif',
  headingFontFamily: '"Open Sans", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif',
  headingFontSize: '24px',
  // animations
  baseDuration: '150ms',
  baseTiming: 'ease',
  // forms
  formBoxShadow: 'inset 0 1px 3px ' + colors.gallery,
  formBoxShadowFocus: 'inset 0 1px 3px ' + colors.gallery + ', 0 0 5px ' + colors.charlotte
}

module.exports = defaults
