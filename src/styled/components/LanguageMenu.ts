import { styled } from '@linaria/react'

import Colors from '../utils/Colors'
import { rwd } from '../utils/Mixins'

export const LanguageButton = styled.label`
  color: ${Colors.Primary[900]};
  display: flex;
`

export const LanguageButtonCheckbox = styled.input`
  display: none;
`

export const LanguageMenuBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NavBorderRadius = 0.5
export const LanguageNavBlock = styled.nav`
  display: block;
  position: absolute;
  width: 200px;
  top: 2rem;
  right: 0rem;
  cursor: pointer; 
  display: none;
  padding-top: 1rem;
  z-index: 100;

  ${LanguageMenuBlock}:hover & {
    display: block;
  }
  
  ${rwd('md')}{
    ${LanguageButtonCheckbox}:checked~ &{
     display: block;
    }
    ${LanguageButtonCheckbox}:not(:checked)~ &{
     display: none;
    }
  }
  
  
  


  ul{
    border: 1px solid #f3f3f4;
    border-radius: ${`${NavBorderRadius}rem`};
  }
`

export const LanguageNavItemStyle = styled.li<LanguageNavItemType>`
  text-decoration: none;
  color: ${({ $checked }) => ($checked ? Colors.Black[900] : Colors.Black[700])} ;
  padding: 15px 20px;
  display: block;
  text-align: left;
  background-color: ${Colors.White[900]};
  font-weight: ${({ $checked }) => ($checked ? '700' : 'none')};

  &:hover{
    background-color: ${Colors.Primary[900]};
    color: ${Colors.White[500]};
  }
  &:first-child{
    border-radius: ${`${NavBorderRadius}rem ${NavBorderRadius}rem 0 0`};
  }
  &:last-child{
    border-radius: ${`0 0 ${NavBorderRadius}rem ${NavBorderRadius}rem`};
  }
`
