import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../store/userSlice'
import { selectAlbums } from '../store/albumSlice'

const Albums = ({ show }) => {
    const users = useSelector(selectUsers)
    const albums = useSelector(selectAlbums)

    return (
        <div>
            {show === "albums" && albums.map((album, i) => 
                <div
                    key={"album-"+i}
                    className="border-2 p-4 rounded-lg my-2 cursor-pointer"
                >
                    <h1 className='font-bold text-xl'>{album.title}</h1>
                    <span className='text-sm'>Author: {users[album.userId-1].name}</span>
                </div>
            )}
        </div>
    )
}

export default Albums