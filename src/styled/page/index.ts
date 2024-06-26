import { styled } from '@linaria/react'

import Colors from '../utils/Colors'
import { rwd } from '../utils/Mixins'

const WrapperHeight = 35
export const WrapperStyle = styled.div`
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: space-between;
  height: ${`${WrapperHeight}px`};
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
  ${rwd('md')}{
    padding-bottom: 0; 
  max-height: calc(100vh - ${`${WrapperHeight * 2}px`});
  }

  &::before {
    content: url(../../../public/Vector.svg);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1
    
    ${rwd('md')}{
      content: '';
    } 
  }
`

export const InnerStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  gap: 1rem;
  width: 80%;
  max-width: 1000px;

  ${rwd('md')}{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    width: 100%;
    height: 100%;
  }
`

export const MenuStyle = styled.div`
  ${rwd('md')}{
    width: 100%;
    height: 100%;
    overflow: auto; 
    background-color: ${Colors.Primary[200]};
    border-top:1rem solid ${Colors.Primary[200]};
    border-bottom: 1rem solid ${Colors.Primary[200]};
  }

  h4{
    font-size: 2rem;
    color: ${Colors.Primary[900]};
    margin-bottom: 1.8rem;

    ${rwd('md')}{
      display: none;
    }
  }
`

export const MenuListStyle = styled.div`
  display: grid;
  grid-template-columns: 10rem repeat(2, 3rem);
  line-height: 1.5rem;
  gap: 2rem;

  ${rwd('md')}{
    background-color: ${Colors.White[300]};
    grid-template-columns: 10rem repeat(2, 1fr);
    margin: 0 1rem;
    padding: 1rem;
  }

  div:not(:first-child){
    text-align: center;
  }
`

export const MenuTitleStyle = styled.p`
  color: ${Colors.Black[700]};  
  margin-bottom: 0.5rem;
`

export const MenuTextStyle = styled.p<MenuTextType>`
  position: relative;
  line-height: 1.8rem;
  width: ${({ $selected }) => (
    $selected ? 'fit-content' : 'auto'
  )};
  cursor: pointer;


  &::before{
    content: "";
    position: absolute;
    width: ${(props) => (props.$selected ? '100%' : '0')};
    height: 10px;
    background-color:${Colors.Primary.transparency};
    border-radius: 2px;
    bottom: 4px;
    transition: 0.2s;   
  }
`

export const CoffeeCapStyle = styled.div`
  ${rwd('md')}{
    transform: scale(0.8);
  }
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

const CoffeeCapMargin = styled.div`
  margin-left: -25px;
`

export const CoffeeCapLidMiddleStyle = styled(CoffeeCapMargin)`
  background-color: ${Colors.White[500]};
  position: relative;
  z-index: 25;
  width: 250px;
  height: 35px;
  border-radius: 10px 10px 5px 5px;
  clip-path: polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%);
`

export const CoffeeCapFillingStyle = styled.div`
  position: relative;
`

export const CoffeeCapFillingBorderStyle = styled.div`
  z-index: -23;
  background-color: ${Colors.Black[200]};
  border-top: 4px solid ${Colors.Black.transparency};
  width: 230px;
  height: 280px;
  margin-top: -1px;
  margin-left: -15px;
  clip-path: polygon(0 0%, 100% 0, 88% 100%, 14% 100%);
 
`
export const CoffeeCapFillingMaskStyle = styled(CoffeeCapFillingBorderStyle)`
  position: absolute;
  bottom: 0;
  transform: scale(0.93);
  z-index: 1;
  border: none;
  display: flex;
  flex-direction: column-reverse;
`

export const CoffeeIngredientsStyle = styled.div`
  text-align: center;
  font-size: 1.2rem;
  line-height: 2.2rem;
  transition: flex-grow 0.8s ease; 
  ${rwd('md')}{
    font-size: 1.5rem;
  }
`

export const CoffeeEspressoStyle = styled(CoffeeIngredientsStyle) <CoffeeCapMaskType>`
  background-color: ${Colors.Coffee.Espresso};
  flex-grow:${({ $flex_grow }) => $flex_grow};
  height: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 0)};
  color: ${({ $light_color }) => ($light_color ? Colors.White[500] : Colors.Black[600])};
  overflow: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 'hidden')}; 
`

export const CoffeeMikeStyle = styled(CoffeeIngredientsStyle) <CoffeeCapMaskType>`
  background-color: ${Colors.Coffee.Milk};
  flex-grow:${({ $flex_grow }) => $flex_grow};
  height: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 0)};
  color: ${({ $light_color }) => ($light_color ? Colors.White[500] : Colors.Black[600])};
  overflow: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 'hidden')}; 
`

export const CoffeeMileFoamStyle = styled(CoffeeIngredientsStyle) <CoffeeCapMaskType>`
  background-color: ${Colors.Coffee.MileFoam};
  flex-grow:${({ $flex_grow }) => $flex_grow};
  height: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 0)};
  color: ${({ $light_color }) => ($light_color ? Colors.White[500] : Colors.Black[600])};
  border-radius: 4rem 4rem 0 0;
  overflow: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 'hidden')}; 
`
export const CoffeeButterStyle = styled(CoffeeIngredientsStyle) <CoffeeCapMaskType>`
  background-color: ${Colors.Coffee.Butter};
  flex-grow:${({ $flex_grow }) => $flex_grow};
  height: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 0)};
  color: ${({ $light_color }) => ($light_color ? Colors.White[500] : Colors.Black[600])};
  overflow: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 'hidden')}; 
`
export const CoffeeSyrupStyle = styled(CoffeeIngredientsStyle) <CoffeeCapMaskType>`
  background-color: ${Colors.Coffee.Syrup};
  flex-grow:${({ $flex_grow }) => $flex_grow};
  height: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 0)};
  color: ${({ $light_color }) => ($light_color ? Colors.White[500] : Colors.Black[600])};
  overflow: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 'hidden')}; 
`
export const CoffeeWaterStyle = styled(CoffeeIngredientsStyle) <CoffeeCapMaskType>`
  background-color: ${Colors.Coffee.Water};
  flex-grow:${({ $flex_grow }) => $flex_grow};
  height: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 0)};
  color: ${({ $light_color }) => ($light_color ? Colors.White[500] : Colors.Black[600])};
  overflow: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 'hidden')}; 
`
export const CoffeeMilkSpermStyle = styled(CoffeeIngredientsStyle) <CoffeeCapMaskType>`
  background-color: ${Colors.Coffee.MilkSperm};
  flex-grow:${({ $flex_grow }) => $flex_grow};
  height: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 0)};
  color: ${({ $light_color }) => ($light_color ? Colors.White[500] : Colors.Black[600])};
  overflow: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 'hidden')}; 
`
export const CoffeeChocolateStyle = styled(CoffeeIngredientsStyle) <CoffeeCapMaskType>`
  background-color: ${Colors.Coffee.Chocolate};
  flex-grow:${({ $flex_grow }) => $flex_grow};
  height: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 0)};
  color: ${({ $light_color }) => ($light_color ? Colors.White[500] : Colors.Black[600])};
  overflow: ${({ $flex_grow }) => ($flex_grow ? 'auto' : 'hidden')}; 
`

export const SelectCoffeeStyle = styled(CoffeeCapMargin)`
  color: ${Colors.Primary[900]};
  font-size: 1.2rem;
  text-align: center;
  padding-top: 1rem;
  ${rwd('md')}{
    font-size: 1.5rem;
  }
`
