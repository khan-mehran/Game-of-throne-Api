import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import UserDetaul from './UserDetaul';


export const Fetch = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch('https://thronesapi.com/api/v2/Characters')
        .then(response=>response.json())
        .then(json=>{
            console.log(json)
            setData(json)
        })
    }, [])

    const handleChange=(e)=>{
        setSearch(e.target.value);
    }
    const handleAdd=()=>{
        // const found = data.match(data.firstName);
        // console.log(found);
        
    }
    let history = useHistory();
    return (
        <div>
            <input type='text' placeholder='Search Character...' value={handleChange} name={search} />
            <button onClick={handleAdd}>Submit</button>
             <table>
                <thead className='table'>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Details</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName }</td>
                            <Link to={`/fetch/${item.id}`}> 
                            <td className='show-btn'>Show more</td>
                            </Link>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
          
          
        </div>
    )
}
