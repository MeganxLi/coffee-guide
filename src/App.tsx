import { useEffect, useState } from 'react'

import { useTranslation, I18nextProvider } from 'react-i18next'

import LanguageMenu from './components/LanguageMenu'
import './styled/base/Reset.css'
import './styled/base/Base.css'
import CoffeeList from './constants/CoffeeList'
import LanguageIosEnum from './constants/EnumType'
import i18n from './i18n'

const App = () => {
  const { t } = useTranslation()

  const [lang, setLang] = useState<string>(LanguageIosEnum.JA)

  useEffect(() => {
    if (lang !== '') i18n.changeLanguage(lang)
  }, [lang])

  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <LanguageMenu language={lang} onChange={(value) => { setLang(value) }} />
        {CoffeeList.map((item) => <p key={item.name}>{t(`Coffee.${item.name}`)}</p>)}
      </div>

    </I18nextProvider>
  )
}

export default App
