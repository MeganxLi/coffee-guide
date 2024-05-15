import { useRef, useState } from 'react'

import * as Icon from 'react-feather'

import LanguageList from '../constants/LanguageList'
import { LanguageMenuBlock, LanguageNavBlock } from '../styled/components/LanguageMenu'

interface Props {
  language: string,
  onChange: ((value: string) => void)
}

const LanguageMenu = ({ language, onChange }: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  return (
    <LanguageMenuBlock>
      <button onClick={onClick} type="button">
        <Icon.Globe />
      </button>

      <LanguageNavBlock ref={dropdownRef} show={isActive}>
        <ul>
          {LanguageList.map((item: LanguageListType) => (
            <li
              key={item.ios}
              onClick={() => {
                onChange(item.ios)
              }}
              className={language && '2'}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </LanguageNavBlock>
    </LanguageMenuBlock>
  )
}

export default LanguageMenu
