var colors = require('./colors')

var defaults = (function(){
    // Stuff we need to reference later
    var baseBorderColor = colors.alto
    var formBoxShadow = 'inset 0 1px 3px ' + colors.gallery
    return {
      // colors
      actionColor: colors.pacificBlue,
      actionColorDarker: colors.easternBlue,
      baseFontColor: colors.emperor,
      headingFontColor: colors.blueBayoux,
      hiperlinkColor: colors.oceanBlue,
      // borders
      baseBorderColor: baseBorderColor,
      baseBorder: '1px solid ' + baseBorderColor,
      baseBorderRadius: '4px',
      // background colors
      baseBackgroundColor: colors.white,
      secondaryBackgroundColor: colors.whiteSand,
      // typography
      baseFontSize: '16px',
      baseLineHeight: '1.5',
      headingLineHeight: '2',
      headingFontWeight: '400',
      baseFontFamily: '"Open Sans", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif',
      headingFontFamily: '"Open Sans", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif',
      headingFontSize: '28px',
      // animations
      baseDuration: '150ms',
      baseTiming: 'ease',
      // forms
      formBoxShadow: formBoxShadow,
      formBoxShadowFocus: formBoxShadow + ', 0 0 5px ' + colors.charlotte,
      textAreaPadding: '5px'
    }
})()

module.exports = defaults
