import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Forms from '../Components/Forms';

const url  = 'http://127.0.0.1:8000/list/'




function Update() {
  const {id} = useParams()
  const [first, setFirst] = useState(false);

  const getUsers = async () => {
    const response = await fetch(url + id);
    // console.log(response)
    const users = await response.json();
    setFirst(users);
    // console.log(users);
  };


  useEffect(() => {
    setTimeout(() => {
      getUsers();
    }, 3000);
  
    return () => {
      ;
    };
  }, []);
  



  return (
      <div> 

          <h1> {id}</h1>
          <h1> {first.F_name}</h1>
{/*           
          <Forms  user_id={id} data={first} /> */}
          {first && <Forms
          testlast={first.L_name}
          testname={first.F_name}  testid={first.id} testbody={first.body}/>}
      </div>
  );
}

export default Update;
