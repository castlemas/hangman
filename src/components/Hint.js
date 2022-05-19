import React from 'react'

export const Hint = ({hintWord}) => {

  return (
    <div className='hint'>
        <span>
            <h3>Hint!</h3>
            <p>{hintWord}</p>
        </span>
    </div>
  )
}
