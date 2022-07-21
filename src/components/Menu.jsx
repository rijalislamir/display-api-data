import React from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../store/userSlice'
import { getPosts } from '../store/postSlice'
import { getAlbums } from '../store/albumSlice'

const Menu = ({ setShow }) => {
    const dispatch = useDispatch()

    const handleUsersMenu = () => {
        setShow("users")
        dispatch(getUsers())
    }

    const handlePostsMenu = () => {
        setShow("posts")
        dispatch(getPosts())
    }

    const handleAlbumsMenu = () => {
        setShow("albums")
        dispatch(getAlbums())
    }

    return (
        <div>
            <ul className='flex justify-evenly p-4 font-bold'>
                <li className='cursor-pointer' onClick={handleUsersMenu}>Users</li>
                <li className='cursor-pointer' onClick={handlePostsMenu}>Posts</li>
                <li className='cursor-pointer' onClick={handleAlbumsMenu}>Albums</li>
            </ul>
        </div>
    )
}

export default Menu