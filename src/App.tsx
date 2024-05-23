import { useEffect, useState } from 'react'

import { useTranslation, I18nextProvider } from 'react-i18next'

import LanguageMenu from './components/LanguageMenu'
import './styled/base/Reset.css'
import './styled/base/Base.css'
import { CoffeeList, CoffeeListTitle } from './constants/CoffeeList'
import LanguageIosEnum from './constants/EnumType'
import i18n from './i18n'
import {
  CoffeeCapFillingStyle,
  CoffeeCapLidCoverStyle,
  CoffeeCapLidMiddleStyle,
  CoffeeCapLidStrawStyle,
  CoffeeCapStyle,
  InnerContentStyle,
  InnerStyle,
  LogoStyle,
  MenuListStyle,
  MenuStyle,
  MenuTextStyle,
  MenuTitleStyle,
  WrapperStyle,
  SelectCoffeeStyle,
} from './styled/page'

const App = () => {
  const { t } = useTranslation()

  const [lang, setLang] = useState<string>(LanguageIosEnum.JA)
  const [selectCoffee, setSelectCoffee] = useState<string>(CoffeeList[0].name)

  const clickCoffee = (coffeeName: string) => setSelectCoffee(coffeeName)
  useEffect(() => {
    if (lang !== '') i18n.changeLanguage(lang)
  }, [lang])

  return (
    <I18nextProvider i18n={i18n}>
      <WrapperStyle>
        <LogoStyle>Coffee</LogoStyle>
        <LanguageMenu language={lang} onChange={(value) => { setLang(value) }} />
      </WrapperStyle>
      <InnerContentStyle>
        <InnerStyle>
          <CoffeeCapStyle>
            <CoffeeCapLidStrawStyle />
            <CoffeeCapLidCoverStyle />
            <CoffeeCapLidMiddleStyle />
            <CoffeeCapFillingStyle />
            <SelectCoffeeStyle>{t(`Coffee.${selectCoffee}`)}</SelectCoffeeStyle>
          </CoffeeCapStyle>
          <MenuStyle>
            <h4>Menu</h4>
            <MenuListStyle>
              <div>
                <MenuTitleStyle>{CoffeeListTitle[0]}</MenuTitleStyle>
                {CoffeeList.map((item) => (
                  <MenuTextStyle
                    selected={selectCoffee === item.name}
                    key={item.name}
                    onClick={() => clickCoffee(item.name)}
                  >
                    {t(`Coffee.${item.name}`)}
                  </MenuTextStyle>
                ))}
              </div>
              <div>
                <MenuTitleStyle>{CoffeeListTitle[1]}</MenuTitleStyle>
                {CoffeeList.map((item) => (
                  <MenuTextStyle key={item.name} onClick={() => clickCoffee(item.name)}>
                    {item.SML}
                  </MenuTextStyle>
                ))}
              </div>
              <div>
                <MenuTitleStyle>{CoffeeListTitle[2]}</MenuTitleStyle>
                {CoffeeList.map((item) => (
                  <MenuTextStyle key={item.name} onClick={() => clickCoffee(item.name)}>
                    {item.LRG}
                  </MenuTextStyle>
                ))}
              </div>
            </MenuListStyle>
          </MenuStyle>
        </InnerStyle>
      </InnerContentStyle>

    </I18nextProvider>
  )
}

export default App
