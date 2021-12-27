import React from 'react'
import { useParams } from 'react-router-dom'

const UserList = () => {

    const {username} = useParams();

    return (
        <div>
            <h3>User Name : {username}</h3>            
        </div>
    )
}

export default UserList
