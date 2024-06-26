import {
  useState, useEffect, RefObject, SetStateAction, Dispatch,
} from 'react'

const useDetectOutsideClick = (
  el: RefObject<HTMLElement> | null,
  initialState: boolean,
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isActive, setIsActive] = useState(initialState)

  useEffect(() => {
    const onClick = (e: any) => {
      // If the active element exists and is clicked outside of
      if (el?.current !== null && !el?.current.contains(e.target)) {
        setIsActive(!isActive)
      }
    }

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener('click', onClick)
    }

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [isActive, el])

  return [isActive, setIsActive]
}

export default useDetectOutsideClick
