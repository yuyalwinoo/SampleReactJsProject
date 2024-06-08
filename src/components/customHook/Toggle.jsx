import React from 'react'
import useToggle from './useToggle'

const Toggle = () => {
    const [state,useState]=useToggle();
  return (
    <div>
        {
            state && <div style={{fontSize:"32px"}}>
                I'm here.
            </div>
        }
        <button onClick={useState}>{state?"Hide":"Show"}</button>
    </div>
  )
}

export default Toggle