const breakpoints: { [key: string]: string } = {
  xs: '480px',
  md: '768px',
}

const rwd = (breakpoint: string) => {
  const point = breakpoints[breakpoint]
  if (!point) {
    console.warn(`Invalid breakpoint: ${breakpoint}.`)
    return ''
  }
  return `@media (max-width: ${point})`
}

export { breakpoints, rwd }
