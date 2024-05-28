import { useLayoutEffect, useState } from 'react'

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
  CoffeeCapFillingBorderStyle,
  CoffeeCapFillingMaskStyle,
  CoffeeMikeStyle,
  CoffeeMileFoamStyle,
  CoffeeButterStyle,
  CoffeeSyrupStyle,
  CoffeeMilkSpermStyle,
  CoffeeWaterStyle,
  CoffeeChocolateStyle,
  CoffeeEspressoStyle,
} from './styled/page/index'

const App = () => {
  const { t } = useTranslation()

  const [lang, setLang] = useState<string>(LanguageIosEnum.EN)
  const [selectCoffee, setSelectCoffee] = useState<CoffeeListType>(CoffeeList[0])

  const saveLocal = (saveLang?: string, coffee?: CoffeeListType) => {
    const langToSave = saveLang || lang
    const coffeeToSave = coffee || selectCoffee

    const dataToSave = {
      lang: langToSave,
      coffee: coffeeToSave,
    }

    localStorage.setItem('local', JSON.stringify(dataToSave))
  }

  const clickCoffee = (coffeeName: string) => {
    const filterCoffee = CoffeeList.filter((item) => item.name === coffeeName)[0]
    setSelectCoffee(filterCoffee)
    saveLocal(undefined, filterCoffee)
  }

  const changeLang = (value: string) => {
    i18n.changeLanguage(value)
    setLang(value)
    saveLocal(value)
  }

  useLayoutEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('local')!)
    const getLocalLang = getLocal?.lang || LanguageIosEnum.EN

    i18n.changeLanguage(getLocalLang)
    setLang(getLocalLang)
    setSelectCoffee(getLocal?.coffee || CoffeeList[0])
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      <WrapperStyle>
        <LogoStyle>Coffee</LogoStyle>
        <LanguageMenu language={lang} onChange={(value) => { changeLang(value) }} />
      </WrapperStyle>
      <InnerContentStyle>
        <InnerStyle>
          <CoffeeCapStyle>
            <CoffeeCapLidStrawStyle />
            <CoffeeCapLidCoverStyle />
            <CoffeeCapLidMiddleStyle />
            <CoffeeCapFillingStyle>
              <CoffeeCapFillingBorderStyle />
              <CoffeeCapFillingMaskStyle>
                <CoffeeChocolateStyle $flex_grow={selectCoffee.chocolate || 0} $light_color>{t('Ingredients.chocolate')}</CoffeeChocolateStyle>
                <CoffeeEspressoStyle $flex_grow={selectCoffee.espresso || 0} $light_color>{t('Ingredients.espresso')}</CoffeeEspressoStyle>
                <CoffeeSyrupStyle $flex_grow={selectCoffee.syrup?.number || 0} $light_color>{t(`Ingredients.${selectCoffee.syrup?.name}`)}</CoffeeSyrupStyle>
                <CoffeeWaterStyle $flex_grow={selectCoffee.water || 0} $light_color>{t('Ingredients.water')}</CoffeeWaterStyle>
                <CoffeeMilkSpermStyle $flex_grow={selectCoffee.milkSperm || 0}>{t('Ingredients.milkSperm')}</CoffeeMilkSpermStyle>
                <CoffeeButterStyle $flex_grow={selectCoffee.butter || 0}>{t('Ingredients.butter')}</CoffeeButterStyle>
                <CoffeeMikeStyle $flex_grow={selectCoffee.milk || 0}>{t('Ingredients.milk')}</CoffeeMikeStyle>
                <CoffeeMileFoamStyle $flex_grow={selectCoffee.milkFoam || 0}>{t('Ingredients.milkFoam')}</CoffeeMileFoamStyle>
              </CoffeeCapFillingMaskStyle>
            </CoffeeCapFillingStyle>
            <SelectCoffeeStyle>{t(`Coffee.${selectCoffee.name}`)}</SelectCoffeeStyle>
          </CoffeeCapStyle>
          <MenuStyle>
            <h4>Menu</h4>
            <MenuListStyle>
              <div>
                <MenuTitleStyle>{CoffeeListTitle[0]}</MenuTitleStyle>
                {CoffeeList.map((item) => (
                  <MenuTextStyle
                    selected={selectCoffee.name === item.name}
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
                    {item.SML.toFixed(1)}
                  </MenuTextStyle>
                ))}
              </div>
              <div>
                <MenuTitleStyle>{CoffeeListTitle[2]}</MenuTitleStyle>
                {CoffeeList.map((item) => (
                  <MenuTextStyle key={item.name} onClick={() => clickCoffee(item.name)}>
                    {item.LRG.toFixed(1)}
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
