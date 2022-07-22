import React, { useEffect } from 'react'
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
    
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <>
            <ul className='flex justify-evenly p-4 font-bold md:flex-col md:justify-start md:items-center md:w-80 md:fixed'>
                <li className='cursor-pointer md:py-4' onClick={handleUsersMenu}>Users</li>
                <li className='cursor-pointer md:py-4' onClick={handlePostsMenu}>Posts</li>
                <li className='cursor-pointer md:py-4' onClick={handleAlbumsMenu}>Albums</li>
            </ul>
        </>
    )
}

export default Menu