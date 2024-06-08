import { useState } from 'react'

const useToggle = (initialValue = false) => {
    const [toggle,setToggle] = useState(initialValue);
    const toggleHandler = ()=>{
        setToggle((prev)=>!prev);
    }
  return [toggle,toggleHandler];
}

export default useToggle