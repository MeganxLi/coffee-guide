import { useRef, useState } from 'react'

import * as Icon from 'react-feather'

import LanguageList from '../constants/LanguageList'
import { LanguageNavBlack } from '../styled/components/LanguageMenu'

interface Props {
  language: string,
  onChange: ((value: string) => void)
}

const LanguageMenu = ({ language, onChange }: Props) => {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  return (
    <div>
      <button onClick={onClick} type="button">
        <Icon.Globe />
      </button>

      <LanguageNavBlack ref={dropdownRef} show={isActive}>
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
      </LanguageNavBlack>
    </div>
  )
}

export default LanguageMenu
