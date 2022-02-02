import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const url = 'http://127.0.0.1:8000/create/'




function Create() {
    const history = useHistory()
    const [F_name, setF_name] = useState('');
    const [L_name, setL_name] = useState('');
    const [body, setBody] = useState('');


    const handleForm = (e) => {
        e.preventDefault();

        console.log('workinh');
        console.log(F_name);
        console.log(L_name);
        console.log(body);

        const data = {F_name,L_name, body}

        if(F_name && L_name && body){
            fetch(url,{
                method: 'POST',
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify(data)

            }) .then( () => {
                history.push('/')
                console.log('new blog added'); 
            })
        }



    }

  return( <div>

            <h1>Create</h1>


            <form   onSubmit={handleForm}>

            <input type="text" name="F_name" value={F_name} id=""
            onChange={(e) => setF_name(e.target.value) }
            />

            <input type="text" name="L_name" value={L_name} id=""
            onChange={(e) => setL_name(e.target.value)}
            />


            <input type="text" name="body"  value={body} id="" 
            onChange={(e) => setBody(e.target.value)}
            />

            <button type='submit' onClick={handleForm}> submit</button>


            </form>

  </div>)
}

export default Create;
