import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../store/userSlice'
import { selectPosts } from '../store/postSlice'

const Posts = ({ show }) => {
    const users = useSelector(selectUsers)
    const posts = useSelector(selectPosts)

    return (
        <div>
            {show === "posts" && posts.map((post, i) => 
                <div
                    key={"post-"+i}
                    className="border-2 p-4 rounded-lg my-2 cursor-pointer"
                >
                    <h1 className='font-bold text-xl'>{post.title}</h1>
                    <span className='text-sm'>Author: {users[post.userId-1].name}</span>
                    <p className='py-4'>{post.body}</p>
                </div>
            )}
        </div>
    )
}

export default Posts