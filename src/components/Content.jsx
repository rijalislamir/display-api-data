import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../store/userSlice'
import { selectPosts } from '../store/postSlice'
import { selectAlbums } from '../store/albumSlice'

import Users from './Users'


const Content = ({ show }) => {
    const posts = useSelector(selectPosts)
    const albums = useSelector(selectAlbums)

    return (
        <div className='p-4'>
            <Users show={show} />

            {show === "posts" && posts.map((post, i) =>
                <div key={"post-"+i}>{post.title}</div>
            )}
            
            {show === "albums" && albums.map((album, i) =>
                <div key={"post-"+i}>{album.title}</div>
            )}
        </div>
    )
}

export default Content