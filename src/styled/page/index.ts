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
export const InnerStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
`

export const MenuStyle = styled.div`
  h4{
    font-size: 2rem;
    color: ${Colors.Primary[900]};
    margin-bottom: 1.8rem;
  }
`

export const MenuTitleStyle = styled.p`
  color: ${Colors.Black[700]};  
  margin-bottom: 0.5rem;
`

export const MenuListStyle = styled.div`
  display: grid;
  grid-template-columns: max-content repeat(2, 3rem);
  line-height: 1.5rem;
  gap: 0.8rem;
`
