import React, { useState } from 'react'

import Users from './Users'
import Posts from './Posts'
import Albums from './Albums'

const Content = ({ show }) => {
    return (
        <div className='grow flex flex-col justify-center p-4 md:ml-80'>
            <Users show={show} />
            <Posts show={show} />
            <Albums show={show} />
        </div>
    )
}

export default Content