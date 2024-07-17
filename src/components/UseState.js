import React, { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState(0);


    const [user, setUser] = useState({
        age: 0,
        name: '',
        email: ''
    });



    const updateUser = (updates) => {
        setUser((prevUser) => ({
            ...prevUser,
            ...updates
        }));
    };



    return (
        <div>
            <h1>1.UseState:-</h1>
            <h2>What is UseState?</h2>
            <p>A hook that allows you to add state to functional components.</p>
            <p>Purpose: Manage and update component state in React.</p>
            <h4>Example:-</h4>
            <p>1.Storing one value</p>
            <div className='countbutton'>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>

            <p>2.Storing Multiple Value (Bulk Value)</p>
            <div className='Form'>
                <input
                    type="text"
                    placeholder="Name"
                    value={user.name}
                    onChange={(e) => updateUser({ name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={user.age}
                    onChange={(e) => updateUser({ age: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) => updateUser({ email: e.target.value })}
                />
                <p>Name: {user.name}, Age: {user.age}, Email: {user.email}</p>
            </div>
        </div>
    )
}

export default UseState











