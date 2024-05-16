import * as Icon from 'react-feather'

import LanguageList from '../constants/LanguageList'
import { LanguageButton, LanguageMenuBlock, LanguageNavBlock } from '../styled/components/LanguageMenu'

interface Props {
  language: string,
  onChange: ((value: string) => void)
}

const LanguageMenu = ({ language, onChange }: Props) => (
  <LanguageMenuBlock>
    <LanguageButton type="button">
      <Icon.Globe />
    </LanguageButton>

    <LanguageNavBlock className="language-nav">
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

export default LanguageMenu
