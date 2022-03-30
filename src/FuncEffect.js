import React , { useState,useEffect} from 'react';


const FuncEffect = () => {  
    const [users , setUsers] = useState ([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const users = await fetch (
            'https://jsonplaceholder.typicode.com/users?'
        ).then(response => response.json())
        setUsers(users)
    }

    return (
        <>
        {users.length > 0 && (
            <>
            <div> User List </div>
            <ul>
                {users.map((user,index) => (
                    <li key={index}>
                        {user.name} {user.email} {user.phone}
                    </li>
                ))}
            </ul>
            </>
        )}
        </>
    )
}

export default FuncEffect; 