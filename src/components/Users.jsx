import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../store/userSlice'

import { BsGlobe2, BsTelephone } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md"

const Users = ({ show }) => {
    const users = useSelector(selectUsers)

    return (
        <div>
            {show === "users" && users.map((user, i) => 
                <div
                    key={"user-"+i}
                    className="border-2 p-4 rounded-lg my-2 cursor-pointer flex"
                >
                    <div className='basis-[45%]'>
                        <div>{user.name}</div>
                        <div>{user.username}</div>
                    </div>

                    <div className='basis-[55%]'>
                        <div className='flex items-center'><MdOutlineMail className='mr-2' />{user.email}</div>
                        <div className='flex items-center'><BsTelephone className='mr-2' />{user.phone}</div>
                        <div className='flex items-center'><BsGlobe2 className='mr-2' />{user.website}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users