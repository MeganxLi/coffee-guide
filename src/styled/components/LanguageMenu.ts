import { styled } from '@linaria/react'

import Colors from '../utils/color'

export const LanguageButton = styled.button`
  color: ${Colors.Primary[900]};
  display: flex;
`

export const LanguageMenuBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LanguageNavBlock = styled.nav`
  display: block;
  position: absolute;
  width: 200px;
  top: 2rem;
  right: 0rem;
  transform: 0.5s;
  cursor: pointer; 
  display: none;
  padding-top: 1rem;
  border: 1px solid #f3f3f4;
  border-radius: 16px;
  z-index: 100;

  ${LanguageMenuBlock}:hover & {
    display: block;
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
    border-radius: 0.5rem 0.5rem 0 0;
  }
  &:last-child{
    border-radius: 0 0 0.5rem 0.5rem;
  }
`
