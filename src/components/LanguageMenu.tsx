import * as Icon from 'react-feather'

import LanguageList from '../constants/LanguageList'
import {
  LanguageButton, LanguageButtonCheckbox, LanguageMenuBlock, LanguageNavBlock, LanguageNavItemStyle,
} from '../styled/components/LanguageMenu'

interface Props {
  language: string,
  onChange: ((value: string) => void)
}

const LanguageMenu = ({ language, onChange }: Props) => (
  <LanguageMenuBlock>
    <LanguageButton htmlFor="nav-toggle">
      <Icon.Globe />
    </LanguageButton>
    <LanguageButtonCheckbox type="checkbox" id="nav-toggle" />

    <LanguageNavBlock className="language-nav">
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

export default LanguageMenu
