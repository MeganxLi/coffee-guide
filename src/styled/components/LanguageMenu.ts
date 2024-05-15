import { styled } from '@linaria/react'

export const LanguageButton = styled.button`
`

export const LanguageMenuBlock = styled.div`

`

export const LanguageNavBlock = styled.nav<LanguageNavType>`
  display: block;
  position: absolute;
  opacity: ${({ show }) => (show ? 0 : 1)};
  width: 200px;
  top: 1rem;
  right: 1rem;
  transform: 0.5s;
  background-color: #fff;
  border-radius: 0.5rem;
  cursor: pointer; 

  li{
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
    text-align: left;

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
