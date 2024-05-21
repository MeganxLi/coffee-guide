import { styled } from '@linaria/react'

import Colors from '../utils/color'

export const WrapperStyle = styled.div`
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: space-between;
`

export const LogoStyle = styled.span`
  text-transform: Uppercase;
  color: ${Colors.Primary[900]};
  font-size: 2.25rem;
  font-weight: 700;
`

export const InnerContentStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
`

export const InnerStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  gap: 1rem;
  width: 80%;
  max-width: 1000px;
`

export const MenuStyle = styled.div`
  h4{
    font-size: 2rem;
    color: ${Colors.Primary[900]};
    margin-bottom: 1.8rem;
  }
`

export const MenuListStyle = styled.div`
  display: grid;
  grid-template-columns: 10rem repeat(2, 3rem);
  line-height: 1.5rem;
  gap: 2rem;

  div:not(:first-child){
    text-align: center;
  }
`

export const MenuTitleStyle = styled.p`
  color: ${Colors.Black[700]};  
  margin-bottom: 0.5rem;
`

export const MenuTextStyle = styled.p`
  line-height: 1.8rem;
`
