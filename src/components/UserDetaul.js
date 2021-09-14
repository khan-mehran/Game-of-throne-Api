import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UserDetaul = () => {
    const [data, setData] = useState([]);
    let {id} = useParams();
    useEffect(() => {
        fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
        .then(response=>response.json())
        .then(json=>{
            console.log(json)
            setData([...data, json])
            console.log(data);
        })
    }, [id])
    return (
        <div>
             <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.title}</td>
                            <td><img src={item.imageUrl}></img></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default UserDetaul
