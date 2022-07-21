import React, { useState } from 'react'

import Users from './Users'
import Posts from './Posts'
import Albums from './Albums'

const Content = ({ show }) => {
    return (
        <div className='p-4'>
            <Users show={show} />
            <Posts show={show} />
            <Albums show={show} />
        </div>
    )
}

export default Content