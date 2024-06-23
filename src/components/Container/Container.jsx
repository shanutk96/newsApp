import React from 'react'

const Container = ({children}) => { //props destructuing
  return (
    <div className='container'>

        {children}
        <h1>Container</h1>

    </div>
  )
}

export default Container