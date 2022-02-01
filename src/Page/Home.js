import React, { useState } from 'react';
import PostList from '../Components/PostList';




function Home() {
  const [info, setInfo] = useState([]);
  const [isPending, setIsPending] = useState(true);


  return (
      <>
            <h1>  Home Page </h1>

            {isPending &&  <div>  <h1> Loading ......</h1></div> }
            < PostList />
      </>
  )

}

export default Home;
