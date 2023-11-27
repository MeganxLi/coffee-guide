const CoffeeList: CoffeeListType[] = [
  {
    name: 'Espresso',
    espresso: 1,
  },
  {
    name: 'Americano',
    espresso: 1,
    water: 2,
  },
  {
    name: 'FlatWhit',
    espresso: 1,
    water: 2,
  },
  {
    name: 'Latte',
    espresso: 1,
    milkFoam: 1,
    milk: 1,
  },
  {
    name: 'BrownSugarLatte',
    espresso: 1,
    milkFoam: 1,
    syrup: { number: 0.5, name: 'brownSugar' },
    milk: 1,
  },
  {
    name: 'CaramelLatte',
    espresso: 1,
    milkFoam: 1,
    syrup: 0.5,
    milk: 1,
  },
  {
    name: 'VanillaLatte',
    espresso: 1,
    milkFoam: 1,
    syrup: { number: 0.5, name: 'vanillaSyrup' },
    milk: 1,
  },
  {
    name: 'HazelnutLatte',
    espresso: 1,
    milkFoam: 1,
    syrup: { number: 0.5, name: 'hazelnutSyrup' },
    milk: 1,
  },
  {
    name: 'DoubleLatte',
    espresso: 2,
    milkFoam: 1,
    milk: 1,
  },
  {
    name: 'AlmondLatte',
    espresso: 1,
    milkFoam: 1,
    syrup: { number: 0.5, name: 'almondSyrup' },
    milk: 1,
  },
  {
    name: 'Cappuccino',
    espresso: 1,
    milkFoam: 1,
    milk: 1,
  },
  {
    name: 'Breve',
    milk: 1,
    cafe: 1,
  },
  {
    name: 'Mocha',
    espresso: 1,
    chocolate: 1,
    milk: 1,
    butter: 1,
  },
]

export default CoffeeList
