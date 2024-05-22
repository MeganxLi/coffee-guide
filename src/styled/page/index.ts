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

export const CoffeeCapStyle = styled.div`
  /* position: absolute; */
`

export const CoffeeCapBorder = styled.div`
  border-bottom: 2px solid ${Colors.Black.transparency};
`

export const CoffeeCapLidStrawStyle = styled(CoffeeCapBorder)`
  position: relative;
  background-color: ${Colors.White[500]};
  width: 60px;
  height: 14px;
  margin-left: 15px;
  border-radius: 100px 25px 0 0;
`
export const CoffeeCapLidCoverStyle = styled(CoffeeCapBorder)`
  position: relative;
  background-color: ${Colors.White[500]};
  width: 200px;
  height: 20px;
  border-radius: 5px 5px 0 0;
`
export const CoffeeCapLidMiddleStyle = styled.div`
  background-color: ${Colors.White[500]};
  position: relative;
  z-index: 25;
  width: 250px;
  margin-left: -25px;
  height: 35px;
  border-radius: 10px 10px 5px 5px;
  clip-path: polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%);
`
export const CoffeeCapFillingStyle = styled.div`
  position: relative;
  z-index: -23;
  background-color: ${Colors.White[700]};
  border-top: 4px solid ${Colors.Black.transparency};
  width: 230px;
  height: 280px;
  margin-top: -1px;
  margin-left: -15px;
  clip-path: polygon(0 0%, 100% 0, 88% 100%, 14% 100%);
`
