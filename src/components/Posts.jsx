import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../store/userSlice'
import { selectPosts, isPostsLoading } from '../store/postSlice'

import { BeatLoader } from 'react-spinners'

const Posts = ({ show }) => {
    const users = useSelector(selectUsers)
    const posts = useSelector(selectPosts)
    const isLoading = useSelector(isPostsLoading)

    return (
        <>
            {isLoading 
                ? <BeatLoader className='mx-auto' />
                : show === "posts" && posts.map((post, i) => 
                    <div
                        key={"post-"+i}
                        className="border-2 p-4 rounded-lg my-2 cursor-pointer"
                    >
                        <h1 className='font-bold text-xl'>{post.title}</h1>
                        <span className='text-sm'>Author: {users[post.userId-1].name}</span>
                        <p className='py-4'>{post.body}</p>
                    </div>
                )
            }
        </>
    )
}

export default Posts