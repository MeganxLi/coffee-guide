import { useRef } from 'react'

import * as Icon from 'react-feather'

import LanguageList from '../constants/LanguageList'
import {
  LanguageButton, LanguageMenuBlock, LanguageNavBlock, LanguageNavItemStyle,
} from '../styled/components/LanguageMenu'
import useDetectOutsideClick from '../utils/useDetectOutsideClick'

interface Props {
  language: string,
  onChange: ((value: string) => void)
}

const LanguageMenu = ({ language, onChange }: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  const onClickDropdown = () => setIsActive(!isActive)

  return (
    <LanguageMenuBlock ref={dropdownRef}>
      <LanguageButton type="button" onClick={onClickDropdown}>
        <Icon.Globe />
      </LanguageButton>
      <LanguageNavBlock className="language-nav" $active={isActive}>
        <ul>
          {LanguageList.map((item: LanguageListType) => (
            <LanguageNavItemStyle
              key={item.ios}
              onClick={() => {
                onChange(item.ios)
              }}
              className={language && '2'}
              $checked={language === item.ios}
            >
              {item.name}
            </LanguageNavItemStyle>
          ))}
        </ul>
      </LanguageNavBlock>
    </LanguageMenuBlock>
  )
}

export default LanguageMenu
