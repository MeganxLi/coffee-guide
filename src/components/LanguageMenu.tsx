import { useRef, useState } from 'react';
import LanguageList from '../constants/LanguageList'
import * as Icon from 'react-feather';
import { LanguageNavBlack } from '../styled/components/LanguageMenu';

const LanguageMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive);

  return (
    <div>
      <button onClick={onClick}>
        <Icon.Globe />
      </button>

      <LanguageNavBlack ref={dropdownRef} >
        <ul>
          {LanguageList.map((item: string) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </LanguageNavBlack >
    </div>
  )
}

export default LanguageMenu
