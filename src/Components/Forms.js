import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// const url = 'http://127.0.0.1:8000/create/' 



function Forms({testname, testlast, testid, testbody}) {

    const history = useHistory()
    const [F_name, setF_name] = useState(testname);
    const [L_name, setL_name] = useState(testlast);
    const [body, setBody] = useState(testbody);

    const url =   `http://127.0.0.1:8000/update/${testid}/ `

    const handleForm = (e) => {
        e.preventDefault();

        console.log('workinh');
        console.log(F_name);
        console.log(L_name);
        console.log(body);

        const data = {F_name,L_name, body}

        if(F_name && L_name && body){
            fetch(url, {
                method: 'PUT',
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify(data)

            }) .then( () => {
                history.push('/')
                console.log('new blog added'); 
            }).catch( (err) => {
                console.log(err);
            })
        }



    }

  return( <div>

            <h1>Update</h1>


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

export default Forms;
