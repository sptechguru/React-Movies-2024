import React from 'react'
import { useState } from 'react';

const UseStateHooks = () => {
    const [count, setCount] = useState({
        num: 1,
        id: "001"
    });  // for using in object type

    const handleAdd = () => {
        setCount((prev => {
            return {
                ...prev,
                num: prev.num + 1,
            }
        }));
    }

    const handleSub = () => {
        setCount((prev => {
            return {
                ...prev,
                num: prev.num - 1,
            }
        }));
    }

    return (
        <div>
            <button onClick={handleSub}>Sub - </button>   <br />
            <span>{count.num} id is {count.id}</span> <br />
            <button onClick={handleAdd}>Add +</button>
        </div>
    )
}

export default UseStateHooks;
