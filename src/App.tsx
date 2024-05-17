import { useEffect, useState } from 'react'

import { useTranslation, I18nextProvider } from 'react-i18next'

import LanguageMenu from './components/LanguageMenu'
import './styled/base/Reset.css'
import './styled/base/Base.css'
import { CoffeeList, CoffeeListTitle } from './constants/CoffeeList'
import LanguageIosEnum from './constants/EnumType'
import i18n from './i18n'
import {
  InnerStyle, LogoStyle, MenuListStyle, MenuStyle, MenuTitleStyle, WrapperStyle,
} from './styled/page'

const App = () => {
  const { t } = useTranslation()

  const [lang, setLang] = useState<string>(LanguageIosEnum.JA)

  useEffect(() => {
    if (lang !== '') i18n.changeLanguage(lang)
  }, [lang])

  return (
    <I18nextProvider i18n={i18n}>
      <WrapperStyle>
        <LogoStyle>Coffee</LogoStyle>
        <LanguageMenu language={lang} onChange={(value) => { setLang(value) }} />
      </WrapperStyle>
      <InnerStyle>
        <img src="https://img.freepik.com/free-vector/coffee-cup-tan-colour_78370-3051.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1715817600&semt=sph" alt="coffee img" />
        <MenuStyle>
          <h4>Menu</h4>
          <MenuListStyle>
            <div>
              <MenuTitleStyle>{CoffeeListTitle[0]}</MenuTitleStyle>
              {CoffeeList.map((item) => <p key={item.name}>{t(`Coffee.${item.name}`)}</p>)}
            </div>
            <div>
              <MenuTitleStyle>{CoffeeListTitle[1]}</MenuTitleStyle>
              {CoffeeList.map((item) => <p key={item.name}>{item.SML}</p>)}
            </div>
            <div>
              <MenuTitleStyle>{CoffeeListTitle[2]}</MenuTitleStyle>
              {CoffeeList.map((item) => <p key={item.name}>{item.LRG}</p>)}
            </div>
          </MenuListStyle>
        </MenuStyle>
      </InnerStyle>

    </I18nextProvider>
  )
}

export default App
