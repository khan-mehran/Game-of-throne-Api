import React, { useState } from 'react'
import styles from './list.module.css'

export const List = () => {
    const [name, setName] = useState('');
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleAdd=()=>{
        setData([...data, name]);
        setName('');
        setCount(count+1);
    }
    return (
        <div>
            <input type="text" name="name" id="name" placeholder="Enter Name" value={name} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>

            {data.map((name,index)=>
               {
                return <ul key={index}>
                        <li>{name}</li>
                    </ul>
                }
            
            )}
            <div>
                <h1>Counting</h1>
                <p>{count}</p>
            </div>
        </div>
    )
}
