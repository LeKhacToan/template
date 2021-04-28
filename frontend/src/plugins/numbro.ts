import numbro from 'numbro'
import { defaultObject } from 'utils'

numbro.registerLanguage(defaultObject.jaLocale)
numbro.setLanguage(defaultObject.jaLocale.languageTag)

export default numbro
