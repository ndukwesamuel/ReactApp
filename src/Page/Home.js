import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostList from '../Components/PostList';
const url = 'http://127.0.0.1:8000/'





function Home() {
  const [info, setInfo] = useState([]);
  const [isPending, setIsPending] = useState(true);

  const get_data = () => {
        fetch(url)

        .then( (res) => {
            // console.log(res.json());
            return res.json()
        })
        
        .then( (data) => {
            console.log(data);  
            setInfo(data);
            setIsPending(false);
        })

  }

  useEffect(() => {
   setTimeout(() => {
    get_data()
   }, 1000);
  
    return () => {
      
    };
  }, [url]);
  

  return (
      <>
            <h1>  Home Page </h1>

            {isPending &&  <div>  <h1> Loading ......</h1></div> }
            { info &&  <PostList  blogs={info} /> }
            
      </>
  )

}

export default Home;
