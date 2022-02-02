import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
const urlDetails = 'http://127.0.0.1:8000/list/'
const urlDelete = 'http://127.0.0.1:8000/delete/'




function BlogList() {
    const history = useHistory()
    const {id} = useParams()
    const url = urlDetails + id
    console.log(url); 
    
    const [info, setInfo] = useState([]);


    const get_details = async () => {
        const res = await fetch(url);
        const users = await res.json()
        setInfo(users)
        console.log(users);
    }



    const handDelete = () => {
        console.log('delete');
        console.log(urlDelete + id);
        fetch(urlDelete + id, {
            method: 'DELETE',
        }).then( () => {
            history.push('/')
            console.log(' item deleted');

        })
    }

    useEffect(() => {
        get_details()
    
      return () => {
        
      };
    }, []);

    let update = `/update/${id}`
    
  return(
      <>
            <h1> Blogdetails {id}</h1>

            <h1> {info.F_name}</h1> 
            <h2>{info.L_name}</h2>
            <p> {info.body}</p>

            <button onClick={handDelete}> Delete</button>


         <Link to={update} style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Update</Link>


            
      </>
  )
}

export default BlogList;
