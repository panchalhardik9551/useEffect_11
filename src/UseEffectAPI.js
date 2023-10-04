import React, { useEffect, useState } from 'react'

export default function UseEffectAPI() {

    const [users, setusers] = useState([])

    const getusers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        setusers(await response.json());
    }

    useEffect(() => {
        getusers();
    }, [])

    return (
        <>
            <h2>List of github users</h2>
            <div>
                {
                    users.map((elem, i) => {
                        return (
                            <div key={i}><br />
                                <span>{elem.id} </span>
                                <h4>{elem.name}</h4>
                                <div><span>{elem.username}</span></div>
                                <div><span>{elem.email5}</span></div>
                                <div><span>{elem.address.street}</span></div>
                                <div><span>{elem.address.suite}</span></div>
                                <div><span>{elem.address.city}</span></div>
                                <div><span>{elem.address.zipcode}</span></div>
                            </div>)
                    })
                }
            </div>

        </>
    )
}
