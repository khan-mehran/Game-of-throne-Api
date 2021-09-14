import React, { useEffect, useState } from 'react'
import styles from './list.module.css'

export const Todo = () => {
    const [name, setName] = useState('');
    const [student, setStudent] = useState([]);
    // const [count, setCount] = useState(0);

    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleAdd=()=>{
        setStudent([...student,name]);
        setName('');
    }
    const handleRemove=(index)=>{
        const temp =[...student];
        temp.splice(index,1);
        setStudent([...temp]);
    }
    // useEffect(() => {
    //     if(student.length) setCount(count+1);
    // }, [student])

    return (
        <div className={styles.todo}>
            <div>
                <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} />
                <button onClick={handleAdd}>+</button>
            </div>
            <div>
                <h2>Data</h2>
                {student?.map((name,index)=>{
                    return <div key={index}>
                        <p>{name}</p><button onClick={()=>handleRemove(index)}>Remove</button>
                    </div>
                })}
            </div>
            <div>
                <h2>Counter</h2>
                {/* <p>{count}</p> */}
            </div>
        </div>
    )
}
