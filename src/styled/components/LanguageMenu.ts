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

  ${LanguageMenuBlock}:hover & {
    display: block;
  }
 
  li{
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
    text-align: left;
    background-color: #fff;

    &:hover{
      background-color: pink;
    }
    &:first-child{
      border-radius: 0.5rem 0.5rem 0 0;
    }
    &:last-child{
      border-radius: 0 0 0.5rem 0.5rem;
    }
  }
`
