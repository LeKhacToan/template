import numbro from 'numbro'

export const jaLocale = {
  languageTag: 'ja-JP',
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal: () => '',
  currency: {
    symbol: '¥',
    position: 'prefix',
    code: 'YEN'
  },
  currencyFormat: {
    thousandSeparated: true,
    spaceSeparated: true,
    average: false,
    negative: 'sign'
  },
  formats: {
    fourDigits: {
      totalLength: 4,
      spaceSeparated: true,
      average: false
    },
    fullWithTwoDecimals: {
      output: 'currency',
      thousandSeparated: true,
      spaceSeparated: true,
      mantissa: 2
    },
    fullWithTwoDecimalsNoCurrency: {
      mantissa: 2,
      thousandSeparated: true
    },
    fullWithNoDecimals: {
      output: 'currency',
      thousandSeparated: true,
      spaceSeparated: true,
      mantissa: 0
    }
  }
} as numbro.NumbroLanguage
