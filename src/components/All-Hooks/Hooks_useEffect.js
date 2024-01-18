import React from 'react'
import { useEffect, useState } from 'react';

const Hooks_useEffect = () => {
    const [count, setCount] = useState({
        num: 1,
        id: "001"
    });  // for using in object type

    const [screenWidth, setCrenWidth] = useState(window.innerWidth);

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


    useEffect(() => {
        // console.log("use Effet called only one time when depedcy is update when called multiple");
        window.addEventListener('resize', () => {
            setCrenWidth(window.innerWidth);
        });
        // console.log('Count changes for Random..');
        // setCount({
        //     num:500,   by default id passed 
        //     id:'S0112',
        // })
        return () =>{     // unMounting useEffectHooks 
            window.removeEventListener('resize');
            // console.log('Count changes for return..');
        }

    }, [count]);


    return (
        <div>
            <h1>useEfects && useEffects.......</h1>
            <button onClick={handleSub}>Sub - </button>   <br />
            <span>{count.num} id is {count.id}</span> <br />
            <span>Screen Width change {screenWidth}</span> <br />
            <button onClick={handleAdd}>Add +</button>
        </div>
    )
}

export default Hooks_useEffect;
