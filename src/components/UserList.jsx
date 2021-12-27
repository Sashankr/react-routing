import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const UserList = () => {

    const [userData,setUserData] = useState({})

    const {username} = useParams();

    useEffect(()=>{
        fetch('/users.json').then(response=>{
            return response.json()
        }).then(data=>  {
            setUserData(data[username])
        })
    },[username])

    return (
        <div>
            <p>User Name : {userData?.name}</p> 
            <p>Role : {userData?.role}</p>           
        </div>
    )
}

export default UserList
